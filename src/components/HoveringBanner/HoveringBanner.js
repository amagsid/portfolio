import React from 'react';
import { Banner, Line, Container } from './HoveringBannerStyles';
import SocialIcons from './Socialicons';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../pages/_app';

const HoveringBanner = (props) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	console.log('theme', theme);
	return (
		<Banner className="social-container" position={props.position}>
			<div
				className="pb-5"
				style={{
					writingMode: props.orientation == 'vertical' ? 'vertical-rl' : 'horizontal-tb',
				}}
			>
				{props.position == 'left' && <SocialIcons />}
				{props.position == 'right' && (
					<a href="https://www.w3schools.com" target="_blank">
						<motion.h5
							whileHover={{
								scale: 1.09,
								originY: 1,
								letterSpacing: '8px',
								color: theme == 'dark' ? '#64ffda' : '#d25276',
							}}
							transition={{
								type: 'spring',
								stiffness: 400,
								duration: 0.2,
								// x: { duration: 0.1 },
								// y: { duration: 0.1 },
							}}
							className="email-link"
						>
							amagsid@gmail.com{' '}
						</motion.h5>
					</a>
				)}
			</div>
			<Line> </Line>
		</Banner>
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
