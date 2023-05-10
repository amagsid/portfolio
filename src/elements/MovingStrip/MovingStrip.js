import React, { useEffect, useRef } from 'react';
import { Strip, Item } from './MovingStripStyles';
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

let tech = [
	'React •',
	'Next.js •',
	'Node •',
	'TypeScript •',
	'JavaScript ES6 •',
	'Adobve Creative Suite •',
	'Figma',
];

function MovingStrip() {
	const { scrollYProgress } = useScroll();

	//TODO: get starting and ending point to be based on real scroll

	const StripBackgroundColor = useTransform(scrollYProgress, [0.6, 0.8], ['#a0d', '#64ffda']);
	const fontColor = useTransform(scrollYProgress, [0.6, 0.8], ['#ccd6f6', '#0a192f']);

	//initiate animation when in view
	const controls = useAnimation();
	const [ref, inView] = useInView();
	// const inputRef = useRef();

	const scrollHandler = (_) => {
		// console.log('ref', inputRef.current.getBoundingClientRect());
		// const rect = inputRef.current.getBoundingClientRect();
	};
	useEffect(() => {
		window.addEventListener('scroll', scrollHandler, true);
		return () => {
			window.removeEventListener('scroll', scrollHandler, true);
		};
	}, []);

	// Cole Turner (cole.codes)
	// https://cole.codes/posts/framer-motion-useviewportscroll-element-scroll
	// Framer Motion - useViewportScroll when element is in view (2/7)

	// Get the distance from the start of the page to the element start
	// const rect = element.getBoundingClientRect();
	// const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	// const offsetStart = rect.top + scrollTop;

	// Get the distance from the start of the page to the element end
	// const offsetEnd = offsetTop + rect.height;

	// Cole Turner (cole.codes)
	// https://cole.codes/posts/framer-motion-useviewportscroll-element-scroll
	// Framer Motion - useViewportScroll when element is in view (4/7)

	// const elementScrollStart = offsetStart / document.body.clientHeight;
	// const elementScrollEnd = offsetEnd / document.body.clientHeight;

	const itemVariants = {
		visible: {
			opacity: 1,
			scale: 1,

			transition: {
				duration: 1.2,
				type: 'spring',
				stiffness: 100,
				ease: [0.17, 0.67, 0.83, 0.67],
			},
		},
		hidden: { opacity: 0, scale: 0 },
	};
	const StripVariants = {
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				type: 'spring',
				stiffness: 500,
				ease: [0.17, 0.67, 0.83, 0.67],
			},
		},
		hidden: { opacity: 0, scale: 0 },
	};

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);
	return (
		<Strip
			style={{ backgroundColor: StripBackgroundColor }}
			ref={ref}
			// ref={inputRef}
			animate={controls}
			initial="hidden"
			variants={StripVariants}
		>
			{tech.map((el) => {
				return (
					<Item
						ref={ref}
						animate={controls}
						initial="hidden"
						variants={itemVariants}
						style={{ paddingLeft: '10px', color: fontColor }}
					>
						{el}{' '}
					</Item>
				);
			})}
		</Strip>
	);
}

export default MovingStrip;
