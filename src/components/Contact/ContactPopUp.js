import React, { useEffect, useContext } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { ThemeContext } from '../../pages/_app';
import BurgerButton from '../../elements/BurgerButton/BurgerButton';
import { SideBar } from './ContactPopUpStyles';
import Contact from './Contact';
import { GitHub, Twitter, Linkedin, Gitlab, AtSign } from 'react-feather';
// import Button from '../Button/Button';

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

function ContactPopUp({ setIsPopUpOpen, isPopUpOpen }) {
  // const [open, cycleOpen] = useCycle(false, true);
  // console.log(open, 'open')

  const handlecFormClickExit = () => {
    setIsPopUpOpen(false);
    // cycleOpen();
  };

  const { theme } = useContext(ThemeContext);
  return (
    <AnimatePresence>
      {isPopUpOpen && (
        <SideBar
          style={{ zIndex: '98' }}
          theme={theme}
          initial={{ width: 0, height: 0 }}
          animate={{
            width: '100%',
            height: '100%',
          }}
          // transition={{
          //   type: 'spring',
          //   bounce: 0,
          //   duration: 0.3,
          //   ease: 'easeInOut',
          // }}
          exit={{
            width: 0,
            height: 0,

            transition: {
              delay: 0.2,
            },
          }}
        >
          <motion.div
            onClick={handlecFormClickExit}
            className='btn-container flip-button'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <BurgerButton isNavOpen={open}></BurgerButton>
          </motion.div>

          <div className='h-screen w-[65%] mx-auto my-0 flex flex-col items-center justify-center'>
            {' '}
            <Contact />
            {/* <h1> icons</h1> */}
          </div>
        </SideBar>
      )}
    </AnimatePresence>
  );
}

export default ContactPopUp;
