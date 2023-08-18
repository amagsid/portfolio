import React from 'react';
import { ArrowHead, ArrowLine } from './ArrowIconStyles';
import { motion, useTransform, useScroll, useDragControls, useMotionValue } from 'framer-motion';

function ArrowIcon() {
	const cardVariants = {
		offscreen: {
			y: 0,
		},
		onscreen: {
			y: 10,

			transition: {
				type: 'spring',
				bounce: 0.6,
				duration: 0.4,
				repeat: Infinity,
				repeatType: 'reverse',
				repeatDelay: 1,
				ease: 'easeInOut',
			},
		},
	};
	return (
		<motion.svg
			variants={cardVariants}
			initial="offscreen"
			animate="onscreen"
			width="14"
			height="101"
			viewBox="0 0 14 101"
			fill="#FF4800"
			xmlns="http://www.w3.org/2000/svg"
		>
			<ArrowHead
				strokeWidth={4}
				d="M12.5806 8.95163C12.2112 8.95155 11.857 8.80474 11.5958 8.54349L7.00867 3.95637L2.42156 8.54349C2.29306 8.67653 2.13935 8.78265 1.9694 8.85566C1.79945 8.92866 1.61667 8.96709 1.43171 8.9687C1.24674 8.9703 1.06332 8.93506 0.892123 8.86502C0.72093 8.79498 0.5654 8.69154 0.434608 8.56075C0.303817 8.42996 0.200383 8.27443 0.130342 8.10324C0.0603014 7.93204 0.0250567 7.74862 0.0266639 7.56366C0.0282712 7.3787 0.0666986 7.19591 0.139704 7.02596C0.212709 6.85601 0.31883 6.7023 0.451875 6.5738L6.02383 1.00184C6.28506 0.740698 6.6393 0.593994 7.00867 0.593994C7.37805 0.593994 7.73229 0.740698 7.99352 1.00184L13.5655 6.5738C13.7602 6.76861 13.8928 7.01679 13.9466 7.28697C14.0003 7.55714 13.9727 7.83718 13.8673 8.09168C13.7619 8.34618 13.5834 8.56371 13.3544 8.71678C13.1254 8.86984 12.8561 8.95157 12.5806 8.95163Z"
				fill="white"
			/>

			<ArrowLine
				initial={{ strokeWidth: 0.5 }}
				animate={{ strokeWidth: 1 }}
				// initial={{ opacity: 0.5 }}
				// animate={{ opacity: 1 }}
				transition={{
					duration: 0.4,
					ease: 'easeInOut',
					repeat: Infinity,
					repeatType: 'reverse',
					repeatDelay: 1,
				}}
				x1="7.00937"
				y1="3.15625"
				x2="7.00937"
				y2="100.5"
				stroke="black"
				stroke-width="1.8"
			/>
		</motion.svg>
	);
}

export default ArrowIcon;
