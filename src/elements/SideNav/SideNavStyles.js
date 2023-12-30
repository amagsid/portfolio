import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideBar = styled(motion.aside)`
  display: flex;
  background-color: rgba(10, 25, 47, 0.3);
  backdrop-filter: blur(20px);
  justify-content: center;
  // height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
`;
export const LinkesContainer = styled(motion.div)`
  margin: 12rem 1.4rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  width: 60%;
  justify-content: space-evenly;
`;

export const SocialContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
`;
export const Link = styled(motion.a)`
  font-size: clamp(3rem, 5vw, 6rem);
  font-weight: 500;
`;
