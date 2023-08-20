import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

export const DraggingPromptText = styled(motion.div)`
	// position: fixed;
	// top: 29vh;
	// left: 12vw;
	transform: rotate(-2deg);
	width: fit-content;
	width: 12em;
`;
export const PointToTextArrow = styled(motion.svg)`
	// position: fixed;
	fill: ${(props) => props.theme.colors.colorPop};
	opacity: 0.8;
	// top: 30vh;
	// left: 25.4vw;
	transform: rotate(10deg);

	//small mobile
	@media ${(props) => props.theme.breakpoints.sm} {
		top: 34vh;
		left: 35vw;
		transform: rotate(45deg);
	}
`;
