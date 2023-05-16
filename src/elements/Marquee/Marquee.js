import React, { useState, useCallback, useEffect } from 'react';
import Logos from '../../components/Logos/logos';
import {
	motion,
	useAnimation,
	useTransform,
	useScroll,
	checkTargetForNewValues,
} from 'framer-motion';

import { MarqueeStrip, Track, Typography } from './MarqueeStyles';

function Marquee() {
	//state for hover and duration
	const [isHovered, setHovered] = useState(false);
	const [duration, setDuration] = useState(30);

	const marqueeVariants = {
		// hover: {
		// 	x: {
		// 		repeat: Infinity,
		// 		repeatType: 'loop',
		// 		duration: 200,

		// 		ease: 'linear',
		// 	},

		// 	// x: { duration: 100 },
		// },
		animate: {
			x: ['73vw', '-85vw'],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: duration,

					ease: 'linear',
				},
			},
		},
	};

	return (
		<div>
			<MarqueeStrip

			// onMouseEnter={() => setDuration(100)}
			// onMouseLeave={() => setDuration(30)}
			>
				<Track
				// variants={marqueeVariants} animate="animate"
				>
					{/* <Typography>Let's Work Together. Let's Work Together.</Typography> */}
					<Logos> </Logos>
				</Track>
			</MarqueeStrip>
		</div>
	);
}

export default Marquee;
