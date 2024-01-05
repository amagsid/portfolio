import React, { useRef } from 'react';
import SlideShow from '../Ticker/SlideShow';
import { Section } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import Logos from '../../elements/Logos/logos';
import SlideInCard from '../../elements/SlideInCard/SlideInCard';
import { useInView } from 'react-intersection-observer';
import { motion, useTransform, useScroll } from 'framer-motion';
import SectionTitle from '../../elements/SectionTitle/SectionTitle';
import Button from '../../elements/Button/Button';
import Greeting from '../FooterButtons/FooterGreeting';
import Bol from '../../../public/images/bol.png';
import BDC from '../../../public/images/BDC.png';
import BDCSerenity from '../../../public/images/BDCSerenity.png';
import SqSp from '../../../public/images/SqSp.png';

const PastWork = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  let Projects = [
    {
      name: 'BDC',
      img: BDC,
      hovered: false,
      link: '',
    },
    {
      name: 'bol',
      img: Bol,
      hovered: false,
      link: 'https://www.linkedin.com/posts/cube-cloud_cube-x-dept-x-bolcom-bol-7-daagse-is-back-activity-7047152373227536384-rb-n?utm_source=share&utm_medium=member_desktop',
    },

    {
      name: 'BDC',
      img: BDCSerenity,
      hovered: false,
      link: '',
    },
    {
      name: 'SqSp',
      img: SqSp,
      hovered: false,
      link: '',
    },
  ];

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const scrollTarget = useRef();

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    // offset: ['end end', 'end start'],
  });

  const button1Movement = useTransform(scrollYProgress, [0.85, 1], [700, 0]);
  const button2Movement = useTransform(scrollYProgress, [0.85, 1], [-700, 0]);

  const variants = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      x: 500,
    },
  };
  return (
    <Section id='pastwork' ref={scrollTarget}>
      {/* <MovingSectionTitle sectionTitle='PAST WORK & PROJECTS' /> */}

      {/* <SlideShow></SlideShow> */}

      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        ref={ref}
        style={{ textAlign: 'right' }}
        // style={{ scale: sectionTitleScale }}
      >
        <SectionTitle style={{ textAlign: 'right' }} section='Projects' />
      </motion.div>

      {Projects.map((project, i) => (
        <SlideInCard key={i} text={project.name} index={i} img={project.img} />
      ))}
    </Section>
  );
};

export default PastWork;
