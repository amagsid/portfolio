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
      className={`sticky ${
        isNavScrolled ? `px-[6%]` : `px-[14%]`
      }  pt-3 sticky top-0 left-0
      
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

      {/* burger menu button */}
      {isSm && (
        <>
          <BurgerIcon
            animate={{
              rotate: isOpen ? 45 : 0,
            }}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className='w-10 hidden text-4xl cursor-pointer overflow-hidden group'
          >
            <BurgerLine
              style={{ transformOrigin: '14px 7px' }}
              animate={{
                rotate: isOpen ? 50 : 0,
                // transformOrigin: 'center',
              }}
              className=' w-full h-[2px] inline-flex  '
            >
              {' '}
            </BurgerLine>
            {!isOpen && (
              <BurgerLine className=' w-full h-[2px] inline-flex transform translate-x-2 group-hover:translate-x-0 transition-all ease-in-out duration-300'>
                {' '}
              </BurgerLine>
            )}

            <BurgerLine
              style={{ transformOrigin: '10px -5px' }}
              animate={{
                rotate: isOpen ? -50 : 0,
                transformOrigin: 0.2,
              }}
              className=' w-full h-[2px] inline-flex  '
            >
              {' '}
            </BurgerLine>
          </BurgerIcon>

          <MobileNav
            animate={isOpen ? 'open' : 'closed'}
            ref={ref}
            variants={MobileNavVariants}
          >
            <motion.ul
              style={{
                padding: '100px 45px 0 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
              variants={navContainerAnimation}
              initial='hidden'
              animate='show'
              className='mb-0 px-12'
            >
              <motion.li
                onClick={() => setIsOpen(false)}
                className='py-4'
                variants={MobileNavItemAnimation}
              >
                {/* <Link href="#about" scroll={false}> */}
                <NavLink href='#about'>About</NavLink>
                {/* </Link> */}
              </motion.li>
              <motion.li
                onClick={() => setIsOpen(false)}
                className='py-4'
                variants={MobileNavItemAnimation}
              >
                {/* <Link href="#pastwork" scroll={false}> */}
                <NavLink href='#pastwork'>Clients</NavLink>
                {/* </Link> */}
              </motion.li>
              <motion.li
                onClick={() => setIsOpen(false)}
                className='py-4'
                variants={MobileNavItemAnimation}
              >
                {/* <Link href="#experience" scroll={false}> */}
                <NavLink href='#experience'>Experience</NavLink>
                {/* </Link> */}
              </motion.li>
              <motion.li
                onClick={() => setIsOpen(false)}
                className='py-4'
                variants={MobileNavItemAnimation}
              >
                {/* <Link href="#contact" scroll={false}> */}
                <NavLink href='#contact'>Contact</NavLink>
                {/* </Link> */}
              </motion.li>
              <motion.li
                onClick={() => setIsOpen(false)}
                variants={MobileNavItemAnimation}
              >
                {' '}
                {/* <NavLink> */}{' '}
                <a href='/Ahmad_Resume.pdf' target='_blank'>
                  {' '}
                  <ResumeButton
                    style={{ width: '100px' }}
                    className='mt-3 px-4 py-3 rounded-md text-[13px]'
                  >
                    {' '}
                    Resume{' '}
                  </ResumeButton>{' '}
                </a>
                {/* </NavLink> */}
              </motion.li>
            </motion.ul>
            {/* <motion.div> </motion.div> */}
          </MobileNav>
        </>
      )}
    </Container>
  );
}

export default Header;
