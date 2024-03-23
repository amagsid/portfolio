import React, { useEffect, useContext } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { ThemeContext } from '../../pages/_app';
import BurgerButton from '../BurgerButton/BurgerButton';
import {
  SideBar,
  LinkesContainer,
  SocialContainer,
  Link,
} from './SideNavStyles';
import { GitHub, Twitter, Linkedin, Gitlab, AtSign } from 'react-feather';
import Button from '../Button/Button';

import SocialIcons from '../../elements/SocialIcons/Socialicons';
const links = [
  { name: 'About', to: '#about', id: 1 },
  { name: 'Projects', to: '#projects', id: 2 },
  { name: 'Contact', to: '#contact', id: 3 },
  // { name: 'Blog', to: '#', id: 4 },
];
const icons = [
  {
    name: 'gitHub',
    icon: <GitHub className='tech-icon-small' />,
    href: 'https://github.com/amagsid',
    target: '_blank',
    id: 1,
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className='tech-icon-small' />,
    href: 'https://www.linkedin.com/in/ahmad-m-s/',
    target: '_blank',
    id: 2,
  },
  {
    name: '  TwitterX',
    icon: <Twitter className='tech-icon-small' />,
    href: 'https://github.com/amagsid',
    target: '_blank',
    id: 3,
  },
  {
    name: '  GitLab',
    icon: <Gitlab className='tech-icon-small' />,
    href: 'https://gitlab.com/ahmad.magdy',
    target: '_blank',
    id: 4,
  },
  {
    name: 'Email',
    icon: <AtSign className='tech-icon-small' />,
    href: 'mailto:amagsid@gmail.com',
    target: '_blank',
    id: 5,
  },
];

const linkContainerVariants = {
  closed: {
    opacity: 0,
    y: -10,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};
const navLinkVariant = {
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

function SideNav() {
  const [open, cycleOpen] = useCycle(false, true);
  const { theme } = useContext(ThemeContext);

  const handleClickExitSideNav = (e) => {
    // if (e.target == e.currentTarget) {
    //   console.log('clicked');
    cycleOpen();
    // }
  };
  return (
    <main>
      <AnimatePresence>
        {open && (
          <SideBar
            theme={theme}
            className=' flex justify-center'
            initial={{ width: 0, height: 0 }}
            animate={{
              width: '100%',
              height: '100%',
            }}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.3,
              ease: 'easeInOut',
            }}
            onClick={handleClickExitSideNav}
            exit={{
              width: 0,
              height: 0,

              transition: {
                delay: 0.3,
              },
            }}
          >
            {/* page links */}
            <div className='side-nav w-[50%] flex flex-column items-center h-[35vh] justify-evenly'>
              <LinkesContainer
                className=' flex w-full justify-around'
                initial='closed'
                animate='open'
                exit='closed'
                variants={linkContainerVariants}
              >
                {links.map(({ name, to, id }) => (
                  <Link
                    className='w-200 text-center font-extralight'
                    style={{ width: '200px', textAlign: 'center' }}
                    key={id}
                    href={to}
                    whileHover={{
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.001,
                      ease: 'easeInOut',
                    }}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    variants={navLinkVariant}
                  >
                    {name}
                  </Link>
                ))}
              </LinkesContainer>

              {/* sovcial links */}
              <SocialContainer
                className='flex w-[100%] justify-evenly'
                initial='closed'
                animate='open'
                exit='closed'
                variants={sideVariants}
              >
                {icons.map(({ name, icon, href, target, id }) => (
                  <motion.a
                    key={id}
                    href={href}
                    target={target}
                    whileHover={{ scale: 1.4 }}
                    transition={{ duration: 0.01, ease: 'easeInOut' }}
                    variants={itemVariants}
                  >
                    {icon}
                  </motion.a>
                ))}
              </SocialContainer>
            </div>

            <motion.div
              // style={{ width: '30%' }}
              // initial='closed'
              // animate='open'
              // exit='closed'

              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 1,
                width: '30%',
                transition: { delay: 0.3 },
              }}
              exit={{
                width: 0,
                opacity: 0,
              }}
            >
              <a href='/Ahmad_Resume.pdf' download target='_blank'>
                <Button
                  // width='30%'
                  // title={['m', 'y', '', '', 'R', 'e', 's', 'u', 'm', 'e']}
                  title={[
                    'D',
                    'O',
                    'W',
                    'N',
                    'L',
                    'O',
                    'A',
                    'D',
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
          </SideBar>
        )}
      </AnimatePresence>

      <div onClick={cycleOpen} className='btn-container flip-button'>
        <BurgerButton isNavOpen={open}></BurgerButton>
      </div>
    </main>
  );
}

export default SideNav;
