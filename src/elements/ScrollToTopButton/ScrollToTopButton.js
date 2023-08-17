import React from 'react';
import { CgArrowLongUp } from 'react-icons/cg';
import ArrowIcon from './ArrowIcon';
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollToTopButton() {
	const { scrollYProgress } = useScroll();
	const arrowUpHeight = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

	function scrollToTop() {
		if (!isBrowser()) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const style = { color: 'white', fontSize: '1.5em' };

	return (
		<motion.button onClick={scrollToTop}>
			{' '}
			<ArrowIcon></ArrowIcon>
		</motion.button>
	);
}

export default ScrollToTopButton;
