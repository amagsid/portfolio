import React, { useContext, useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { ThemeContext } from '../../src/pages/_app';

function swipeLeftRight() {
	const { theme } = useContext(ThemeContext);
	const fill = theme == 'dark' ? '#64ffda' : '#e77878';
	const stroke = theme == 'dark' ? '#0a192f' : '#fffcf6';

	const [scope, animate] = useAnimate();

	const svgVariants = {
		hidden: {
			x: 0,
			scale: 1,
		},
		visible: {
			x: [0, 40, 0],
			scale: [1, 0.8, 0.8, 1],

			transition: {
				x: { repeat: Infinity, repeatDelay: 2, duration: 0.5 },
				scale: { repeat: Infinity, repeatDelay: 2, duration: 0.3 },
				// duration: 1,
				// ease: 'easeInOut',
				// repeat: Infinity,
				// repeatDelay: 2,

				staggerChildren: 0.8,
				type: 'spring',
				stiffness: 100,
			},
		},
	};
	const pathVariants = {
		hidden: {
			opacity: 0,
			pathLength: 0,
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			transition: {
				repeat: Infinity,
				repeatDelay: 2,
				duration: 1,
				ease: 'easeInOut',
			},
		},
	};

	// async function myAnimation() {
	// 	await animate(
	// 		scope.current,
	// 		{ scale: [1, 0.5, 1] },
	// 		{
	// 			duration: 0.8,
	// 			repeatDelay: 1.5,
	// 			repeat: Infinity,
	// 			ease: 'easeInOut',
	// 			repeatType: 'mirror',
	// 		}
	// 	);
	// 	// await animate(scope.current, { scale: 0.5 });
	// 	// await animate(scope.current, { scale: 1 });
	// 	// await animate(scope.current, { scale: 1 });
	// 	// await animate(scope.current, { x: 0 });
	// 	// await animate(scope.current, { x: 0 });
	// 	// await animate(scope.current, { x: 100 });
	// 	// await animate(scope.current, { scale: 1 });

	// 	await animate(
	// 		scope.current,
	// 		{
	// 			rotate: -90,
	// 		},
	// 		{
	// 			duration: 2,
	// 			repeatDelay: 1.8,
	// 			// repeat: Infinity,
	// 			ease: 'easeInOut',
	// 			repeatType: 'mirror',
	// 		}
	// 	);
	// }

	// useEffect(() => {
	// 	myAnimation();
	// }, []);
	return (
		<motion.svg
			ref={scope}
			variants={svgVariants}
			initial="hidden"
			animate="visible"
			transition={{ repeat: Infinity }}
			class="svg-icon"
			fill={fill}
			style={{
				position: 'absolute',
				// verticalAlign: 'middle',
				width: '4em',
				height: '3.5em',
				top: '18%',
			}}
			viewBox="0 0 1024 1024"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* right arrow  */}
			<motion.path
				variants={pathVariants}
				// stroke={stroke}
				d="M396.8 666666h204.8l-27.733333 27.733334zM125.866667 279.466667h204.8v-42.666667H125.866667l27.733333-27.733333c8.533333-8.533333 8.533333-21.333333 0-29.866667-8.533333-8.533333-21.333333-8.533333-29.866667 0l-64 64c-8.533333 8.533333-8.533333 21.333333 0 29.866667l64 64c4.266667 4.266667 10.666667 6.4 14.933334 6.4s10.666667-2.133333 14.933333-6.4c8.533333-8.533333 8.533333-21.333333 0-29.866667l-27.733333-27.733333z"
			/>

			{/* left arrow  */}
			<motion.path
				variants={pathVariants}
				d="M396.8 388.266667c-8.533333 8.533333-8.533333 21.333333 0 29.866666 4.266667 4.266667 10.666667 6.4 14.933333 6.4s10.666667-2.133333 14.933334-6.4l64-64c8.533333-8.533333 8.533333-21.333333 0-29.866666l-64-64c-8.533333-8.533333-21.333333-8.533333-29.866667 0s-8.533333 21.333333 0 29.866666l27.733333 27.733334h-204.8v42.666666h204.8l-27.733333"
			/>

			{/* hand */}
			<motion.path
				stroke={stroke}
				d="M945.066667 539.733333c-2.133333-32-4.266667-68.266667-4.266667-136.533333 0-38.4-25.6-68.266667-61.866667-70.4-10.666667 0-19.2 0-27.733333 2.133333v-46.933333c0-38.4-32-70.4-70.4-70.4-10.666667 0-19.2 2.133333-27.733333 6.4-6.4-32-34.133333-55.466667-68.266667-55.466667-38.4 0-70.4 32-70.4 70.4v17.066667c-8.533333-4.266667-17.066667-6.4-27.733333-6.4-38.4 0-70.4 32-70.4 70.4v294.4c-10.666667-19.2-21.333333-40.533333-40.533334-53.333333-53.333333-38.4-108.8-4.266667-110.933333-4.266667l-12.8 8.533333 4.266667 14.933334c2.133333 6.4 14.933333 55.466667 49.066666 142.933333 32 81.066667 72.533333 121.6 100.266667 153.6 27.733333 27.733333 40.533333 42.666667 40.533333 70.4h42.666667c0-44.8-25.6-70.4-53.333333-100.266667-27.733333-29.866667-64-66.133333-91.733334-138.666666-21.333333-53.333333-36.266667-96-42.666666-121.6 12.8-4.266667 32-4.266667 49.066666 8.533333 10.666667 8.533333 21.333333 27.733333 29.866667 44.8 8.533333 17.066667 17.066667 34.133333 29.866667 44.8 8.533333 6.4 19.2 8.533333 23.466666 8.533333l23.466667 2.133334V322.133333c0-14.933333 12.8-27.733333 27.733333-27.733333s27.733333 12.8 27.733334 27.733333v241.066667h42.666666V241.066667c0-14.933333 12.8-27.733333 27.733334-27.733334 14.933333 0 27.733333 12.8 27.733333 27.733334V563.2h42.666667V290.133333c0-14.933333 12.8-27.733333 27.733333-27.733333s27.733333 12.8 27.733333 27.733333v290.133334h42.666667v-198.4c6.4-4.266667 14.933333-6.4 25.6-6.4 19.2 2.133333 21.333333 19.2 21.333333 27.733333 0 70.4 2.133333 106.666667 4.266667 138.666667 2.133333 27.733333 2.133333 51.2 2.133333 87.466666 0 136.533333-17.066667 187.733333-29.866666 228.266667-8.533333 27.733333-17.066667 51.2-17.066667 91.733333h42.666667c0-32 6.4-51.2 14.933333-76.8 14.933333-42.666667 34.133333-98.133333 34.133333-241.066666 0-38.4-2.133333-64-4.266666-91.733334z"
			/>
		</motion.svg>
	);
}

export default swipeLeftRight;
