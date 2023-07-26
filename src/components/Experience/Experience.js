import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaAdobe } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
	ExperienceListItem,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './ExperienceStyles';
import MovingSectionTitle from '../SectionTitle/SectionTitle';

const Experience = () => (
	<Section id="experience">
		<MovingSectionTitle sectionTitle="EXPERIENCE" />
		<div className="w-full my-12 flex flex-col md:flex-row gap-16">
			<ul className="pl-0">
				<ExperienceListItem className="border-1-2 border-l-[#fff] text-[#fff] hover:bg-[#112240] py-3 cursor-pointer duration-300 px-8 ">
					Ambassadors{' '}
				</ExperienceListItem>
				<ExperienceListItem className="border-1-2 border-1-[#fff] text-[#fff] hover:bg-[#112240] py-3 cursor-pointer duration-300 px-8 ">
					HackYourFuture{' '}
				</ExperienceListItem>
				<ExperienceListItem className="border-1-2 border-1-[#fff] text-[#fff] hover:bg-[#112240] py-3 cursor-pointer duration-300 px-8 ">
					ProjectV{' '}
				</ExperienceListItem>
				<ExperienceListItem className="border-1-2 border-1-[#fff] text-[#fff] hover:bg-[#112240] py-3 cursor-pointer duration-300 px-8 ">
					UX{' '}
				</ExperienceListItem>
			</ul>
		</div>
		{/* <div
			className="carousel"
			style={{ width: '100%', color: 'white', textAlign: 'center', fontSize: '30px' }}
		>
			{' '}
		</div> */}
	</Section>
);

export default Experience;
