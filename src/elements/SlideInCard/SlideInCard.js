import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionText } from '../../styles/GlobalComponents';
import { ProjectName } from '../../components/Projects/ProjectsStyles';

function SlideInCard({ name, index, img, description }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card, slide from right instead of left
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1,
        },
      }}
      // viewport={{ once: true }}
      className='card-container w-full flex  items-center justify-between h-[54vh] mb-[12rem] sm:gap-[6rem] '
    >
      {/* project description */}
      <div className='h-full flex flex-column justify-around'>
        <ProjectName className=''> {name}</ProjectName>
        <SectionText> {description}</SectionText>
      </div>
      {/* prject image */}
      <Image
        src={img}
        alt={name}
        className='sm:w-[50%]'
        style={{
          height: '100%',
          objectFit: 'contain',
          maxWidth: '100%',
        }}
      />
    </motion.div>
  );
}

export default SlideInCard;
