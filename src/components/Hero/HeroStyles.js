import styled from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

export const HeroWrapper = styled(motion.div)`
  display: 'flex';
  flex-direction: 'row';
`;

export const BigHeading = styled(motion.h2)`
  font-size: clamp(20rem, 30vw, 32rem);
  line-height: 250px;
  max-width: 100%;
  text-align: center;
  // color: ${(props) =>
    props.main ? props.theme.colors.heading : props.theme.colors.textPale};

  @media ${(props) => props.theme.breakpoints.md} {
  }

  //small mobile
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: clamp(15rem, 35vw, 42rem);
    padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
`;
export const DragMePromptContainer = styled(motion.div)`
  position: absolute;
  width: 70px;
  height: 70px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.colorPop};
  border-radius: 50%;
  display: flex;
  align-items: center;
  z-index: 100;
`;
export const DragMePromptText = styled(motion.h3)`
  color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.colorPopDark};

  color: ${(props) => props.theme.colors.colorPopDark};
  text-align: center;
  font-size: 1.7em;
  line-height: 90%;
  letter-spacing: 1px;
  font-weight: 400;
`;

export const MedHeading = styled(motion.h2)`
  font-weight: 600;
  font-size: clamp(6rem, 8rem, 12rem);
  width: 100%;
  text-align: center;
  -webkit-animation-timing-function: linear; /* Chrome, Safari, Opera */
  animation-timing-function: linear;

  color: ${(props) => props.theme.colors.colorPop};
  color: ${(props) => props.theme.colors.textPale};
  // line-height: 85px;
`;
export const IntroText = styled(motion.h3)`
  font-weight: 200;
  font-size: clamp(1rem, 2rem, 12rem);
  width: 100%;

  text-align: center;
  -webkit-animation-timing-function: linear; /* Chrome, Safari, Opera */
  animation-timing-function: linear;
  letter-spacing: 2px;

  color: ${(props) => props.theme.colors.textPale};
  line-height: 60px;
`;
export const DragMeSection = styled(motion.div)``;
export const AhlanPhonemic = styled(motion.h5)`
  letterspacing: 1px;
  color: ${(props) => props.theme.colors.bgMain};
  position: absolute;
  bottom: 20px;
  left: 95px;
`;

export const MusicButton = styled.button`
  width: 600px;
  height: 600px;
  font-size: 30px;
  color: #fff;
  background: none;
  border: none;
  border-radius: 50%;
  position: relative;
  transition: 0.3s;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    inset: -8px;
    padding: 10px;
    border-radius: 50%;
    background: conic-gradient(
      #ff53bb,
      #0000 30deg 120deg,
      #00f8d3 150deg 180deg,
      #0000 210deg 300deg,
      #ff53bb 330deg
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: intersect;
  }
  &:after {
    content: '';
    position: absolute;
    inset: -100px;
    background: radial-gradient(
        200px at left 400px top 150px,
        #ff53bb 100%,
        #0000
      ),
      radial-gradient(200px at right 400px bottom 150px, #00f8d3 100%, #0000);
    filter: blur(120px);
    opacity: 0.5;
  }
  &:before,
  &:after {
    transition: 0.5s, 99999s 99999s transform;
  }

  &:hover {
    box-shadow: 0 0 0 1px #666;
  }
`;
