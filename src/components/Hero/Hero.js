import React, { useState, useContext, useEffect, useRef } from 'react';
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
} from './HeroStyles';
import PhoneHero from './PhoneHero';
import { ThemeContext } from '../../pages/_app';
import { createContext } from 'react';
import { ResumeButton } from '../Header/HeaderStyles';
import Button from '../../elements/Button/Button';

export const HoverContext = createContext();

const Hero = (props) => {
  const [isHovered, setHovered] = useState(false);
  const { theme } = useContext(ThemeContext);
  //mouse position and count to set greeting index
  const [mousePos, setMousePos] = useState({});
  const [touchPos, setTouchPos] = useState({});
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  // const [isDragging, setIsDragging] = useState(false);

  const [count, setCount] = useState(0);

  const { isSm, isMd, isLg, active } = useBreakpoints();

  //drag controls
  const divRef = useRef(null);
  const hoverRef = useRef(null);
  const buttonRef = useRef(null);
  const dragControls = useDragControls();
  function startDrag(event) {
    controls.start(event, { snapToCursor: true });
  }

  //hero effects based on greeting drag
  const x = useMotionValue(0);
  const dragPromptOpacity = useTransform(x, [0, 500], [1, 0]);
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

  const prevxCount = usePrevious(mousePos.x);
  const prevyCount = usePrevious(mousePos.y);
  const prevTouchxCount = usePrevious(touchPos.x);
  const prevTouchyCount = usePrevious(touchPos.y);
  // const handleDrag = (event, info) => {
  //   setIsDragging(true);
  // };

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

    if (count === 5) {
      setCount(0);
    }

    if (
      mousePos.x - prevxCount >= 5 ||
      prevxCount - mousePos.x >= 5 ||
      mousePos.y - prevyCount >= 5
    ) {
      setCount(count + 1);
    }

    if (count === 5) {
      setCount(0);
    }

    if (!isSm) {
      //event listener to loop over greeting word
      // divRef.current.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousemove', handleMouseMove);

      // window.addEventListener('mousehover', handleMouseMove);
    }

    return () => {
      // divRef.current.removeEventListener('mousemove', handleMouseMove);
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prevxCount, count, prevTouchxCount]);

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

  //parallex scroll animation
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const greetingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const greetingScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.5]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.27], [1, 0]);
  const nameScale = useTransform(scrollYProgress, [0.0, 0.1], [1, 1.4]);

  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 0.4],
    ['-5px', '30px']
  );

  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['#ccd6f6', '#64ffda']
  );

  //cusotm cursor

  const handleDragPromptHoverIn = (e) => {
    console.log('hovered');
    setHovered(true);
    // document.querySelector('.drag-prompt').classList.add('drag-prompt-in');
  };
  const handleDragPromptHoverOut = (e) => {
    console.log('UNhovered');
    setHovered(false);
    // document.querySelector('.drag-prompt').classList.remove('drag-prompt-in');
  };

  useEffect(() => {
    // hoverRef.current.addEventListener('mouseenter', handleDragPromptHoverIn);
    // hoverRef.current.addEventListener('mouseleave', handleDragPromptHoverOut);

    const divv = document.querySelector('.drag-prompt');

    const handleMouseMove = (e) => {
      if (divv) {
        divv.style.left = e.pageX + 'px';
        divv.style.top = e.pageY + 'px';
      }
    };
    //event listener to moce drag prompt text div
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <DragMePromptContainer
        style={{
          transform: isHovered
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(.15)',

          // zIndex: '100',
        }}
        className='drag-prompt'
      >
        <DragMePromptText
          style={{
            opacity: isHovered ? '1' : '0.1',
          }}
        >
          {' '}
          drag me{' '}
        </DragMePromptText>
      </DragMePromptContainer>
      {/* )} */}
      {isSm && <PhoneHero></PhoneHero>}
      {!isSm && (
        // <StyleRoot>
        <motion.div
          style={{
            opacity: greetingOpacity,
            // scale: greetingScale,
          }}
        >
          <Section
            ref={targetRef}
            nopadding
            style={{
              height: '88vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: '50',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
              }}
            >
              <div onPointerDown={startDrag} style={{ touchAction: 'none' }} />
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className='hover'>
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
                      scale: greetingScale,

                      color,
                      letterSpacing: GreetingLetterSpacing,
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
                      className='thisss'
                      onMouseEnter={handleDragPromptHoverIn}
                      onMouseLeave={handleDragPromptHoverOut}
                      style={{
                        position: 'absolute',
                        width: '850px',
                        height: '200px',
                        left: '20px',
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
                      <BigHeading
                        variants={container}
                        initial='hidden'
                        animate='show'
                        style={{
                          fontFamily: 'Chivo',
                          textAlign: 'center',
                        }}
                      >
                        CIAO
                      </BigHeading>
                    )}
                    {count == 3 && (
                      <div
                        className='ahlan-container'
                        style={{ position: 'relative' }}
                      >
                        <BigHeading
                          variants={container}
                          initial='hidden'
                          animate='show'
                          style={{
                            fontFamily: 'Cairo',
                            fontWeight: 800,
                            GreetingLetterSpacing,
                          }}
                        >
                          أهلاً
                        </BigHeading>
                      </div>
                    )}
                    {count == 4 && (
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
                </div>
              </motion.div>
              {/* <HighlightedText className='pt-[2em]' main>
                thanks for stopping by! I'm
              </HighlightedText> */}
              <MedHeading className='py-14'>I'm Ahmad Magdy</MedHeading>
              {/* <IntroText>
                Front-end developer. -- one-liner personalized intro goes here
                --
              </IntroText> */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '5rem',
                }}
              >
                {/* <a href='/Ahmad_Resume.pdf' target='_blank'>
                <ResumeButton className='px-4 py-2 rounded-md text-[13px]'>
                  Download My Resume
                </ResumeButton>
              </a> */}

                <Button
                  width='25rem'
                  // title={['m', 'y', '', '', 'R', 'e', 's', 'u', 'm', 'e']}
                  title={['M', 'Y', '', '', 'R', 'E', 'S', 'U', 'M', 'E']}
                />
                <Button
                  width='25rem'
                  // title={['a', 'b', 'o', 'u', 't', '', '', 'm', 'e']}
                  title={['A', 'B', 'O', 'U', 'T', '', '', 'M', 'E']}
                />
              </div>
            </div>
          </Section>
        </motion.div>
      )}
    </>
  );
};

export default Hero;
