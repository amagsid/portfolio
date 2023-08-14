import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SvgItem = styled(motion.svg)`
	fill: ${(props) => props.theme.colors.colorPop};
`;
// export const LoadingContainer = styled.div`
// 	margin: ${(props) => (props.loading ? '0 auto' : 'unset')};

// 	position: ${(props) => (props.loading ? 'absolute' : 'unset')};
// `;

// style={{ margin: '0 auto', position: 'relative', top: '50vh', scale: 5 }}
