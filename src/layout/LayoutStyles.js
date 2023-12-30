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
export const CirclePointer = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.pointer};
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  // mix-blend-mode: difference;
  z-index: 99;
`;
