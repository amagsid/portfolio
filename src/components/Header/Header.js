import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { calcLength, motion } from 'framer-motion';
import Signature from '../../../public/images/Signature';
import SideNav from '../../elements/SideNav/SideNav';
import useBreakpoints from '../../hooks/useMediaQueryIndex';

import {
  Container,
  LogoContainer,
  NavLinksContainer,
  BurgerLine,
  NavLink,
  BurgerIcon,
  ResumeButton,
  MobileNav,
} from './HeaderStyles';

function Header() {
  const ref = useRef();
  const [showBurgerMenu, setBergurMenu] = useState(false);
  const [isNavScrolled, setNavScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isSm, isMd, isLg, active } = useBreakpoints();

  const MobileNavVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
    transition: {
      staggerChildren: 0.2,
    },
  };
  const burgerLineVariant1 = {
    open: { rotate: 45 },
    closed: { rotate: 0 },
    transition: {
      duration: 0.1,
    },
  };
  const burgerLineVariant2 = {
    open: { rotate: -45 },
    closed: { rotate: 0 },
    transition: {
      duration: 0.1,
    },
  };

  const MobileNavItemAnimation = {
    hidden: { x: -10, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

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

  const scrollNavbar = () => {
    let navBar = document.querySelector('.nav');
    let Svg = document.querySelector('.signature');
    if (document.documentElement.scrollTop > 500) {
      // navBar.classList.add('nav-animation');
      setNavScrolled(true);
    }
    if (document.documentElement.scrollTop < 500) {
      // navBar.classList.remove('nav-animation');
      setNavScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => scrollNavbar());
  }, []);

  const variants = {
    unscrolled: { scale: 2 },
    scrolled: { scale: 0.5 },
  };

  return (
    <Container
      className={`fixed w-screen  ${
        isNavScrolled ? `px-[6%]` : `px-[14%]`
      }  pt-3 top-0 left-0
      
      transition-all`}
      variants={navContainerAnimation}
      animate={isNavScrolled ? 'scrolled' : 'unscrolled'}
      style={{ zIndex: '98' }}
    >
      <LogoContainer>
        {' '}
        <Signature isNavScrolled={isNavScrolled} />
      </LogoContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50px',
        }}
      >
         <ThemeSwitch />
      </div>
      <div
        variants={navContainerAnimation}
        initial='hidden'
        animate='show'
        className='hidden mdl:inline-flex items-center '
      >
        <SideNav />
      </div>
    </Container>
  );
}

export default Header;
