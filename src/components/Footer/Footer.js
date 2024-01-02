import React from 'react';
import {
  FooterWrapper,
  TechContainer,
  MadeWithText,
  TechText,
  Express,
  NextJs,
  FramerMotion,
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
        <MadeWithText> made with</MadeWithText>
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
        </TechContainer>{' '}
      </div>

      <div
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
      </div>
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
