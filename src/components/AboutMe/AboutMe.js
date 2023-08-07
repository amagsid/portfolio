import React, { useRef } from 'react';

import { StyledImage } from './AboutMeStyles';
import Portrait from '../../../public/images/portrait.jpg';
import { Section, SectionText, MobileSection } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import MovingStrip from '../../elements/MovingStrip/MovingStrip';
import { AnimatePresence } from 'framer-motion';
import { motion, useTransform, useScroll } from 'framer-motion';

const AboutMe = () => {
	//parallex scroll animation
	const targetRef = useRef();

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});

	const ImageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
	const ImageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.7]);
	const ImagePos = useTransform(scrollYProgress, [0, 0.3, 1], ['0%', '0%', '-10%']);
	return (
		<Section background id="about">
			<MovingSectionTitle sectionTitle="MORE ABOUT ME"></MovingSectionTitle>
			{/* <MobileSection style={{ height: '80%' }}> */}

			<div className="flex flex-col items-stretch justify-between h-full lgl:flex-row gap-16 ">
				<div className="flex flex-col justify-evenly">
					<SectionText>
						Front-end developer specializing in UI. Currently, I’m helping brands
						automate their creative workflow by building custom scalable web-editable
						video templates at{' '}
						<a href="https://www.ambassadors.com/" target="_blank">
							Ambassadors{' '}
						</a>
						<a></a>
					</SectionText>
					<SectionText>
						As part of the creative automation team{' '}
						<a href="https://www.ambassadors.com/" target="_blank">
							Cube
						</a>
						, I build custom web UIs that serve as the building blocks for clients to
						scale up their marketing materials, providing custom and scalable templates
						to create videos and images on the fly.
					</SectionText>
				</div>

				<motion.div
					style={{
						scale: ImageScale,
						x: ImagePos,
						// opacity: ImageOpacity,
					}}
				>
					<div>
						<StyledImage
							style={{
								opacity: ImageOpacity,
								zIndex: '1',
							}}
							ref={targetRef}
							src={Portrait}
							className="rounded-lg h-auto lg:max-w-[500px] sm:bg-green-500 object-cover shadow-xl dark:shadow-gray-800"
						/>
					</div>
				</motion.div>
			</div>

			{/* </MobileSection> */}
			<AnimatePresence>
				<MovingStrip />
			</AnimatePresence>
		</Section>
	);
};

export default AboutMe;
