import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

export const Header = styled(motion.header)`
	display: flex;
	align-items: center;
	// justify-content: center;
	padding-left: 0.8em;
`;
export const Section = styled(motion.section)`
	overflow: visible;
`;
export const AccordionContainer = styled(motion.div)`
	margin: 0 auto;
	width: 100%;
`;
export const ExperienceText = styled(motion.p)`
	color: ${(props) => props.theme.colors.paragraphHeading};
`;
export const ExperienceName = styled(motion.h3)`
	color: ${(props) => props.theme.colors.paragraphHeading};
`;
export const BulletPoint = styled(motion.h4)`
	color: ${(props) => props.theme.colors.paragraphHeading};
	font-weight: 300;
	padding-bottom: 1rem;
`;
export const Years = styled(motion.span)`
	color: ${(props) => props.theme.colors.paragraphHeading};
	font-size: 1.2rem;
	padding-left: 1.5rem;
`;
