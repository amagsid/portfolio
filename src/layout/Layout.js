import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HoveringBanners from '../components/HoveringBanner/HoveringBanner';
import { AnimatePresence, motion, useAnimation, useScroll } from 'framer-motion';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
	const { scrollYProgress } = useScroll();

	return (
		// <Container>
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
		// {/* </Container> */}
	);
};
