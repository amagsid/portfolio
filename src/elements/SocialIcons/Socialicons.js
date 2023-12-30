import React from 'react';
import { GitHub, Twitter, Linkedin, Gitlab, AtSign } from 'react-feather';
import { SocialContainer } from './SocialiconsStyles';
import { motion, transform } from 'framer-motion';

function Icons() {
  return (
    <SocialContainer>
      <motion.div
        whileHover={{
          scale: 1.2,
          y: -5,
          originY: 1,
          // color: theme == 'dark' ? '#64ffda' : '#d25276',
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
        }}
      >
        <motion.a href='https://github.com/amagsid' target='_blank'>
          <GitHub className='tech-icon-small' />
        </motion.a>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.2,
          y: -5,
          originY: 1,
          // color: theme == 'dark' ? '#64ffda' : '#d25276',
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
        }}
      >
        {' '}
        <motion.a
          // variants={ItemAnimation}
          href='https://www.linkedin.com/in/ahmad-m-s/'
          target='_blank'
        >
          <Linkedin className='tech-icon-small' />
        </motion.a>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.2,
          y: -5,
          originY: 1,
          // color: theme == 'dark' ? '#64ffda' : '#d25276',
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
        }}
      >
        <motion.a
          // variants={ItemAnimation}
          href='https://www.w3schools.com'
          target='_blank'
        >
          <Twitter className='tech-icon-small' />
        </motion.a>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.2,
          y: -5,
          originY: 1,
          // color: theme == 'dark' ? '#64ffda' : '#d25276',
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
        }}
      >
        {' '}
        <motion.a
          // variants={ItemAnimation}
          href='mailto: amagsid@gmail.com'
          target='_blank'
        >
          <AtSign className='tech-icon-small' />
        </motion.a>
      </motion.div>
    </SocialContainer>
  );
}

export default Icons;
