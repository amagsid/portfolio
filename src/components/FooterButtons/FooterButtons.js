import React, { useRef } from 'react';
import Button from '../../elements/Button/Button';
import Greeting from './FooterGreeting';
import { Section } from '../../styles/GlobalComponents';

import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';

function FooterButtons() {
  const scrollTarget = useRef();

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    // offset: ['end end', 'end start'],
  });

  const button1Movement = useTransform(scrollYProgress, [0.85, 1], [700, 0]);
  const button2Movement = useTransform(scrollYProgress, [0.85, 1], [-700, 0]);

  return (
    <>
      <div
        style={{
          height: '203px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '22rem',
          paddingTop: '80px',
          zIndex: '90',

          // scale: buttonsScale,
        }}
      >
        <motion.div
          style={{ translateX: button2Movement }}
          className='transition-all'
        >
          <Button
            width='25rem'
            // title={['m', 'y', '', '', 'R', 'e', 's', 'u', 'm', 'e']}
            title={['C', 'O', 'N', 'T', 'A', 'C', 'T', '', 'M', 'E']}
          />
        </motion.div>
        <Greeting />
        <motion.div
          style={{ translateX: button1Movement }}
          className='transition-all'
        >
          <Button
            width='25rem'
            // title={['a', 'b', 'o', 'u', 't', '', '', 'm', 'e']}
            title={['M', 'Y', '', 'R', 'E', 'S', 'U', 'M', 'E']}
          />
        </motion.div>
      </div>
    </>
  );
}

export default FooterButtons;