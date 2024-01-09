import React, { useState, useEffect, useContext } from 'react';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import AboutMe from '../components/AboutMe/AboutMe';
import { Section } from '../styles/GlobalComponents';
import MusicContainer from '../components/MusicContainer/MusicContainer';
import Contact from '../components/Contact/Contact';
import Greeting from '../components/Hero/Greeting';
import FooterButtons from '../components/FooterButtons/FooterButtons';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';
import { Container, StatusBar, CirclePointer } from './LayoutStyles';
import { ThemeContext } from '../pages/_app';
import { HoverContext } from '../components/Hero/Hero';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const isHovered = useContext(HoverContext);

  console.log(isHovered, 'isHovered');

  // let mouseX = useMotionVsalue(0);
  // let mouseY = useMotionValue(0);

  // function handleMouseMove({ clientX, clientY, currentTarget }) {
  //   let { left, top } = currentTarget.getBoundingClientRect();
  //   let xPosition = clientX - left;
  //   let YPosition = clientY - top;

  //   mouseX.set(xPosition);
  //   mouseY.set(YPosition);

  // }

  useEffect(() => {
    let cursor = document.querySelector('.custom-cursor');

    const handleMouseMove = (e) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div>
      <StatusBar
        style={{
          scaleX: scaleX,
        }}
      />
      <Header />
      <CirclePointer className='custom-cursor'> </CirclePointer>
      {/* <Container> */}

      {/* <main>{children}</main> */}

      <motion.div
        initial={{ x: '-100vw ' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 0.7, bounce: 0.3 }}
      >
        <Hero />
      </motion.div>

      {/* <div className='h-screen w-screen snap-start shrink-0 bg-white h-screen '> */}
      <AboutMe />
      {/* </div> */}

      {/* <Experience /> */}

      <Projects />
      <FooterButtons />

      {/* <div className='h-screen w-screen snap-start shrink-0 bg-white h-fit'> */}
      {/* <Contact /> */}
      {/* </div> */}

      {/* </Container> */}
      <Footer />
    </motion.div>
  );
};
