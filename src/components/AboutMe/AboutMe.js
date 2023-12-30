import React, { useRef, useContext } from 'react';

import { StyledImage, Motto, PictureTent } from './AboutMeStyles';
import Portrait from '../../../public/images/portrait.jpg';
import {
  Section,
  SectionText,
  MobileSection,
} from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import { AnimatePresence } from 'framer-motion';
import { motion, useTransform, useScroll } from 'framer-motion';
// import Timeline from '../TimeLine/TimeLine';
import { ThemeContext } from '../../pages/_app';

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  //parallex scroll animation
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const ImageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const ImageScale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0.85, 1.1, 0.8]
  );
  // const ImagePos = useTransform(scrollYProgress, [0, 0.3, 1], ['0%', '0%', '-10%']);
  return (
    <Section style={{ zIndex: '50' }} background id='about'>
      <MovingSectionTitle sectionTitle='ABOUT ME'></MovingSectionTitle>
      {/* <MobileSection style={{ height: '80%' }}> */}
      <div className='right-section'></div>

      <div className=' py-[200px] flex items-center  h-full lgl:flex-col '>
        <SectionText>
          Front-end developer specializing in UI. Currently, I’m helping brands
          automate their creative workflow by building custom scalable
          web-editable video templates at{' '}
          <a href='https://www.ambassadors.com/' target='_blank'>
            Ambassadors{' '}
          </a>{' '}
          as part of the creative automation team{' '}
          <a href='https://www.ambassadors.com/solutions/cube' target='_blank'>
            Cube
          </a>
        </SectionText>

        <motion.div
          style={{
            scale: ImageScale,
          }}
        ></motion.div>
        <SectionText>
          <span>Okay enough with the CV talk!</span> <br></br> I'm into anything
          tech-related. Over the years, this drive pushed my to achieve my dream
          of becoming a programmer. Other than that, you can find me at the gym,
          meal-prepping or looking for a sunny spot daytime and the stars at
          night. <br />
          <Motto style={{ fontSize: '15px' }}>
            motto: do it with passion or not at all
          </Motto>{' '}
        </SectionText>
      </div>

      {/* <Timeline /> */}
    </Section>
  );
};

export default AboutMe;
