import React, { useRef } from 'react';

import { StyledImage, Motto } from './AboutMeStyles';
import Portrait from '../../../public/images/portrait.jpg';
import { Section, SectionText, MobileSection } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import MovingStrip from '../../elements/MovingStrip/MovingStrip';
import { AnimatePresence } from 'framer-motion';
import { motion, useTransform, useScroll } from 'framer-motion';
import Timeline from '../TimeLine/TimeLine';

const AboutMe = () => {
	//parallex scroll animation
	const targetRef = useRef();

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});

	const ImageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
	const ImageScale = useTransform(scrollYProgress, [0, 0.6, 1], [0.85, 1.1, 0.8]);
	// const ImagePos = useTransform(scrollYProgress, [0, 0.3, 1], ['0%', '0%', '-10%']);
	return (
		<Section background id="about">
			<MovingSectionTitle sectionTitle="WHO IS AHMAD?"></MovingSectionTitle>
			{/* <MobileSection style={{ height: '80%' }}> */}
			<div className="py-12">
				<div className="flex flex-col h-full lgl:flex-row gap-5 ">
					<SectionText>
						Front-end developer specializing in UI. Currently, I’m helping brands
						automate their creative workflow by building custom scalable web-editable
						video templates at{' '}
						<a href="https://www.ambassadors.com/" target="_blank">
							Ambassadors{' '}
						</a>{' '}
						as part of the creative automation team{' '}
						<a href="https://www.ambassadors.com/solutions/cube" target="_blank">
							Cube
						</a>
					</SectionText>

					<motion.div
						style={{
							scale: ImageScale,
							// x: ImagePos,
							// opacity: ImageOpacity,
						}}
					>
						<div>
							<a
								style={{
									backgroundColor: '#64ffda',
									display: 'inline-block',
									borderRadius: '8px',
								}}
							>
								<StyledImage
									ref={targetRef}
									src={Portrait}
									className=" h-auto lg:max-w-[350px]  object-cover shadow-l dark:shadow-gray-800"
								/>
							</a>
						</div>
					</motion.div>
					<SectionText right>
						<span>Okay enough with the CV talk!</span> <br></br> I'm into anything
						tech-related. over the years, this drive pushed my to achieve my dream of
						becoming a programmer. Other than that, you can find me at the gym,
						meal-prepping or looking for a sunny spot daytime and the stars at night.{' '}
						<br />
						<Motto style={{ fontSize: '15px' }}>
							motto: do it with passion or not at all
						</Motto>{' '}
					</SectionText>
				</div>

				<Timeline />
			</div>

			{/* </MobileSection> */}
			<AnimatePresence>
				<MovingStrip />
			</AnimatePresence>
		</Section>
	);
};

export default AboutMe;
