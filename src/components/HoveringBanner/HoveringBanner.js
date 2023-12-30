import React, { useState, useEffect } from 'react';
import {
  Banner,
  Line,
  Container,
  LinkContainer,
  EmailLink,
} from './HoveringBannerStyles';
// import SocialIcons from './Socialicons';
import SocialIcons from '../../elements/SocialIcons/Socialicons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../pages/_app';
import ScrollToTopButton from '../../elements/ScrollToTopButton/ScrollToTopButton';
import { NavLink } from '../Header/HeaderStyles';

const HoveringBanner = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const [isLineScrolled, setLineScrolled] = useState(false);

  const arrowUpHeight = useTransform(
    scrollYProgress,
    [0.5, 1],
    ['0px', '100px']
  );

  const navContainerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const navItemAnimation = {
    hidden: { y: -10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.05,
        type: 'spring',
        stiffness: 1000,
      },
    },
  };

  const ItemAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const scrollLine = () => {
    // let navBar = document.querySelector('.nav');
    if (document.documentElement.scrollTop > 1000) {
      // navBar.classList.add('nav-animation');
      setLineScrolled(true);
    }
    if (document.documentElement.scrollTop < 1000) {
      // navBar.classList.remove('nav-animation');
      setLineScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => scrollLine());
  }, []);

  return (
    <>
      <Banner className='social-container' position={props.position}>
        {/* <motion.div
          style={{
            scaleY: scrollYProgress,
            transformOrigin: 'bottom',
            // height: scrollYProgress,

            height: arrowUpHeight,
            // marginBottom: '4px',
            overflow: 'hidden',
          }}
        >
          <ScrollToTopButton></ScrollToTopButton>
        </motion.div> */}

        {props.position == 'left' && (
          <motion.div
            variants={navContainerAnimation}
            // style={{ display: 'flex' }}
            initial='hidden'
            animate='show'
            // className='flex-col items-start justify-content-center pb-12 pl-20 gap-4'
          >
            {/* <motion.div variants={navItemAnimation}>
            <NavLink href='#about'>ABOUT</NavLink>
          </motion.div> */}

            {/* <motion.div variants={navItemAnimation}>
            <NavLink href='#pastwork'>PROJECTS</NavLink>
          </motion.div> */}
            {/* 
          <motion.div variants={navItemAnimation}>
            <NavLink href='#contact'>CONTACT</NavLink>
          </motion.div> */}
          </motion.div>
        )}

        {props.position == 'right' && <SocialIcons />}
      </Banner>
    </>
  );
};
const HoveringBanners = () => {
  return (
    <>
      <HoveringBanner
        position='left'
        content='amagsid@gmail.com'
        orientation='vertical'
      ></HoveringBanner>
      <HoveringBanner
        orientation='horizontal'
        position='right'
      ></HoveringBanner>
    </>
  );
};

export default HoveringBanners;
