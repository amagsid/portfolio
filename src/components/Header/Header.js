import Link from 'next/link';
import React, { useState } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { calcLength, motion } from 'framer-motion';

import {
	Container,
	LogoContainer,
	NavLinksContainer,
	BurgerLine,
	NavLink,
	BurgerIcon,
	ResumeButton,
} from './HeaderStyles';

import { Number } from '../../styles/GlobalComponents/index';

function Header() {
	const [isNavScrolled, setNavScrolled] = useState(false);
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

	console.log(isNavScrolled);
	const navItemAnimation = {
		hidden: { y: -10, opacity: 0 },
		show: { y: 0, opacity: 1 },
	};

	window.onscroll = () => {
		scrollNavbar();
	};

	const scrollNavbar = () => {
		let navBar = document.querySelector('.nav');
		if (document.documentElement.scrollTop > 50) {
			console.log('scrolled 100');
			navBar.classList.add('nav-animation');
			setNavScrolled(true);
		}
		if (document.documentElement.scrollTop < 50) {
			console.log('scrolled back from 100');
			navBar.classList.remove('nav-animation');
			setNavScrolled(false);
		}
	};

	return (
		<Container className="sticky top-0 left-0 right-0 nav">
			<LogoContainer>
				<motion.h4
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
				>
					handwritten signature goes here{' '}
				</motion.h4>
			</LogoContainer>
			<div className="hidden mdl:inline-flex items-center gap-7">
				{/* <NavLinksContainer> */}
				<motion.ul
					style={{ display: 'flex', alignItems: 'center' }}
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
							<NavLink>Clients</NavLink>
						</Link>
					</motion.li>
					<motion.li variants={navItemAnimation}>
						<Link href="#experience">
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
						<NavLink>
							{' '}
							<a href="/Ahmad_Resume.pdf" target="_blank">
								{' '}
								<ResumeButton className="px-4 py-2 rounded-md text-[13px]">
									{' '}
									Resume{' '}
								</ResumeButton>{' '}
							</a>
						</NavLink>
					</motion.li>

					{/* </motion.li> */}
				</motion.ul>
				{/* </NavLinksContainer> */}
			</div>
			{/* burger menu button */}
			{/* <motion.li> */}{' '}
			<BurgerIcon className=" w-10 flex flex-col justify-between items-center mdl:hidden text-4xl cursor-pointer overflow-hidden group">
				<BurgerLine className=" w-full h-[2px] inline-flex transform translate-x-0 group-hover:translate-x-4 transition-all ease-in-out duration-300">
					{' '}
				</BurgerLine>
				<BurgerLine className=" w-full h-[2px] inline-flex transform translate-x-4 group-hover:translate-x-0 transition-all ease-in-out duration-300">
					{' '}
				</BurgerLine>
				<BurgerLine className=" w-full h-[2px] inline-flex transform translate-x-0 group-hover:translate-x-4 transition-all ease-in-out duration-300">
					{' '}
				</BurgerLine>
			</BurgerIcon>{' '}
		</Container>
	);
}

export default Header;
