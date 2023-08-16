import React from 'react';
import SlideShow from '../Ticker/SlideShow';
import { Section } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import Logos from '../../elements/Logos/logos';

const PastWork = () => (
	<Section id="pastwork">
		<MovingSectionTitle sectionTitle="PAST WORK & PROJECTS" />
		<div
			className="carousel"
			style={{ width: '100%', color: 'white', textAlign: 'center', fontSize: '30px' }}
		></div>
		<SlideShow></SlideShow>

		<Logos> </Logos>
	</Section>
);

export default PastWork;
