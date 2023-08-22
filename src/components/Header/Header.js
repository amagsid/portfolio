import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { calcLength, motion } from 'framer-motion';
import Signature from '../../../public/images/Signature';

import { Container, LogoContainer, NavLinksContainer, BurgerLine, NavLink, BurgerIcon, ResumeButton, MobileNav } from './HeaderStyles';

function Header() {
	const ref = useRef();
	const [showBurgerMenu, setBergurMenu] = useState(false);
	const [isNavScrolled, setNavScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const MobileNavVariants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: '100%' },
		transition: {
			staggerChildren: 0.2,
		},
	};

	const MobileNavItemAnimation = {
		hidden: { x: -10, opacity: 0 },
		show: { x: 0, opacity: 1 },
	};

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

	const scrollNavbar = () => {
		let navBar = document.querySelector('.nav');
		let Svg = document.querySelector('.signature');
		if (document.documentElement.scrollTop > 100) {
			navBar.classList.add('nav-animation');
			Svg.classList.add('svg-scroll');
			setNavScrolled(true);
		}
		if (document.documentElement.scrollTop < 100) {
			navBar.classList.remove('nav-animation');
			Svg.classList.remove('svg-scroll');
			setNavScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', () => scrollNavbar());
	}, []);

	return (
		<Container
			// style={{ width: '100vw', position: 'relative', left: ' calc(-50vw + 50%)' }}
			className="sticky top-0 left-0 right-0 nav"
			variants={navContainerAnimation}
			initial="hidden"
			animate="show"
		>
			<LogoContainer>
				{' '}
				<Signature isNavScrolled />
			</LogoContainer>
			{/* <div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignnavItemAnimations: 'center',
					flexDirection: 'row',
				}}
			> */}
			 <ThemeSwitch />
			{/* </div> */}
			<div className="hidden mdl:inline-flex items-center gap-7">
				{/* <NavLinksContainer> */}
				<motion.ul style={{ display: 'flex', alignItems: 'center' }} variants={navContainerAnimation} initial="hidden" animate="show" className="mb-0">
					<motion.li variants={navItemAnimation}>
						{/* <Link href="#about" scroll={false}> */}
						<NavLink href="#about">About</NavLink>
						{/* </Link> */}
					</motion.li>
					<motion.li variants={navItemAnimation}>
						{/* <Link href="#pastwork" scroll={false}> */}
						<NavLink href="#pastwork">Clients</NavLink>
						{/* </Link> */}
					</motion.li>
					<motion.li variants={navItemAnimation}>
						{/* <Link href="#experience" scroll={false}> */}
						<NavLink href="#experience">Experience</NavLink>
						{/* </Link> */}
					</motion.li>
					<motion.li variants={navItemAnimation}>
						{/* <Link href="#contact" scroll={false}> */}
						<NavLink href="#contact">Contact</NavLink>
						{/* </Link> */}
					</motion.li>
					<motion.li variants={navItemAnimation}>
						{' '}
						{/* <NavLink> */}{' '}
						<a href="/Ahmad_Resume.pdf" target="_blank">
							{' '}
							<ResumeButton className="px-4 py-2 rounded-md text-[13px]"> Resume </ResumeButton>{' '}
						</a>
						{/* </NavLink> */}
					</motion.li>
				</motion.ul>
			</div>
			{/* burger menu button */}
			<BurgerIcon
				onClick={() => setIsOpen((isOpen) => !isOpen)}
				className=" w-10 flex flex-col justify-between items-center mdl:hidden text-4xl cursor-pointer overflow-hidden group"
			>
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
			<MobileNav animate={isOpen ? 'open' : 'closed'} ref={ref} variants={MobileNavVariants}>
				<motion.ul
					style={{ padding: '100px 45px 0 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
					variants={navContainerAnimation}
					initial="hidden"
					animate="show"
					className="mb-0 px-12"
				>
					<motion.li onClick={() => setIsOpen(false)} className="py-4" variants={MobileNavItemAnimation}>
						{/* <Link href="#about" scroll={false}> */}
						<NavLink href="#about">About</NavLink>
						{/* </Link> */}
					</motion.li>
					<motion.li onClick={() => setIsOpen(false)} className="py-4" variants={MobileNavItemAnimation}>
						{/* <Link href="#pastwork" scroll={false}> */}
						<NavLink href="#pastwork">Clients</NavLink>
						{/* </Link> */}
					</motion.li>
					<motion.li onClick={() => setIsOpen(false)} className="py-4" variants={MobileNavItemAnimation}>
						{/* <Link href="#experience" scroll={false}> */}
						<NavLink href="#experience">Experience</NavLink>
						{/* </Link> */}
					</motion.li>
					<motion.li onClick={() => setIsOpen(false)} className="py-4" variants={MobileNavItemAnimation}>
						{/* <Link href="#contact" scroll={false}> */}
						<NavLink href="#contact">Contact</NavLink>
						{/* </Link> */}
					</motion.li>
					<motion.li onClick={() => setIsOpen(false)} variants={MobileNavItemAnimation}>
						{' '}
						{/* <NavLink> */}{' '}
						<a href="/Ahmad_Resume.pdf" target="_blank">
							{' '}
							<ResumeButton style={{ width: '100px' }} className="mt-3 px-4 py-3 rounded-md text-[13px]">
								{' '}
								Resume{' '}
							</ResumeButton>{' '}
						</a>
						{/* </NavLink> */}
					</motion.li>
				</motion.ul>
				{/* <motion.div> </motion.div> */}
			</MobileNav>
		</Container>
	);
}

export default Header;
