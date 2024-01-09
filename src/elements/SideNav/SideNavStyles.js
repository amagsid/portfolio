import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideBar = styled(motion.aside)`
  font-family: ${(props) => props.theme && 'InterVariable, sans-serif'};
  font-weight: 300;
  // background-color: rgba(10, 25, 47, 0.3);
  background-color: ${(props) =>
    props.theme == 'dark'
      ? 'rgba(10, 25, 47, 0.3)'
      : 'rgba(250, 250, 250, 0.2)'};

  backdrop-filter: blur(20px);

  position: fixed;
  top: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
`;
export const LinkesContainer = styled(motion.div)`
  // width: 100%;
  // justify-content: center;
  // align-items: center;
  // justify-content: space-evenly;
`;

export const SocialContainer = styled(motion.div)`
  // display: flex;
  // justify-content: space-evenly;
`;
export const Link = styled(motion.a)`
  font-size: clamp(3rem, 5vw, 6rem);
`;
