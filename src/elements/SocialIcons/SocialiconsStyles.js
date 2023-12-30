import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  align-items: center;

  width: 40px;
  color: ${(props) => props.theme.colors.slate};
  font-family: ${(props) => props.theme.fonts.mono};
  position: fixed;
  bottom: 0px;
  right: ${(props) => (props.position == 'right' ? '35px' : 'uset')};

  font-size: 9px;
  letter-spacing: 0.2em;

  // @media ${(props) => props.theme.breakpoints.md} {
  // 	flex-direction: column;
  // 	align-items: baseline;
  // }

  // @media ${(props) => props.theme.breakpoints.sm} {
  // 	display: flex;
  // 	flex-direction: column;
  // 	margin: 0 0 32px;
  // 	align-items: center;
  // }
`;
export const SocialContainer = styled(motion.ul)`
  display: flex;
  justify-content: space-between;
`;
export const Line = styled.div`
  content: '';
  display: block;
  width: ${(props) => (props.horizontal ? '260px' : '0.95px')};
  height: ${(props) => (props.horizontal ? '0.95px' : '90px')};
  margin: auto 0;
  margin-left: ${(props) => (props.horizontal ? '26px' : 'unset')};
  background-color: ${(props) => props.theme.colors.horizontlLine};
`;
export const Container = styled.div`
  display: flex;
  flex-direcgtion: column;
`;
export const LinkContainer = styled(motion.h5)`
  color: ${(props) => props.theme.colors.textPale};
`;
export const EmailLink = styled(motion.a)`
  text-decoration: none;
  -webkit-transition: transform 0.1s ease-in-out;

  &:hover {
    transform: translateY(-6px);
    -webkit-transition: transform 0.3s ease-in-out;
    color: ${(props) => props.theme.colors.links};
  }
`;
