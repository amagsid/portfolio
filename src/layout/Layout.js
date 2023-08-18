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
import { Container, StatusBar } from './LayoutStyles';

export const Layout = ({ children }) => {
	const { scrollYProgress } = useScroll();
	// let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	// function handleMouseMove({ clientX, clientY, currentTarget }) {
	// 	let { left, top } = currentTarget.getBoundingClientRect();
	// 	let xPosition = clientX - left;
	// 	let YPosition = clientY - top;

	// 	mouseX.set(xPosition);
	// 	mouseY.set(YPosition);
	// }

	return (
		<motion.div>
			<StatusBar
				style={{
					scaleX: scrollYProgress,
				}}
			/>
			<Header />
			<Container>
				<>
					<main>{children}</main>
					<div className="hidden lg:inline md:inline ">
						<HoveringBanners />
					</div>
				</>
			</Container>
			<Footer />
		</motion.div>
	);
};
