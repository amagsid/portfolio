import React from 'react';
import Marquee from '../../elements/Marquee/Marquee';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './PastWorkStyles';
import { Section } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';

const PastWork = () => (
	<Section>
		<Section id="pastwork">
			<MovingSectionTitle sectionTitle="PAST WORK" />

			<div
				className="carousel"
				style={{ width: '100%', color: 'white', textAlign: 'center', fontSize: '30px' }}
			>
				{' '}
				/ carousel goes here /
			</div>
			<Marquee></Marquee>
		</Section>
	</Section>
);

export default PastWork;
