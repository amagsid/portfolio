import React, { useState, useEffect } from 'react';
import { Banner, Line, Container, LinkContainer, EmailLink } from './HoveringBannerStyles';
import SocialIcons from './Socialicons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../pages/_app';
import ScrollToTopButton from '../../elements/ScrollToTopButton/ScrollToTopButton';

const HoveringBanner = (props) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { scrollYProgress } = useScroll();
	const [isLineScrolled, setLineScrolled] = useState(false);

	const arrowUpHeight = useTransform(scrollYProgress, [0.5, 1], ['0px', '100px']);

	const containerAnimation = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 1,
				staggerChildren: 0.05,
				type: 'spring',
				stiffness: 1000,
			},
		},
	};

	const ItemAnimation = {
		hidden: { y: -20, opacity: 0 },
		show: { y: 0, opacity: 1 },
	};

	const scrollLine = () => {
		// let navBar = document.querySelector('.nav');
		if (document.documentElement.scrollTop > 1000) {
			// navBar.classList.add('nav-animation');
			setLineScrolled(true);
		}
		if (document.documentElement.scrollTop < 1000) {
			// navBar.classList.remove('nav-animation');
			setLineScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', () => scrollLine());
	}, []);

	return (
		<>
			<Banner className="social-container" position={props.position}>
				<motion.div
					style={{
						scaleY: scrollYProgress,
						transformOrigin: 'bottom',
						// height: scrollYProgress,

						height: arrowUpHeight,
						marginBottom: '4px',
						overflow: 'hidden',
					}}
				>
					<ScrollToTopButton></ScrollToTopButton>
				</motion.div>
				<div
					className="pb-4"
					style={{
						writingMode:
							props.orientation == 'vertical' ? 'vertical-rl' : 'horizontal-tb',
					}}
				>
					{props.position == 'left' && <SocialIcons />}

					{props.position == 'right' && (
						<LinkContainer
							variants={containerAnimation}
							initial="hidden"
							animate="show"
							whileHover={{
								scale: 1.09,
								originY: 1,
								letterSpacing: '8px',
							}}
							transition={{
								type: 'spring',
								stiffness: 400,
								duration: 0.2,
							}}
							className="email-link"
						>
							<EmailLink href="mailto: amagsid@gmail.com" target="_blank">
								<motion.span variants={ItemAnimation}>a</motion.span>
								<motion.span variants={ItemAnimation}>m</motion.span>
								<motion.span variants={ItemAnimation}>a</motion.span>
								<motion.span variants={ItemAnimation}>g</motion.span>
								<motion.span variants={ItemAnimation}>s</motion.span>
								<motion.span variants={ItemAnimation}>i</motion.span>
								<motion.span variants={ItemAnimation}>d</motion.span>
								<motion.span variants={ItemAnimation}>@</motion.span>
								<motion.span variants={ItemAnimation}>g</motion.span>
								<motion.span variants={ItemAnimation}>m</motion.span>
								<motion.span variants={ItemAnimation}>a</motion.span>
								<motion.span variants={ItemAnimation}>i</motion.span>
								<motion.span variants={ItemAnimation}>l</motion.span>
								<motion.span variants={ItemAnimation}>.</motion.span>
								<motion.span variants={ItemAnimation}>c</motion.span>
								<motion.span variants={ItemAnimation}>o</motion.span>
								<motion.span variants={ItemAnimation}>m</motion.span>
							</EmailLink>
						</LinkContainer>
					)}
				</div>
				{/* {isLineScrolled ? <ScrollToTopButton></ScrollToTopButton> : <Line> </Line>} */}
			</Banner>
		</>
	);
};
const HoveringBanners = () => {
	return (
		<>
			<HoveringBanner
				position="right"
				content="amagsid@gmail.com"
				orientation="vertical"
			></HoveringBanner>
			<HoveringBanner orientation="horizontal" position="left"></HoveringBanner>
		</>
	);
};

export default HoveringBanners;
