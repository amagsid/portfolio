import React, { useEffect } from 'react';
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedTextWord({ text, style }) {
	const words = text.split(' ');

	const controls = useAnimation();
	const [ref, inView] = useInView();

	// Variants for Container of words.
	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.8 * i, delayChildren: 0.6 * i },
		}),
	};

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	// Variants for each word.

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 200,
			},
		},
		hidden: {
			opacity: 0,
			x: 20,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 200,
			},
		},
	};

	return (
		<motion.h2 style={style} variants={container} initial="hidden" animate={controls} ref={ref}>
			{' '}
			{words.map((word, index) => (
				<motion.span variants={child} style={{ marginRight: '5px' }} key={index}>
					{word}
				</motion.span>
			))}{' '}
		</motion.h2>
	);
}

export default AnimatedTextWord;
