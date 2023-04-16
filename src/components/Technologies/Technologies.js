import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaAdobe } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
	<Section id="tech">
		{/* <SectionDivider /> */}
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			Throughout my study at <a href="https://www.hackyourfuture.net">HackYouruture </a> in
			Amsterdam, I gained knowledge in full-stack web development with a focus on JavaScriot
			ES6, worked Agile and was mentored by skilled software engineers working in
			multinational companies.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						experience with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						experience with <br />
						Node.js/Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				{/* <FaAdobe size="2.5rem" /> */}
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						experience with <br />
						tools like Adobe Sketch
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
