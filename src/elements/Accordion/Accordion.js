import React, { useState, useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../../pages/_app';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';

import {
	Header,
	Section,
	AccordionContainer,
	ExperienceText,
	ExperienceName,
	BulletPoint,
	Years,
	ArrowBulletIcon,
	PointIcon,
} from './AccordionStyles';

const Accordion = ({ i, expanded, setExpanded }) => {
	const { theme } = useContext(ThemeContext);
	const isOpen = i === expanded;
	let openBackgroundColor = '';
	let openTextColor = '';

	if (theme == 'dark' && isOpen) {
		openBackgroundColor = '#64ffda';
	} else if (theme == 'light' && isOpen) {
		openBackgroundColor = '#FF3333';
	}

	if (theme == 'dark' && isOpen) {
		openTextColor = '#0a192f';
	} else if (theme == 'light' && isOpen) {
		openTextColor = '#FFF';
	}

	// By using `AnimatePresence` to mount and unmount the contents, we can animate
	// them in and out while also only rendering the contents of open accordions
	return (
		<>
			<Header
				initial={false}
				animate={{ backgroundColor: openBackgroundColor }}
				onClick={() => setExpanded(isOpen ? false : i)}
			>
				{isOpen ? (
					<motion.div
						animate={{ rotate: 360, scale: [1, 2, 1] }}
						transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
					>
						<IoCloseSharp style={{ color: openTextColor }} />{' '}
					</motion.div>
				) : (
					<motion.div>
						{' '}
						<FiChevronRight
							animate={{ rotate: 360 }}
							transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
							style={{ color: '#8892b0' }}
						/>{' '}
					</motion.div>
				)}

				<ExperienceName style={{ color: openTextColor }}> {i.company}</ExperienceName>
				<Years style={{ color: openTextColor }}> {i.years} </Years>
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
						<motion.div
							variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
							transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
						>
							<ExperienceText style={{ paddingBottom: '1rem' }}>
								{' '}
								{i.text}
							</ExperienceText>
							<div className="pb-4">
								{i.bulletPoints.map((point) => {
									return (
										<div style={{ display: 'flex' }}>
											<motion.div>
												{' '}
												{/* <ArrowBulletIcon
													animate={{ rotate: 360 }}
													transition={{
														duration: 0.4,
														type: 'spring',
														stiffness: 200,
													}}
												/>{' '} */}
												<PointIcon
													animate={{ rotate: 360 }}
													transition={{
														duration: 0.4,
														type: 'spring',
														stiffness: 200,
													}}
												/>{' '}
											</motion.div>
											<BulletPoint> {point}</BulletPoint>
										</div>
									);
								})}
							</div>
						</motion.div>
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
			<AccordionContainer style={{ padding: '2.5rem 0rem 2.5rem 0rem' }}>
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
		role: 'Front-end Developer',
		years: 'Nov 2021 - current',
		text: 'As part of the creative automation team Cube Compose™, I build scalable web-based UI templates that help brands automate, create, manage, distribute and scale up their marketing material smarter and more effeciently.',
		bulletPoints: [
			`Working on Cube's dynamic templating system Compose™, I build custom web templates using HTML5, CSS3+, ES6/ES2015 and React.`,
			`Wireframing web templates using Figma, Sketch and Photoshop with UX
and user friendliness in mind`,
			`Testing throughout the development phase and taking part in the QC
process to make sure templates scale up according to client’s needs.`,
		],
	},
	{
		company: ' HackYourFuture',
		years: '2020 - 2021',
		text: 'Pursuing my dream of becoming a programmer, I pursued a 10 month full stack development study programme with modules on HTML, CSS, JavaScript, NodeJS, ExpressJS, MySQL and React.js. ',
		bulletPoints: [
			`I was selected as one of 12 people for the 2020 class, from among 200+ applicants based on a selection process and an assignment test`,
			`The programme consisted of 2 semesters each with multiple modules, covering both front-end and back-end technologies, with graduation tests for both`,
			`After graduating, the programme helps graduate land internshios with a prospect of it turning into a job after 6 months, I was the only graduate to land a job as a front-end developer`,
		],
	},
	,
	{
		company: ' Project V',
		role: 'UX Designer',
		years: '2014 - 2020',
		text: 'Co-founded a creative agency that started as an effort top venture into the creative field, shifting from my porevious career. During this role as a UX designer, my passion for programming became so clear and undeniable that I believe it served as the seed for pusuing my programming study as HackYourFuture',
		bulletPoints: [
			`Managing client proposals from typesetting through to design,
print and production.`,
			`Developing and maintaining design wireframes and specifications.`,
			`Working with creative directors to incorporate a visual or brand
identity into the finished product.`,
		],
	},
];
