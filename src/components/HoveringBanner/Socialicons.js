import React from 'react';
import { GitHub, Twitter, Linkedin, Gitlab, AtSign } from 'react-feather';
import { SocialContainer } from './HoveringBannerStyles';
import { motion, transform } from 'framer-motion';

function Icons() {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const ItemAnimation = {
    hidden: { x: -12, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      //  whileHover={{ scale: 1.5 }}
      className='pb-12'
    >
      <SocialContainer
        variants={containerAnimation}
        initial='hidden'
        animate='show'
      >
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
            variants={ItemAnimation}
            href='https://github.com/amagsid'
            target='_blank'
          >
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
            variants={ItemAnimation}
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
            variants={ItemAnimation}
            href='https://www.w3schools.com'
            target='_blank'
          >
            <Twitter className='tech-icon-small' />
          </motion.a>
        </motion.div>

        {/* <motion.div
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
          variants={ItemAnimation}
          href='https://gitlab.com/ahmad.magdy'
          target='_blank'
        >
          <Gitlab className='tech-icon-small' />
        </motion.a>
      </motion.div> */}

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
            variants={ItemAnimation}
            href='mailto: amagsid@gmail.com'
            target='_blank'
          >
            <AtSign className='tech-icon-small' />
          </motion.a>
        </motion.div>
      </SocialContainer>
    </motion.div>
  );
}

export default Icons;
