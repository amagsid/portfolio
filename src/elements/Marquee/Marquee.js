import React from 'react';
import Logos from '../../components/Logos/logos';

import { MarqueeStrip, Track, Typography } from './MarqueeStyles';

const marqueeVariants = {
	hovering: {
		// duration: 50,
		// scale: 0.8,
		animate: {
			transition: {
				x: {
					duration: 50,
				},
			},
		},
	},
	animate: {
		x: ['73vw', '-85vw'],
		transition: {
			x: {
				repeat: Infinity,
				repeatType: 'loop',

				duration: 30,
				ease: 'linear',
			},
		},
	},
};

function Marquee() {
	return (
		<div>
			<MarqueeStrip>
				<Track variants={marqueeVariants} whileHover={'hovering'} animate="animate">
					{/* <Typography>Let's Work Together. Let's Work Together.</Typography> */}
					<Logos> </Logos>
				</Track>
			</MarqueeStrip>
		</div>
	);
}

export default Marquee;
