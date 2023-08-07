import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentPlaceholder } from './ContentPlaceholder';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';

import {
	Header,
	Section,
	AccordionContainer,
	ExperienceText,
	ExperienceName,
} from './AccordionStyles';

const Accordion = ({ i, expanded, setExpanded }) => {
	const isOpen = i === expanded;
	console.log(i);

	// By using `AnimatePresence` to mount and unmount the contents, we can animate
	// them in and out while also only rendering the contents of open accordions
	return (
		<>
			<Header
				initial={false}
				animate={{ backgroundColor: isOpen ? '#64ffda' : '#233044' }}
				onClick={() => setExpanded(isOpen ? false : i)}
			>
				{isOpen ? (
					<IoIosClose style={{ color: '#8892b0' }} />
				) : (
					<FiChevronRight style={{ color: '#8892b0' }} />
				)}

				<ExperienceName className="company"> {i.company}</ExperienceName>
			</Header>
			<AnimatePresence initial={false}>
				{isOpen && (
					<Section
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						{/* <ContentPlaceholder /> */}

						<ExperienceText> {i.text}</ExperienceText>
					</Section>
				)}
			</AnimatePresence>
		</>
	);
};

export const Example = () => {
	// This approach is if you only want max one section open at a time. If you want multiple
	// sections to potentially be open simultaneously, they can all be given their own `useState`.
	const [expanded, setExpanded] = useState(false);

	return (
		<>
			<AccordionContainer>
				{experience.map((i) => (
					<Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
				))}
			</AccordionContainer>
		</>
	);
};

const experience = [
	{
		company: ' Ambassadors',
		years: '2021 - current',
		text: 'Ambassadors is my',
	},
	{
		company: ' HackYourFuture',
		years: '2020 - 2021',
		text: 'During HYF...',
	},
	,
	{
		company: ' Project V',
		years: '2014 - 2020',
		text: 'During HYF...',
	},
];
