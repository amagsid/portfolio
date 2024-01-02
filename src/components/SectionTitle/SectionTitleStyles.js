import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionTitle = styled(motion.div)`
  // border-top: 1px solid ${(props) => props.theme.colors.textPale};

  color: #fff;
  height: 70px;
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;

  //small mobile
  @media ${(props) => props.theme.breakpoints.sm} {
    overflow: unset;
  }
`;
export const Item = styled(motion.h3)`
  line-height: 70px;
  display: inline;
  font-size: ${(props) => (props.emailSent ? '1.5rem' : '3rem')};
  color: ${(props) =>
    props.emailSent
      ? props.theme.colors.colorPop
      : props.theme.colors.textPale};
  font-weight: ${(props) => (props.emailSent ? '500' : '300')};
  letter-spacing: ${(props) => (props.emailSent ? '5px' : '7px')};

  &:after {
    content: '•';
    padding-left: ${(props) => (props.emailSent ? '0px' : '12px')};
  }
  //small mobile
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;
// export const SectionTitle = styled(motion.h2)`
// 	font-weight: 800;

// 	font-size: 16px;
// 	line-height: ${(props) => (props.main ? '72px' : '56px')};
// 	width: max-content;
// 	overflow: hidden;
// 	width: 100%;
// 	background-color: red;
// 	// -webkit-background-clip: text;
// 	// -webkit-text-fill-color: transparent;

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		// font-size: ${(props) => (props.main ? '56px' : '48px')};
// 		// line-height: ${(props) => (props.main ? '56px' : '48px')};
// 		// margin-bottom: 12px;
// 		// padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
// 	}

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		// font-size: 32px;
// 		// line-height: 40px;
// 		// font-size: ${(props) => (props.main ? '28px' : '32px')};
// 		// line-height: ${(props) => (props.main ? '32px' : '40px')};
// 		// margin-bottom: 8px;
// 		// padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
// 		// max-width: 100%;
// 	}
// `;
export const List = styled(motion.ul)`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
export const ListItem = styled(motion.li)`
  line-height: 100px;
  color: white;
  text-align: center;
  display: inline;
`;
