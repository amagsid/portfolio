import React, { useEffect } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
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
  { name: 'Projects', to: '#pastwork', id: 2 },
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

              transition: { delay: 0.3, duration: 0.3 },
            }}
          >
            <LinkesContainer
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <Link
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.03 }}
                  variants={itemVariants}
                >
                  {name}
                </Link>
              ))}
            </LinkesContainer>

            <motion.div
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
              style={{ width: '60%' }}
            >
              <SocialContainer>
                {icons.map(({ name, icon, href, target, id }) => (
                  <motion.a
                    key={id}
                    href={href}
                    target={target}
                    whileHover={{ scale: 1.5, strokeWidth: '4' }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    variants={itemVariants}
                  >
                    {icon}
                  </motion.a>
                ))}
              </SocialContainer>
            </motion.div>

            <motion.div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '14rem',
              }}
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              <Button
                variants={itemVariants}
                width='40%'
                // title={['m', 'y', '', '', 'R', 'e', 's', 'u', 'm', 'e']}
                title={[
                  'C',
                  'H',
                  'E',
                  'C',
                  'K',
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
