import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

export const Header = styled(motion.header)`
	display: flex;
	align-items: center;
	// justify-content: center;
	padding-left: 0.8em;
`;
export const Section = styled(motion.section)``;
export const AccordionContainer = styled(motion.div)`
	margin: 0 auto;
	width: 60%;
`;
export const ExperienceText = styled(motion.p)`
	text-align: center;
	color: ${(props) => props.theme.colors.paragraphHeading};
`;
export const ExperienceName = styled(motion.h3)`
	color: ${(props) => props.theme.colors.paragraphHeading};
`;
// export const Arrow = styled.FiChevronRight``;
