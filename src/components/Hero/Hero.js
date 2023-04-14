import React from 'react';
// import CV from '../../constants/CV.pdf';
// import { Button } from 'react-bootstrap';
import { IoDocumentText } from 'react-icons/io5';
import blobButton from '../blobButton';
import Radium, { StyleRoot } from 'radium';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { LeftSection, SmallHeading, BigHeading } from './HeroStyles';

import { useRef } from 'react';

const Hero = () => {
	return (
		<StyleRoot>
			<Section>
				<LeftSection>
					<SmallHeading> Hi, My name is</SmallHeading>
					<BigHeading main center style={{ color: '#ccd6f6' }}>
						Ahmad Magdy.
					</BigHeading>
					<BigHeading style={{ color: '#8892b0' }}>
						I build things for the web.
					</BigHeading>
					<SectionText className="mt-5" style={{ width: '700px' }}>
						<p>
							I’m a software engineer specializing in building (and occasionally
							designing) exceptional digital experiences. Currently, I’m focused on
							building accessible, human-centered products at{' '}
							<a href="https://www.ambassadors.com/" target="_blank">
								Ambassadors
							</a>
							.
						</p>
					</SectionText>
					<blobButton />

					<a href="/Ahmad Magdy CV.pdf" download target="_blank">
						<button className="offset" type="submit">
							download my CV{' '}
							<IoDocumentText
								className="pdf-icon"
								size={20}
								style={{ marginLeft: '5px' }}
							/>
						</button>
					</a>
				</LeftSection>
			</Section>
		</StyleRoot>
	);
};

export default Hero;
