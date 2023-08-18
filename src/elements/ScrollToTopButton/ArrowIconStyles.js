import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ArrowHead = styled(motion.path)`
	fill: ${(props) => props.theme.colors.colorPop};
`;
export const ArrowLine = styled(motion.line)`
	stroke: ${(props) => props.theme.colors.colorPop};
	pacity: 0.3;
`;
