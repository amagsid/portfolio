import React, { useState, useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../../pages/_app';
import useBreakpoints from '../../hooks/useMediaQueryIndex';

import {
  motion,
  useTransform,
  useScroll,
  useDragControls,
  useMotionValue,
} from 'framer-motion';
import { Section, HighlightedText } from '../../styles/GlobalComponents';
import {
  BigHeading,
  MedHeading,
  DragMeSection,
  DragMePromptContainer,
  DragMePromptText,
  IntroText,
} from './GreetingStyles';

function Greeting() {
  const [isHovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({});
  const [touchPos, setTouchPos] = useState({});
  const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);
  const { isSm, isMd, isLg, active } = useBreakpoints();
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  //drag controls
  const divRef = useRef(null);
  const hoverRef = useRef(null);
  const dragControls = useDragControls();
  function startDrag(event) {
    controls.start(event, { snapToCursor: true });
  }

  //parallex scroll animation
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  //hero effects based on greeting drag
  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);
  const GreetingLetterSpacing = useTransform(
    x,
    [-450, 0, 450],
    ['-33px', '15px', '-33px']
  );

  const color =
    theme == 'dark'
      ? useTransform(
          x,
          [-550, -150, -100, 0, 100, 150, 500],
          [
            '#64ffda',
            '#64ffda',
            '#FC7273',
            '#ccd6f6',
            '#FC7273',
            '#64ffda',
            '#64ffda',
          ]
        )
      : useTransform(
          x,
          [-550, -150, -100, 0, 100, 150, 500],
          [
            '#FF3333',
            '#FF3333',
            '#FC7273',
            '#191911',
            '#FC7273',
            '#FF3333',
            '#FF3333',
          ]
        );

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    }, [value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }

  const container = {
    hidden: { opacity: 0.1 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.03,
      },
    },
  };

  const prevxCount = usePrevious(mousePos.x);
  const prevyCount = usePrevious(mousePos.y);
  const prevTouchxCount = usePrevious(touchPos.x);

  //cusotm cursor

  useEffect(() => {
    let dragSection = document.querySelector('.dragme');

    if (isHovered) {
      dragSection.classList.add('doit');
    }
    if (!isHovered) {
      dragSection.classList.remove('doit');
    }

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      setIsMouseMoving(true);
    };
    const handleMouseLeave = (event) => {
      setIsMouseMoving(false);
    };

    if (count === 3) {
      setCount(0);
    }

    if (
      mousePos.x - prevxCount >= 3 ||
      prevxCount - mousePos.x >= 3 ||
      mousePos.y - prevyCount >= 3
    ) {
      setCount(count + 1);
    }

    if (count === 3) {
      setCount(0);
    }

    if (!isSm) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      // divRef.current.removeEventListener('mousemove', handleMouseMove);
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prevxCount, count, prevTouchxCount]);

  return (
    <>
      <div onPointerDown={startDrag} style={{ touchAction: 'none' }} />

      <DragMeSection
        initial={{ x: 0 }}
        animate={{ x: [-500, 0] }}
        transition={{
          type: 'spring',
          bounce: 0.6,
          duration: 1,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
        dragElastic={0.2}
        dragSnapToOrigin={true}
        className='dragme'
        ref={divRef}
        drag='x'
        style={{
          x: x,

          color,
        }}
        dragControls={dragControls}
        dragConstraints={{
          right: 500,
          left: -500,
        }}
        dragTransition={{
          bounceStiffness: 600,
          bounceDamping: 15,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          ref={hoverRef}
          style={{
            position: 'absolute',
            // width: '850px',
            // height: '200px',
            // left: '20px',
          }}
        ></div>
        {count == 0 && (
          <BigHeading
            variants={container}
            initial='hidden'
            animate='show'
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
            }}
          >
            Hello
          </BigHeading>
        )}
        {count == 1 && (
          <BigHeading
            variants={container}
            initial='hidden'
            animate='show'
            style={{
              fontFamily: 'Poppins',
              fontWeight: 100,
              fontStyle: 'italic',
            }}
          >
            Hola
          </BigHeading>
        )}

        {count == 2 && (
          <div>
            <BigHeading
              variants={container}
              initial='hidden'
              animate='show'
              style={{
                fontFamily: 'Poppins',
                fontWeight: 800,
              }}
            >
              Hoi
            </BigHeading>
          </div>
        )}
      </DragMeSection>
    </>
  );
}

export default Greeting;
