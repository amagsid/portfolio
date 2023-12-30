import React, { useState, useEffect, useContext } from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HoveringBanners from '../components/HoveringBanner/HoveringBanner';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';
import { Container, StatusBar, CirclePointer } from './LayoutStyles';
import { ThemeContext } from '../pages/_app';
import { HoverContext } from '../components/Hero/Hero';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
          scaleX: scrollYProgress,
        }}
      />
      <Header />
      <CirclePointer className='custom-cursor'> </CirclePointer>
      <Container>
        <>
          <main>{children}</main>
          <div className='hidden lg:inline md:inline '>
            {/* <HoveringBanners /> */}
          </div>
        </>
      </Container>
      <Footer />
    </motion.div>
  );
};
