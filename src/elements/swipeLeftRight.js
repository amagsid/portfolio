import React from 'react';
import { motion } from 'framer-motion';

function swipeLeftRight() {
	const svgVariants = {
		hidden: {
			x: -30,
		},
		visible: {
			x: [0, -80, 100, 0],

			transition: {
				duration: 1,
				ease: 'easeInOut',
				repeat: Infinity,
				repeatDelay: 2,
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
				duration: 1,
				ease: 'easeInOut',
			},
		},
	};
	return (
		<div style={{ position: 'absolute', top: '23vh', left: '15vw' }}>
			<motion.svg
				id="dragging-icon"
				data-name="dragging-icon"
				xmlns="http://www.w3.org/2000/svg"
				// viewBox="0 0 118.89 124.52"
				viewBox="0 0 200 100"
				width="80px"
				height="80px"
				fill="#8892b0"
				opacity="30%"
				variants={svgVariants}
				initial="hidden"
				animate="visible"
			>
				<title>slide-left-right</title>
				<motion.path
					variants={pathVariants}
					initial="hidden"
					animate="visible"
					d="M42.58,69.16a2.52,2.52,0,0,1-.48-.3c-2-1.55-4.09-3.28-5.94-4.8-2.69-2.21-5.79-4.76-8-6.57a11.36,11.36,0,0,0-4.76-2.4,5.07,5.07,0,0,0-2.69.11,2.82,2.82,0,0,0-1.44,1.48A9.48,9.48,0,0,0,18.75,61a16.75,16.75,0,0,0,1.48,5.35A33.68,33.68,0,0,0,24.14,73a1,1,0,0,1,.18.3L47.67,106.6a2.93,2.93,0,0,1,.52,1.4c.48,3.84,1.29,6.75,2.47,8.56a3.81,3.81,0,0,0,3.43,2H90.83a11,11,0,0,0,6.27-2,20.06,20.06,0,0,0,5.72-6.71s.07-.11.11-.15c.66-1.14,1.55-2.62,2.4-4,3.73-6.12,7-11.47,7.34-19.07l-.22-10.48a1.64,1.64,0,0,1,0-.44c0-.15,0-1.14,0-2.47.07-6.93.18-15.49-6.16-16.56H102.2c0,2-.15,4-.26,5.87-.11,1.73-.22,3.36-.22,4.94a3.06,3.06,0,1,1-6.12,0c0-1.59.11-3.43.22-5.35.41-6.53.89-14-4.32-14.94H87.44a4.93,4.93,0,0,1-.66-.07c0,2.36-.11,4.8-.26,7.16-.11,1.73-.22,3.36-.22,4.94a3.06,3.06,0,0,1-6.12,0c0-1.59.11-3.43.22-5.35.41-6.53.88-14-4.32-14.94H72a3,3,0,0,1-.81-.11V50.65a3.06,3.06,0,1,1-6.12,0v-32c0-5.35-2.18-8.74-5-10.14a7.15,7.15,0,0,0-3.21-.77,7.28,7.28,0,0,0-3.21.77c-2.77,1.4-4.91,4.8-4.91,10.29v56a3.06,3.06,0,0,1-6.12,0V69.16ZM12.29,28.69a2.61,2.61,0,0,0,3.78-3.6L8.7,17.38H30.84a2.61,2.61,0,1,0,0-5.22H8.7l7.38-7.75A2.61,2.61,0,0,0,12.3.81L.72,13a2.62,2.62,0,0,0,0,3.6L12.29,28.69ZM102.52.81a2.61,2.61,0,1,0-3.78,3.6l7.37,7.71H84a2.61,2.61,0,1,0,0,5.22h22.14l-7.38,7.75a2.61,2.61,0,0,0,3.78,3.6l11.58-12.16a2.62,2.62,0,0,0,0-3.6L102.52.81Zm-31.32,32a3,3,0,0,1,.81-.11h4.24a5.53,5.53,0,0,1,.7.07c5.64.89,8.19,4.17,9.22,8.45a3.24,3.24,0,0,1,1.29-.3H91.7a5.53,5.53,0,0,1,.7.07c6.09,1,8.52,4.68,9.41,9.41a1.83,1.83,0,0,1,.48,0h4.24a5.53,5.53,0,0,1,.7.07c11.66,1.81,11.51,13.39,11.4,22.72v2.43l.26,10.77v.33c-.44,9.19-4.06,15.12-8.23,22-.7,1.14-1.4,2.32-2.36,4,0,0,0,.07-.07.11a26.19,26.19,0,0,1-7.56,8.71,17,17,0,0,1-9.7,3.1H54.27a9.62,9.62,0,0,1-8.6-4.65c-1.7-2.51-2.8-6-3.39-10.48L19.41,76.72l-.11-.11a42.42,42.42,0,0,1-4.61-7.78,23.05,23.05,0,0,1-2-7.41,15.16,15.16,0,0,1,1.07-7.23,8.62,8.62,0,0,1,4.76-4.65,10.52,10.52,0,0,1,6.16-.44,17.26,17.26,0,0,1,7.49,3.69c1.84,1.55,4.94,4.06,8,6.53l2.51,2.07V18.84c0-8.15,3.62-13.39,8.3-15.75a13.12,13.12,0,0,1,11.95,0c4.69,2.36,8.37,7.64,8.37,15.64V32.82l-.08,0Z"
				/>
			</motion.svg>
		</div>
	);
}

export default swipeLeftRight;