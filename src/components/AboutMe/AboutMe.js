import React from 'react';

import { SkillsList, SkillsListItem } from './AboutMeStyles';
import Logos from '../Logos/logos';
import { Section, SectionText } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import MovingStrip from '../../elements/MovingStrip/MovingStrip';

const AboutMe = () => {
	return (
		<Section id="about">
			<MovingSectionTitle sectionTitle="MORE ABOUT ME"></MovingSectionTitle>

			<SectionText className="mt-5 mb-5">
				Front-end developer specializing in UI. Currently, I’m helping brands automate their
				creative material workflow by building custom, scalable and UI-centered web editable
				video templates at{' '}
				<a href="https://www.ambassadors.com/" target="_blank">
					Ambassadors
				</a>
				.
			</SectionText>
			<blobButton />

			{/* <Carousel></Carousel> */}

			<MovingStrip />
		</Section>
	);
};

export default AboutMe;
