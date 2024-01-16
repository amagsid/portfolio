import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Title = styled(motion.h2)`
  font-size: clamp(8rem, 10vw, 15rem);

  color: ${(props) => props.theme.colors.textPale};
  font-family: ${(props) => props.theme.fonts.headings};
  letter-spacing: -5px;
  font-weight: 700;
`;
