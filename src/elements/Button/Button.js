import React from 'react';
import { stagger, useAnimate } from 'framer-motion';
import { Button } from './ButtonStyles';

function AnimatedClickButton({ title, width }) {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    animate([['.letter', { y: -25 }, { duration: 0.2, delay: stagger(0.05) }]]);
  };
  const onHover = () => {
    animate([
      ['.letter', { y: -21 }, { duration: 0.06, delay: stagger(0.04) }],
    ]);
  };
  const onLeve = () => {
    animate([['.letter', { y: 0 }, { duration: 0.03, delay: stagger(0.03) }]]);
  };
  return (
    <div style={{ width: width }} ref={scope}>
      <Button
        onClick={onLeve}
        onMouseEnter={onHover}
        onMouseLeave={onLeve}
        className='px-4 text-3xl font-bold w-full h-[50px] rounded-full border-4 text-blue-600 transition-all'
      >
        <span
          className='h-8 flex items-center justify-center overflow-hidden transition-all'
          aria-hidden
        >
          {title.map((letter, index) => (
            <span
              data-letter={letter}
              className='px-[2px] letter inline-block relative h-8 after:h-10 after:absolute after:left-0 leading-8 after:top-full after:px-[2px] transition-all after:content-[attr(data-letter)]'
              key={`${letter}-${index}`}
            >
              {' '}
              {letter}{' '}
            </span>
          ))}
        </span>
      </Button>
    </div>
  );
}

export default AnimatedClickButton;
