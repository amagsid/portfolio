import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Title = styled(motion.h2)`
  font-size: clamp(10rem, 15vw, 20rem);

  color: ${(props) => props.theme.colors.textPale};
  font-family: ${(props) => props.theme.fonts.greeting};
`;
