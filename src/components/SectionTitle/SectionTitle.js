import React, { useRef } from 'react';
import { SectionTitle, List, ListItem, Item } from './SectionTitleStyles';
import { AnimatePresence, motion, useAnimation, useTransform, useScroll } from 'framer-motion';

function MovingSectionTitle(props) {
	let { scrollYProgress } = useScroll({
		// target: containerRef,
		// offset: ['start end', 'end end'],
	});
	const transsss = useTransform(scrollYProgress, [0, 1], [1, -1550]);
	const headline = Array(20).fill(props.sectionTitle);

	const containerRef = useRef(null);

	// let sectionHeadline =
	return (
		<>
			<SectionTitle>
				<motion.div
					className="motion"
					// ref={containerRef}
					style={{
						// transform: `translateX` + `(-` + scrollYProgress + `px)`,
						translateX: transsss,
						// transition: 'all 630ms ease-out',
					}}
				>
					{headline.map((el) => {
						return (
							<Item
								emailSent={props.emailSent}
								// style={props.emailSent && { fontSize: '1.5rem' }}
							>
								{' '}
								{el}
							</Item>
						);
					})}
				</motion.div>
			</SectionTitle>
		</>
	);
}

export default MovingSectionTitle;
