import Link from 'next/link';
import React, { useState } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { motion } from 'framer-motion';

import {
	Container,
	LogoContainer,
	NavLinksContainer,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from './HeaderStyles';

import { Number } from '../../styles/GlobalComponents/index';

function Header() {
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

	return (
		<Container>
			<LogoContainer>
				<motion.h4
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
					style={{ color: '#d25276' }}
				>
					{' '}
					handwritten signature goes here{' '}
				</motion.h4>
			</LogoContainer>
			<NavLinksContainer>
				<motion.ul
					style={{ display: 'flex' }}
					variants={navContainerAnimation}
					initial="hidden"
					animate="show"
				>
					<li
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignnavItemAnimations: 'center',
							flexDirection: 'row',
						}}
					>
						 <ThemeSwitch />
					</li>
					<motion.li variants={navItemAnimation}>
						<Link href="#about">
							<NavLink>
								{/* <Number>01. </Number> */}
								About
							</NavLink>
						</Link>
					</motion.li>
					<motion.li variants={navItemAnimation}>
						<Link href="#pastwork">
							<NavLink>Experience</NavLink>
						</Link>
					</motion.li>
					<motion.li variants={navItemAnimation}>
						<Link href="#contact">
							<NavLink>Contact</NavLink>
						</Link>
					</motion.li>
					<motion.li variants={navItemAnimation}>
						{' '}
						<NavLink>Resume </NavLink>
					</motion.li>
				</motion.ul>
			</NavLinksContainer>
		</Container>
	);
}

export default Header;
