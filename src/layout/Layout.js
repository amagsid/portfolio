import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HoveringBanners from '../components/HoveringBanner/HoveringBanner';
import {
	AnimatePresence,
	motion,
	useAnimation,
	useScroll,
	useMotionValue,
	useMotionTemplate,
} from 'framer-motion';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
	const { scrollYProgress } = useScroll();
	// let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ clientX, clientY, currentTarget }) {
		let { left, top } = currentTarget.getBoundingClientRect();
		let xPosition = clientX - left;
		let YPosition = clientY - top;

		// setMousePosition({ x: xPosition, y: YPosition });
		mouseX.set(xPosition);
		mouseY.set(YPosition);
	}

	return (
		<motion.div>
			<Container>
				<>
					<motion.div
						style={{
							position: '-webkit-sticky' /* Safari */,
							position: 'fixed',
							zIndex: 100,
							top: 0,
							height: '7px',
							width: '100%',
							backgroundColor: '#64ffda',
							scaleX: scrollYProgress,
						}}
					/>
					<Header />
					<main>{children}</main>
					<HoveringBanners />
					<Footer />
				</>
			</Container>
		</motion.div>
	);
};
