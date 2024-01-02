import React, { useState, useContext, useEffect, useRef } from 'react';
import useBreakpoints from '../../hooks/useMediaQueryIndex';

import Greeting from './Greeting';
import Demo from '../inViewPortDemo/inViewPortDemo';
import {
  motion,
  useTransform,
  useScroll,
  useDragControls,
  useMotionValue,
} from 'framer-motion';
import { Section } from '../../styles/GlobalComponents';
import {
  MedHeading,
  DragMePromptContainer,
  DragMePromptText,
} from './HeroStyles';
import PhoneHero from './PhoneHero';
import { ThemeContext } from '../../pages/_app';
import { createContext } from 'react';
import Button from '../../elements/Button/Button';

export const HoverContext = createContext();

const Hero = (props) => {
  const [isHovered, setHovered] = useState(false);
  const { isSm, isMd, isLg, active } = useBreakpoints();

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
  const scrollTarget = useRef();

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['end end', 'end start'],
  });

  const greetingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const buttonsScale = useTransform(scrollYProgress, [0.0, 0.2], [1, 0.75]);
  const button1Movement = useTransform(scrollYProgress, [0.0, 0.2], [0, 700]);
  const button2Movement = useTransform(scrollYProgress, [0.0, 0.2], [0, -700]);
  const nameScale = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.0]);
  const greetingScale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.0]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.27], [1, 0]);
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
    <div>
      {isSm && <PhoneHero></PhoneHero>}
      {!isSm && (
        <div>
          <DragMePromptContainer
            style={{
              transform: isHovered
                ? 'translate(-50%, -50%) scale(1)'
                : 'translate(-50%, -50%) scale(.15)',
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
          <Section
            ref={scrollTarget}
            nopadding
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // position: 'relative',
              zIndex: '50',
            }}
          >
            <div
              style={{
                position: 'fixed',
              }}
            >
              {/* <Demo /> */}
              <motion.div
                style={{ scale: greetingScale, height: '300px' }}
                onMouseEnter={handleDragPromptHoverIn}
                onMouseLeave={handleDragPromptHoverOut}
              >
                <Greeting />
              </motion.div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <motion.div
                  style={{
                    scale: nameScale,
                    flexDirection: 'column',
                  }}
                >
                  <MedHeading className='py-14'>I'm Ahmad Magdy</MedHeading>
                </motion.div>

                <motion.div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5rem',
                    scale: buttonsScale,
                  }}
                >
                  {/* <a href='/Ahmad_Resume.pdf' target='_blank'>
                <ResumeButton className='px-4 py-2 rounded-md text-[13px]'>
                  Download My Resume
                </ResumeButton>
              </a> */}

                  <motion.div
                    style={{ translateX: button2Movement }}
                    className='transition-all'
                  >
                    <Button
                      width='25rem'
                      // title={['m', 'y', '', '', 'R', 'e', 's', 'u', 'm', 'e']}
                      title={['M', 'Y', '', '', 'R', 'E', 'S', 'U', 'M', 'E']}
                    />
                  </motion.div>
                  <motion.div
                    style={{ translateX: button1Movement }}
                    className='transition-all'
                  >
                    <Button
                      width='25rem'
                      // title={['a', 'b', 'o', 'u', 't', '', '', 'm', 'e']}
                      title={['A', 'B', 'O', 'U', 'T', '', '', 'M', 'E']}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
};

export default Hero;
