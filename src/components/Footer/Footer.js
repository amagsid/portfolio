import React from 'react';
import {
  FooterWrapper,
  TechContainer,
  FooterParagraph,
  TechText,
  Express,
  NextJs,
  Tailwind,
  StyledComponents,
  Figma,
  VsCode,
  FramerMotion,
  Vercel,
  CopyRight,
  NameYearCopyRight,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FooterParagraph className='font-light text-center'>
          {' '}
          Loosely designed in<span className='font-semibold'> Figma</span>{' '}
          <Figma className='tech-icon tech-icon-small' /> and coded in{' '}
          <span className='font-semibold'>Visual Studio Code</span>{' '}
          <VsCode className='tech-icon tech-icon-small' /> by yours truly.{' '}
          <br />
          Built with
          <span className='font-semibold'> Tailwind CSS</span>{' '}
          <Tailwind className='tech-icon tech-icon-small' />
          <span className='font-semibold'> Styled Components </span>{' '}
          <StyledComponents className='tech-icon' />{' '}
          <span className='font-semibold'> Framer Motion</span>{' '}
          <FramerMotion className='tech-icon tech-icon-small' /> and deployed
          with <span className='font-semibold'>Vercel</span>{' '}
          <Vercel className='tech-icon ' />
          {/* All text is
          set in the Inter typeface.{' '} */}
        </FooterParagraph>
        {/* 
        <TechContainer>
          <NextJs className='tech-icon tech-icon-small' />{' '}
          <TechText>Next.js</TechText>
        </TechContainer>
        <TechContainer>
          <FramerMotion className='tech-icon tech-icon-small' />
          <TechText>Framer Motion</TechText>
        </TechContainer>{' '}
        <TechContainer>
          <Express className='tech-icon' />
          <TechText>.js</TechText>
        </TechContainer>{' '} */}
      </div>

      {/* <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '100',
          paddingTop: '3px',
        }}
       >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
         >
          <CopyRight> </CopyRight>{' '}
          <NameYearCopyRight> 2023 - </NameYearCopyRight>
        </div>
        <NameYearCopyRight>Ahmad Magdy.</NameYearCopyRight>{' '}
        <NameYearCopyRight>All rights reserved.</NameYearCopyRight>
      </div> */}
    </FooterWrapper>
    // <footer>
    //   <a
    //     href='https://www.framer.com/motion/'
    //     target='_blank'
    //     rel='noreferrer'
    //   ></a>
    //   <h1>FOOTER</h1>
    //   <a
    //     href='https://www.framer.com/docs/scroll-animations/'
    //     target='_blank'
    //     rel='noreferrer'
    //   ></a>
    // </footer>
  );
};

export default Footer;
