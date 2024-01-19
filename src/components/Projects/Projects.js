import React, { useRef } from 'react';
import { Section } from '../../styles/GlobalComponents';
import SlideInCard from '../../elements/SlideInCard/SlideInCard';
import { useInView } from 'react-intersection-observer';
import { motion, useTransform, useScroll } from 'framer-motion';
import SectionTitle from '../../elements/SectionTitle/SectionTitle';

import Bol from '../../../public/images/bol.gif';

import Nike from '../../../public/images/Nike.gif';
import SqSp from '../../../public/images/SqSp.gif';
import BDCRightInd from '../../../public/images/RightInd.gif';

const PastWork = () => {
  let Projects = [
    {
      name: 'Booking.com Top 5 Hotels',
      img: BDCRightInd,
      description:
        'Modular  UI template showcasing top stays in cities around the world. By creating this UI template that gets rendered into a video, client was able to demonstrate different accomodation and their attributes worldwide on the spot without having to create a different video for 50+ cities.',
      link: '',
      techStack: ['Figma', 'JavaScript', 'CSS', 'Nuke'],
    },

    {
      name: 'Nike Landing Page Mockup',
      img: Nike,
      description: `As I got more intersted in Tailwind and what its robustness, I needed a side project to experiment but also expand my hands-on knowledge using it. I picked the Nike.com website with the goal to create a failthful replica. Throughout the process, styling wasn't my only focus but also responsivity`,
      hovered: false,
      link: '',
      techStack: ['Figma', 'Next.js', 'Tailwind'],
    },
    {
      name: 'Bol.com 7 Daagse campaign',
      img: Bol,
      description: `For their annual 7 Daagse campaign, Bol was needed a solution to accelerate the preparation for the campaign across The Netherlands and Belgium. The challenge was to create the template with flexibility for it to go live omn different mediums, including TV.`,
      hovered: false,
      link: 'https://www.linkedin.com/posts/cube-cloud_cube-x-dept-x-bolcom-bol-7-daagse-is-back-activity-7047152373227536384-rb-n?utm_source=share&utm_medium=member_desktop',
      techStack: ['Figma', 'JavaScript', 'CSS'],
    },

    {
      name: 'SquareSpace',
      img: SqSp,
      hovered: false,
      description: `Client wanted to sbowcase the ability of providing customizable website templates. They used a template that focused on typography and interchangeable images to showcase business that used SquareSpace for their website.`,
      link: '',
      techStack: ['Figma', 'JavaScript', 'CSS'],
    },
  ];

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  const scrollTarget = useRef();

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    // offset: ['end end', 'end start'],
  });

  const button1Movement = useTransform(scrollYProgress, [0.85, 1], [700, 0]);
  const button2Movement = useTransform(scrollYProgress, [0.85, 1], [-700, 0]);

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };
  return (
    <Section id='projects' ref={scrollTarget}>
      {/* <MovingSectionTitle sectionTitle='PAST WORK & PROJECTS' /> */}

      {/* <SlideShow></SlideShow> */}

      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        ref={ref}
        // style={{ textAlign: 'right' }}
        className='pb-16'
        // style={{ scale: sectionTitleScale }}
      >
        <SectionTitle
          // style={{ textAlign: 'right' }}
          section='Projects'
        />
      </motion.div>

      {Projects.map((project, i) => (
        <SlideInCard
          key={i}
          name={project.name}
          index={i}
          img={project.img}
          description={project.description}
        />
      ))}
    </Section>
  );
};

export default PastWork;
