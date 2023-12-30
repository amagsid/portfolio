import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Path = styled(motion.path)`
  stroke: ${(props) => props.theme.colors.colorPop};
  stroke-width: 1.5px;
`;
