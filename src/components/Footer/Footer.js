import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { Col, Container, Row } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { SiNextDotJs } from 'react-icons/si';
import { AiFillHeart } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList></LinkList>
      <Row>
        <Col>
          <h5>
            made with <FaReact />, <SiNextDotJs />, Express.js and{' '}
            <AiFillHeart />. Ahmad Magdy, 2021.
          </h5>
        </Col>
        <Col>
          {' '}
          <SocialIconsContainer>
            <CompanyContainer></CompanyContainer>
            <SocialContainer>
              <SocialIcons href='https://github.com/amagsid' target='_blank'>
                <AiFillGithub size='3rem'></AiFillGithub>
              </SocialIcons>
              <SocialIcons
                href='https://www.linkedin.com/in/ahmad-m-s/'
                target='_blank'
              >
                <AiFillLinkedin size='3rem'></AiFillLinkedin>
              </SocialIcons>
              <SocialIcons
                href='https://twitter.com/isahmad_true'
                target='_blank'
              >
                <AiFillTwitterCircle size='3rem'></AiFillTwitterCircle>
              </SocialIcons>
            </SocialContainer>
          </SocialIconsContainer>
        </Col>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
