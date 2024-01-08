import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  border-color: ${(props) => props.theme.colors.colorPop};
  color: ${(props) => props.theme.colors.colorPop};
  font-family: ${(props) => props.theme.fonts.headings};

  &:hover {
    background-color: ${(props) => props.theme.colors.colorPopFade};
  }
`;
