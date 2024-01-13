import React, { useRef, useState } from 'react';
import Button from '../../elements/Button/Button';
import Greeting from './FooterGreeting';
import { Section } from '../../styles/GlobalComponents';
import ContactPopUp from '../Contact/ContactPopUp';

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
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
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
          onClick={() => setIsPopUpOpen(true)}
        >
          <Button
            width='30rem'
            // title={['m', 'y', '', '', 'R', 'e', 's', 'u', 'm', 'e']}
            title={['S', 'A', 'Y', '', '', 'H', 'E', 'L', 'L', 'O', '?']}
          />
        </motion.div>
        <Greeting />
        <motion.div
          style={{ translateX: button1Movement }}
          className='transition-all'
        >
          <a href='/Ahmad_Resume.pdf' download target='_blank'>
            <Button
              width='30rem'
              // title={['a', 'b', 'o', 'u', 't', '', '', 'm', 'e']}
              title={[
                'G',
                'E',
                'T',
                '',
                '',
                'M',
                'Y',
                '',
                '',
                'R',
                'E',
                'S',
                'U',
                'M',
                'E',
              ]}
            />
          </a>
        </motion.div>
      </div>

      {/* {isPopUpOpen && ( */}
      <ContactPopUp setIsPopUpOpen={setIsPopUpOpen} isPopUpOpen={isPopUpOpen} />
      {/* )} */}
    </>
  );
}

export default FooterButtons;
