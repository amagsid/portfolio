import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

export const Header = styled(motion.header)`
	display: flex;
	align-items: center;
	background: ${(props) => props.theme.colors.inputField};
	border-radius: 10px;
	cursor: pointer;
	height: 40px;
	margin-bottom: 20px;
	padding-left: 0.8em;
	color: ${(props) => props.theme.colors.textPale};
`;
export const Section = styled(motion.section)`
	overflow: visible;
`;

export const ArrowBulletIcon = styled(FiChevronRight)`
	stroke: ${(props) => props.theme.colors.colorPop};
`;

export const AccordionContainer = styled(motion.div)`
	margin: 0 auto;
	width: 100%;
`;
export const ExperienceText = styled(motion.p)`
	color: ${(props) => props.theme.colors.textPale};
`;
export const ExperienceName = styled(motion.h3)`
	color: ${(props) => props.theme.colors.textPale};
`;
export const BulletPoint = styled(motion.h4)`
	color: ${(props) => props.theme.colors.textPale};
	font-weight: 300;
	padding-bottom: 1rem;
`;
export const Years = styled(motion.span)`
	font-size: 1.2rem;
	padding-left: 1.5rem;
`;
