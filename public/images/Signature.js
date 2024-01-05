import React, { useRef } from 'react';

import { SvgItem, LoadingContainer } from './SignatureStyles';
import {
  motion,
  useTransform,
  useScroll,
  useDragControls,
  useMotionValue,
} from 'framer-motion';

const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transtition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

function Signature({ isNavScrolled }) {
  const variants = {
    unscrolled: { scale: 1 },
    scrolled: { scale: 0.5 },
  };

  //   const greetingScale = useTransform(scrollYProgress, ['0px', '50px'], [1, 2]);
  return (
    // <LoadingContainer>
    <motion.div
    //   animate={isNavScrolled ? 'scrolled' : 'unscrolled'}
    //   variants={variants}
    >
      <SvgItem
        animate={isNavScrolled ? 'scrolled' : 'unscrolled'}
        variants={variants}
        className='signature'
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        height='80'
      >
        <title>signature</title>
        <motion.path
          variants={svgVariants}
          initial='start'
          animate='finished'
          d='M39.58,69l-.49.26a60.79,60.79,0,0,1-17.92,6.42,23.38,23.38,0,0,1-6.78.46,10.75,10.75,0,0,1-3.06-.72.41.41,0,0,0-.57.13l0,0c-2,2.41-4.08,4.83-6.15,7.21-.84,1-1.78,1.84-2.69,2.73a.49.49,0,0,1-.48.08.54.54,0,0,1-.11-.47,1.81,1.81,0,0,1,.31-.54l6.62-9c.29-.4.56-.81.84-1.21.1-.14.14-.25,0-.4a6.42,6.42,0,0,1-1.6-5.63,12.82,12.82,0,0,1,2-5.12,30.22,30.22,0,0,1,7.75-8.15A55,55,0,0,1,25.38,50a4.12,4.12,0,0,0,1.46-1.22c5.22-6.9,10.46-13.8,16.07-20.39s11.33-13,17.32-19.23C61.62,7.69,63.07,6.33,64.51,5a4.38,4.38,0,0,1,1-.72,1.44,1.44,0,0,1,1.93.62A1.39,1.39,0,0,1,67.51,6a6.59,6.59,0,0,1-.61,1.18c-1.21,2-2.48,3.86-3.65,5.84a161.58,161.58,0,0,0-9.9,20c-1.47,3.53-2.82,7.11-4,10.75-.1.33-.07.45.28.58,1.3.46,2.61.91,3.87,1.47a8.24,8.24,0,0,1,3.37,2.64A6.6,6.6,0,0,1,58,50.7a2.58,2.58,0,0,0,.08.26l.07.08.28-.19c3.58-2.9,7.18-5.8,10.75-8.71a2.11,2.11,0,0,0,.62-.83A133.51,133.51,0,0,1,87,12.59a74,74,0,0,1,7.2-8.11,15.89,15.89,0,0,1,4.6-3.15,3.75,3.75,0,0,1,1.77-.39,1.84,1.84,0,0,1,1.34.69,1.64,1.64,0,0,1,0,2.14c-.79,1.08-1.63,2.11-2.49,3.13C98.22,8.36,97,9.78,95.76,11.24c-.82,1-1.57,2-2.37,3A141,141,0,0,0,72.9,48.62,162.88,162.88,0,0,0,66,68.81a83,83,0,0,0-2.28,13.38c-.07.76-.1,1.52-.17,2.28a1.28,1.28,0,0,1-.12.61c-.1.19-.29.43-.46.45a.81.81,0,0,1-.61-.28,1.85,1.85,0,0,1-.35-.8,33.21,33.21,0,0,1-.56-3.71,66.27,66.27,0,0,1,.79-13.93,108.62,108.62,0,0,1,5.42-20.15,1.83,1.83,0,0,0,.16-.68,2.77,2.77,0,0,0-.25.24c-2.24,2.69-4.8,5.09-7.2,7.64-.82.88-1.68,1.73-2.51,2.6a1.5,1.5,0,0,0-.38.58,31.88,31.88,0,0,1-3.11,6.83c-1.73,2.94-3.52,5.86-5.37,8.73s-3.8,5.6-5.72,8.39a1.72,1.72,0,0,0-.33,1.26,7,7,0,0,1,0,1.71c-.08.68-.39.8-1,.48a3.66,3.66,0,0,1-1.66-2.06,16.44,16.44,0,0,1-.84-4.72,62.63,62.63,0,0,1,.15-8.22C39.59,69.33,39.58,69.19,39.58,69Zm4.56-22.65h-.3c-1.82.35-3.65.66-5.45,1.08a47,47,0,0,0-7.6,2.24,1.87,1.87,0,0,0-.76.58c-1.22,1.55-2.41,3.11-3.6,4.68L12.6,73.23l-.14.24.22.1a10.75,10.75,0,0,0,3.48.27,36.19,36.19,0,0,0,8.25-1.68A60.57,60.57,0,0,0,39.78,64.7a.75.75,0,0,0,.35-.6c.17-1.29.31-2.58.52-3.87A91,91,0,0,1,44,46.82C44.05,46.69,44.09,46.56,44.14,46.33Zm12.57-28.2h-.07q-12,13.34-23,27.61c.4-.12.77-.27,1.15-.41a28.35,28.35,0,0,1,9.81-1.72.58.58,0,0,0,.66-.46A146,146,0,0,1,55.91,19.54ZM44.86,61.2c.22-.15.38-.24.53-.35l11-8.4a.58.58,0,0,0,.25-.69,5.73,5.73,0,0,0-3.21-4.15,13.23,13.23,0,0,0-4.32-1.28c-.53-.08-.53-.07-.69.45-1.39,4.61-2.53,9.29-3.5,14C44.9,60.88,44.89,61,44.86,61.2ZM42.71,80.49h.09l.22-.3c.41-.63.81-1.27,1.22-1.89a47.84,47.84,0,0,0,3.81-6.67c1.65-3.69,3.26-7.39,4.89-11.09a1.38,1.38,0,0,0,.08-.27l-.29.17-8.57,5.89a.82.82,0,0,0-.38.6c-.17,1.28-.37,2.57-.52,3.86A63.87,63.87,0,0,0,42.71,80ZM10.46,72.33c4.25-6.31,8.25-12.6,12.7-18.66a1.33,1.33,0,0,0-.42.19c-1.17.82-2.36,1.62-3.5,2.48a31.9,31.9,0,0,0-7.73,8.07,11.41,11.41,0,0,0-1.8,4.26A4.49,4.49,0,0,0,10,71.58C10.16,71.84,10.31,72.09,10.46,72.33Z'
          transform='translate(-1.3 -0.94)'
        />
      </SvgItem>
    </motion.div>
    // </LoadingContainer>
  );
}

export default Signature;
