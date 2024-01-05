import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function SlideInCard({ text, index, img }) {
  return (
    <motion.div
      className='card'
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
      // viewport={{ once: false }}
    >
      <Image
        src={img}
        alt='image'
        style={{
          height: '100%',
          display: 'block',
          margin: 'auto',
          maxWidth: '100%',
        }}
        // width='500'
        // height='600'
      />
    </motion.div>
  );
}

export default SlideInCard;
