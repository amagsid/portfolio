import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Strip = styled(motion.div)`
	display: flex;
	height: 40px;
	text-overflow: clip;
	overflow: hidden;
	white-space: nowrap;
	justify-content: center;
	display: flex;
`;

export const Item = styled(motion.h3)`
	line-height: 40px;

	color: ${(props) => props.theme.colors.bgMain};
	font-weight: 300;
	letter-spacing: 3px;
	padding-right: 2px;

	// &:after {
	// 	content: '•';
	// 	padding-left: 2px;
	// }
`;
