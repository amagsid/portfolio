import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MarqueeStrip = styled.div`
	position: relative;
	width: 100vw;
	max-width: 100%;
	height: 80px;
	overflow-x: hidden;
	display: flex;
	align-items: center;
`;
export const Track = styled(motion.div)`
	position: absolute;
	white-space: nowrap;
	width: 100%;
`;
export const Typography = styled.h1`
	margin: 20px 0;
	font-size: 8rem;
	font-family: Antonio;
	-webkit-text-fill-color: rgba(255, 255, 255, 0);
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: #f4955c;
	text-transform: uppercase;
`;
