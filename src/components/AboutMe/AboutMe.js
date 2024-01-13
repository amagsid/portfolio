import React, { useRef, useContext } from 'react';

import { StyledImage, Motto, PictureTent } from './AboutMeStyles';
import { Section, SectionText } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Greeting from './smallGreeting';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ThemeContext } from '../../pages/_app';

import SectionTitle from '../../elements/SectionTitle/SectionTitle';

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
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
    <Section ref={scrollTarget} id='about' className='h-screen'>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        ref={ref}
        // style={{ scale: sectionTitleScale }}
      >
        <SectionTitle section='About me' />
      </motion.div>

      <div className=' flex flex-row items-center  lgl:flex-col justify-between'>
        {' '}
        <div className='basis-1/2'>
          <h3 style={{ color: 'white' }}> portrait goes here </h3>
        </div>
        <div className='flex flex-col basis-1/2'>
          <div style={{}}>
            {' '}
            <Greeting className='pb-6  ' />{' '}
          </div>

          <SectionText className='pb-5' style={{ zIndex: '90' }}>
            Back in 2010, I decided to try my hand at creating custom Tumblr
            themes, a month later, I was editing HTML and CSS in wordpress
            templates. Fast-forward to today while hoding a skillset ranging
            from design to web development, I'm currently helping brands
            automate their creative workflow by creating custom-built UI
            templates at
            <a href='https://www.ambassadors.com/' target='_blank'>
              {' '}
              Ambassadors{' '}
            </a>
            as part of the creative automation team
            <a
              href='https://www.ambassadors.com/solutions/cube'
              target='_blank'
            >
              {' '}
              Cube{' '}
            </a>
          </SectionText>
          <div className=' flex gap-12 flex-row lgl:flex-col'>
            <SectionText className='w-[50%]  '>
              <span>Okay enough with the CV talk...</span> <br /> I'm into
              everything tech-related. Be it tech news, product laucnhes or just
              being up-to-date with the current tech trends.
            </SectionText>

            <SectionText className='w-[50%]'>
              When I’m not at the computer or building on my skills, I’m either
              working out, taking pictures, or looking up the nightsky using my
              telescope.
            </SectionText>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
