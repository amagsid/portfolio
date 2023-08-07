import React, { useContext, useState } from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaAdobe } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Example } from '../../elements/Accordion/Accordion';
import {
	ExperienceListItem,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './ExperienceStyles';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import { ThemeContext } from '../../pages/_app';

const experience = [
	{
		name: 'Ambassadors',
		text: 'At Ambassadros I..',
	},
	{
		name: 'HackYourFuture',
		text: 'when studying at HYF, I used to',
	},
	{
		name: 'ProjectV',
		text: 'during PV, I used to do so and so',
	},
];

const Experience = () => {
	const { theme } = useContext(ThemeContext);
	// const [isSelected, setSelected] = useState(false);
	// const [activeJob, setActiveJob] = useState({ text: 'At Ambassadros I..' });
	const [isAmbaddadors, setAmbaddadors] = useState(true);
	const [isHYF, setHYF] = useState(false);
	const [isPV, setPV] = useState(false);

	const handleAmbassadors = () => {
		setAmbaddadors(true);
		setHYF(false);
		setPV(false);
	};
	const handleHYF = () => {
		setHYF(true);
		setAmbaddadors(false);
		setPV(false);
	};
	const handlePV = () => {
		setPV(true);
		setAmbaddadors(false);
		setHYF(false);
	};

	console.log(isAmbaddadors);

	return (
		<Section id="experience">
			<MovingSectionTitle sectionTitle="EXPERIENCE" />
			<Example />

			{/* <ExperienceListItem
						onClick={handleAmbassadors}
						style={{ backgroundColor: isAmbaddadors ? 'red' : 'yellow' }}
					>
						Ambassadors
					</ExperienceListItem> */}
			{/* <ExperienceListItem onClick={handleHYF}> </ExperienceListItem> */}
			{/* <ExperienceListItem onClick={handlePV}> PV </ExperienceListItem> */}

			{/* {experience.map((item) => {
						return (
							<ExperienceListItem
								onClick={() => {
									setSelected(true);

									setActiveJob(item);
								}}
								className={`${
									isSelected ? 'border-l-[#64ffda]' : 'border-l-[#64ff]'
								}`}
								// className={` ${
								// 	theme == 'dark'
								// 		? 'hover:border-[#64ffda] hover:bg-[#112240]'
								// 		: 'hover:border-[#d25276] hover:bg-[#fff7]'
								// }  hover:border-l-2  border-l-[#94a3b8] py-5  cursor-pointer duration-00`}
							>
								{item.name}
							</ExperienceListItem>
						);
					})} */}
		</Section>
	);
};

export default Experience;
