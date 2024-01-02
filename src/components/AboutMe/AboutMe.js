import React, { useRef, useContext } from 'react';

import { StyledImage, Motto, PictureTent } from './AboutMeStyles';
import Portrait from '../../../public/images/portrait.jpg';
import { Section, SectionText } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Greeting from './Greeting';
import {
  motion,
  useTransform,
  useScroll,
  useViewportScroll,
} from 'framer-motion';
import { ThemeContext } from '../../pages/_app';

import SectionTitle from '../../elements/SectionTitle/SectionTitle';

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  //parallex scroll animation
  const scrollTarget = useRef();

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end'],
  });

  const sectionTitleScale = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const ImageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const ImageScale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0.85, 1.1, 0.8]
  );

  return (
    <Section ref={scrollTarget} id='about'>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'easeInOut' }}
        ref={ref}
        // style={{ scale: sectionTitleScale }}
      >
        <SectionTitle section='About me' />
      </motion.div>

      <div className=' flex flex-row items-center  h-full lgl:flex-col justify-between'>
        {' '}
        <div className='basis-1/2'>
          <h1> Image </h1>
        </div>
        <div className='flex flex-col basis-1/2'>
          <div style={{}}>
            {' '}
            <Greeting style={{ height: '100%' }} />{' '}
          </div>

          <SectionText>
            Front-end developer specializing in UI. Currently, I’m helping
            brands automate their creative workflow by building custom scalable
            web-editable video templates at{' '}
            <a href='https://www.ambassadors.com/' target='_blank'>
              Ambassadors{' '}
            </a>{' '}
            as part of the creative automation team{' '}
            <a
              href='https://www.ambassadors.com/solutions/cube'
              target='_blank'
            >
              Cube
            </a>
          </SectionText>
          <div className=' flex flex-row lgl:flex-col  '>
            <SectionText>
              <span>Okay enough with the CV talk!</span> I'm into anything
              tech-related. Over the years, this drive pushed my to achieve my
              dream of becoming a programmer.
            </SectionText>

            <SectionText>
              I also take lots of pictures and usually chasing the sun when in
              the Netherlands I also take lots of pictures and usually chasing
              the sun when in the Netherlands
            </SectionText>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
