import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { Col, Container, Row } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiFillHeart } from 'react-icons/ai';
import { TbBrandFramerMotion } from 'react-icons/tb';
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
			<h5
				style={{
					color: 'white',
					fontWeight: 300,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				made with <TbBrandNextjs className="tech-icon tech-icon-small" /> Next.js,{' '}
				<TbBrandFramerMotion className="tech-icon tech-icon-small" />
				Framer Motion, <SiExpress className="tech-icon" />
				.js - Ahmad Magdy 2023.
			</h5>
		</FooterWrapper>
	);
};

export default Footer;
