import styled from 'styled-components';
import {
	AnimatePresence,
	motion,
	useAnimation,
	useScroll,
	useMotionValue,
	useMotionTemplate,
} from 'framer-motion';

export const Container = styled.div`
	max-width: 1380px;
	width: 100%;
	margin: auto;
`;
export const StatusBar = styled(motion.div)`
	position: -webkit-sticky;
	position: fixed;
	z-index: 100;
	top: 0;
	height: 7px;
	width: 100%;
	background-color: ${(props) => props.theme.colors.colorPop};
`;
