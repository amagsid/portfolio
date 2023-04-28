import React from 'react';
// import CV from '../../constants/CV.pdf';
// import { Button } from 'react-bootstrap';
import { IoDocumentText } from 'react-icons/io5';
import Radium, { StyleRoot } from 'radium';
import BgAnimation from '../../components/BackgrooundAnimation/BackgroundAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import MusicContainer from '../AnimatedUL/MusicContainer';

import {
	Section,
	SectionText,
	HighlightedText,
	BigHeading,
	SmallHeading,
	MedHeading,
} from '../../styles/GlobalComponents';

import { LeftSection } from './HeroStyles';

const Hero = () => {
	return (
		<StyleRoot>
			<Section nopadding>
				<LeftSection>
					<HighlightedText> Hey there, my name is</HighlightedText>

					<BigHeading className="pb-4" main center>
						Ahmad Magdy.
					</BigHeading>
					<MedHeading className="mt-4"> I build digital experiences. </MedHeading>
					<SectionText className="mt-5 mb-5">
						Front-end developer specializing in UI. Currently, I’m helping brands
						automate their creative material workflow by building custom, scalable and
						UI-centered web editable video templates at{' '}
						<a href="https://www.ambassadors.com/" target="_blank">
							Ambassadors
						</a>
						.
					</SectionText>
					<blobButton />
					<MusicContainer className="pt-4" />
					{/* <a href="/Ahmad Magdy CV.pdf" download target="_blank">
						<button type="submit">
							download my CV
							<IoDocumentText
								className="pdf-icon"
								size={20}
								style={{ marginLeft: '5px' }}
							/>
						</button>
					</a> */}

					{/* <BgAnimation className="bg-animation" style={{ position: 'relative' }} /> */}
				</LeftSection>
			</Section>
		</StyleRoot>
	);
};

export default Hero;
