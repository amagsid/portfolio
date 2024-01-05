import styled from 'styled-components';
import { SiExpress } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { PiCopyrightLight } from 'react-icons/pi';
import { SiTailwindcss } from 'react-icons/si';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { SiStyledcomponents } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { PiFigmaLogoThin } from 'react-icons/pi';
import { TbBrandVisualStudio } from 'react-icons/tb';
import { RxVercelLogo } from 'react-icons/rx';

export const FooterWrapper = styled.section`
  display: flex;
  height: 20vh;
  padding: 2rem 1rem 4rem 1rem;
  box-sizing: content-box;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 10vh;
    padding: 0 0rem 6rem 0;
  }
`;

export const FooterParagraph = styled.h6`
  color: ${(props) => props.theme.colors.textPale};

  font-size: 12px;
  line-height: 140%;
  letter-spacing: 1px;
`;

export const NameYearCopyRight = styled.h4`
  color: ${(props) => props.theme.colors.textPale};
  font-size: 12px;
  padding-left: 5px;
  font-family: 'Lato';
  font-weight: 300;
`;
export const TechContainer = styled.div`
  //   padding-right: 15px;
  display: flex;
  align-items: center;
`;
export const TechText = styled.h4`
  color: ${(props) => props.theme.colors.textPale};
  font-weight: 100;
`;

export const Express = styled(SiExpress)`
  color: ${(props) => props.theme.colors.colorPop};
`;
export const NextJs = styled(TbBrandNextjs)`
  color: ${(props) => props.theme.colors.colorPop};
`;

export const Tailwind = styled(BiLogoTailwindCss)`
  color: ${(props) => props.theme.colors.colorPop};
`;
export const Figma = styled(PiFigmaLogoThin)`
  color: ${(props) => props.theme.colors.colorPop};
`;
export const VsCode = styled(TbBrandVisualStudio)`
  color: ${(props) => props.theme.colors.colorPop};
`;
export const Vercel = styled(RxVercelLogo)`
  color: ${(props) => props.theme.colors.colorPop};
`;
export const StyledComponents = styled(SiStyledcomponents)`
  color: ${(props) => props.theme.colors.colorPop};
`;
export const FramerMotion = styled(TbBrandFramerMotion)`
  color: ${(props) => props.theme.colors.colorPop};
`;
export const CopyRight = styled(PiCopyrightLight)`
  color: ${(props) => props.theme.colors.textPale};
  fontsize: 15px;
`;
