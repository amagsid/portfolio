import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { Path } from './BurgerButtonStyles';

function BurgerButton({ isNavOpen }) {
  const [isOpen, setOpen] = useState(false);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();
  const path03Controls = useAnimation();

  const path01Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 9.5L24 9.5' },
  };

  const path02Variants = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    moving: { d: 'M0 14.5L24 14.5' },
    closed: { d: 'M0 14.5L15 14.5' },
  };
  const path03Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 20L24 20' },
  };
  const onClick = async () => {
    // change the internal state
    setOpen(!isOpen);

    // start animation
    if (!isOpen) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path03Controls.start(path03Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      path03Controls.start(path03Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  };

  useEffect(() => {
    const closeBurger = async () => {
      if (!isNavOpen) {
        path01Controls.start(path01Variants.closed);
        path03Controls.start(path03Variants.closed);
        await path02Controls.start(path02Variants.moving);
        path02Controls.start(path02Variants.closed);
      } else {
        await path02Controls.start(path02Variants.moving);
        path01Controls.start(path01Variants.open);
        path03Controls.start(path03Variants.open);
        path02Controls.start(path02Variants.open);
      }
    };

    closeBurger();
  }, [isOpen, isNavOpen]);

  return (
    <button
      style={{
        transform: ' rotateY(360deg)',
        display: 'flex',
        width: '40px',
        height: '50px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      <svg width='30' height='30' viewBox='0 0 24 24'>
        <Path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          // stroke='#FFFFFF'
        />
        <Path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          // stroke='#FFFFFF'
        />
      </svg>
    </button>
  );
}

export default BurgerButton;
