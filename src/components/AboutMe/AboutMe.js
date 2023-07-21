import React from 'react';

import Image from 'next/image';
import Portrait from '../../../public/images/portrait.jpg';
import { Section, SectionText, MobileSection } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import MovingStrip from '../../elements/MovingStrip/MovingStrip';

const AboutMe = () => {
	return (
		<Section id="about" style={{ height: '40vw' }}>
			<MovingSectionTitle sectionTitle="MORE ABOUT ME"></MovingSectionTitle>
			{/* <MobileSection style={{ height: '80%' }}> */}
			<div className="flex flex-col items-center h-full lgl:flex-row gap-16 ">
				<div>
					<SectionText>
						Front-end developer specializing in UI. Currently, I’m helping brands
						automate their creative material workflow by building custom, scalable and
						UI-centered web editable video templates at{' '}
						<a href="https://www.ambassadors.com/" target="_blank">
							Ambassadors
						</a>
						.
					</SectionText>
				</div>

				<div>
					<Image src={Portrait} className="rounded-lg h-full object-cover" />
				</div>
			</div>

			{/* </MobileSection> */}
			<MovingStrip />
		</Section>
	);
};

export default AboutMe;
