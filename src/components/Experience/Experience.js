import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaAdobe } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ExperienceStyles';
import MovingSectionTitle from '../SectionTitle/SectionTitle';

const Experience = () => (
	<Section id="experience">
		<MovingSectionTitle sectionTitle="EXPERIENCE" />
		<div
			className="carousel"
			style={{ width: '100%', color: 'white', textAlign: 'center', fontSize: '30px' }}
		>
			{' '}
		</div>
	</Section>
);

export default Experience;
