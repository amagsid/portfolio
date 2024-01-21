import React, { useEffect, useContext } from 'react';
import {
  DraggingPromptText,
  PointToTextArrow,
} from './HandWritingAnimationStyles';
import { ThemeContext } from '../../pages/_app';

function HandWritingAnimation({ text, color }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    var vara = new Vara(
      '#vara-container',
      'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json',
      // 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json',
      // 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json',
      [
        {
          text: text,
          fontSize: 11,
          strokeWidth: 1.3,
          color,
          duration: 900,
          // x: 10,
          // y: -10,
          // fromCurrentPosition: {
          // 	x: true, // Boolean
          // 	y: true, // Boolean
          // },
          // queued: true,
          delay: 0,
          letterSpacing: 2,
        },
        // {
        // 	text: 'left or right',
        // 	fontSize: 11,
        // 	strokeWidth: 1.5,
        // 	color,
        // 	duration: 1000,
        // 	// x: 10,
        // 	y: 12,
        // 	// fromCurrentPosition: {
        // 	// 	x: true, // Boolean
        // 	// 	y: true, // Boolean
        // 	// },

        // 	delay: 0,
        // 	letterSpacing: 4,
        // },
      ]
    );
  }, []);
  return (
    <>
      <div
        style={{
          display: 'flex',
          position: 'fixed',
          top: '18vh',
          left: '12vw',
          alignItems: 'center',
        }}
      >
        <DraggingPromptText
          id='vara-container'
          className='z-[20]'
        ></DraggingPromptText>
        <PointToTextArrow
          id='Layer_1'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 29.96 10.32'
          width='30'
          className='SVGGG'
        >
          <title>arrow</title>
          <path
            d='M49.2,19.83a22.13,22.13,0,0,0-6.53-7.12c-.77-.55-1.9.37-1.27,1.19l2.91,3.71c-7.53-3.64-19-6.81-24.85-.68-.3.32.21.87.54.57,6.27-5.62,18.48-1.75,25.31,2.32a16.58,16.58,0,0,0-4.25,1.41c-.94.46-.42,2,.59,1.56a20.26,20.26,0,0,1,6.91-1.56A.9.9,0,0,0,49.2,19.83Z'
            transform='translate(-19.37 -12.54)'
          />
        </PointToTextArrow>
      </div>
    </>
    // <div className="handwriting" style={{ position: 'absolute', top: 0 }}>
    // 	{' '}
    // 	<h1 style={{ color: '#fff' }}>drag me </h1>
    // </div>
  );
}

export default HandWritingAnimation;
