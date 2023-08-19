import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

export const DraggingPromptText = styled(motion.div)`
	position: fixed;

	top: 30vh;
	left: 12vw;
	transform: rotate(-2deg);
`;
