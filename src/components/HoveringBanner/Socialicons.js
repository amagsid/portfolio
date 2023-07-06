import React from 'react';
import { GitHub, Instagram, Twitter, Linkedin, Gitlab } from 'react-feather';
import { SocialContainer } from './HoveringBannerStyles';
import { motion } from 'framer-motion';

function Icons() {
	const containerAnimation = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 1,
				staggerChildren: 0.2,
			},
		},
	};

	const ItemAnimation = {
		hidden: { x: -12, opacity: 0 },
		show: { x: 0, opacity: 1 },
	};

	return (
		// <motion.div>
		<SocialContainer variants={containerAnimation} initial="hidden" animate="show">
			<motion.div
				whileHover={{
					scale: 1.2,
					y: -5,
					originY: 1,
					// color: theme == 'dark' ? '#64ffda' : '#d25276',
				}}
				transition={{
					type: 'spring',
					stiffness: 1000,
				}}
			>
				<motion.a variants={ItemAnimation} href="https://www.w3schools.com" target="_blank">
					<GitHub className="tech-icon-small" />
				</motion.a>
			</motion.div>

			<motion.div
				whileHover={{
					scale: 1.2,
					y: -5,
					originY: 1,
					// color: theme == 'dark' ? '#64ffda' : '#d25276',
				}}
				transition={{
					type: 'spring',
					stiffness: 1000,
				}}
			>
				{' '}
				<motion.a variants={ItemAnimation} href="https://www.w3schools.com" target="_blank">
					<Instagram className="tech-icon-small" />
				</motion.a>
			</motion.div>

			<motion.div
				whileHover={{
					scale: 1.2,
					y: -5,
					originY: 1,
					// color: theme == 'dark' ? '#64ffda' : '#d25276',
				}}
				transition={{
					type: 'spring',
					stiffness: 1000,
				}}
			>
				{' '}
				<motion.a variants={ItemAnimation} href="https://www.w3schools.com" target="_blank">
					<Twitter className="tech-icon-small" />
				</motion.a>
			</motion.div>

			<motion.div
				whileHover={{
					scale: 1.2,
					y: -5,
					originY: 1,
					// color: theme == 'dark' ? '#64ffda' : '#d25276',
				}}
				transition={{
					type: 'spring',
					stiffness: 1000,
				}}
			>
				{' '}
				<motion.a variants={ItemAnimation} href="https://www.w3schools.com" target="_blank">
					<Linkedin className="tech-icon-small" />
				</motion.a>
			</motion.div>

			<motion.div
				whileHover={{
					scale: 1.2,
					y: -5,
					originY: 1,
					// color: theme == 'dark' ? '#64ffda' : '#d25276',
				}}
				transition={{
					type: 'spring',
					stiffness: 1000,
				}}
			>
				{' '}
				<motion.a variants={ItemAnimation} href="https://www.w3schools.com" target="_blank">
					<Gitlab className="tech-icon-small" />
				</motion.a>
			</motion.div>
		</SocialContainer>
		// </motion.div>
	);
}

export default Icons;
