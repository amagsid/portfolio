import React from 'react';
// import CV from '../../constants/CV.pdf';
// import { Button } from 'react-bootstrap';
import { IoDocumentText } from 'react-icons/io5';
import blobButton from '../blobButton';
import Radium, { StyleRoot } from 'radium';

import { Section, SectionText, HighlightedText, BigHeading } from '../../styles/GlobalComponents';

import { LeftSection } from './HeroStyles';

import { useRef } from 'react';

const Hero = () => {
	return (
		<StyleRoot>
			<Section nopadding>
				<LeftSection>
					<HighlightedText> Hi, My name is</HighlightedText>

					<BigHeading main center>
						Ahmad Magdy.
					</BigHeading>
					<BigHeading>I build things for the web.</BigHeading>
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
						<button type="submit">
							<span style={{ fontSize: '1.8rem' }}>
								what I'm (probably) listening to now{' '}
							</span>
							<span style={{ display: 'block', fontSize: '1.2rem' }}>
								{' '}
								Apple music API integration goes here
							</span>
						</button>
						{/* <button type="submit"> 
							download my CV
						 <IoDocumentText
								className="pdf-icon"
								size={20}
								style={{ marginLeft: '5px' }}
							/>
						</button> */}
					</a>
				</LeftSection>
			</Section>
		</StyleRoot>
	);
};

export default Hero;
