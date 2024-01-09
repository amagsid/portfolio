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
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      // viewport={{ once: true }}
      // style={{ width: '100%',  }}
      className='card-container w-full flex items-center justify-between h-[54vh] mb-[12rem] gap-[6rem]'
    >
      {/* project description */}
      <div className='h-full flex flex-column justify-around'>
        <ProjectName> {name}</ProjectName>
        <SectionText> {description}</SectionText>
      </div>
      {/* prject image */}
      <Image
        src={img}
        alt={name}
        style={{
          height: '100%',
          width: '50%',
          objectFit: 'cover',
          maxWidth: '100%',
        }}
      />
    </motion.div>
  );
}

export default SlideInCard;
