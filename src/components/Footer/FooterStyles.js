import styled from 'styled-components';
import { SiExpress } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { PiCopyrightLight } from 'react-icons/pi';

export const FooterWrapper = styled.section`
	display: flex;
	height: 20vh;
	padding: 2rem 1rem 1.5rem 1rem;
	box-sizing: content-box;
	justify-content: flex-end;
	flex-direction: column;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.sm} {
		height: 10vh;
		padding: 0 0rem 6rem 0;
	}
`;

export const NameYearCopyRight = styled.h4`
	color: ${(props) => props.theme.colors.textPale};
	font-size: 12px;
	padding-left: 5px;
	font-family: 'Lato';
	font-weight: 300;
`;
export const TechContainer = styled.div`
	padding-right: 15px;
	display: flex;
	align-items: center;
`;
export const TechText = styled.h4`
	color: ${(props) => props.theme.colors.textPale};
	font-weight: 100;
`;
export const MadeWithText = styled.h5`
	color: ${(props) => props.theme.colors.textPale};
	font-weight: 100;
	padding-right: 10px;
`;
export const Express = styled(SiExpress)`
	color: ${(props) => props.theme.colors.colorPop};
`;
export const NextJs = styled(TbBrandNextjs)`
	color: ${(props) => props.theme.colors.colorPop};
`;
export const FramerMotion = styled(TbBrandFramerMotion)`
	color: ${(props) => props.theme.colors.colorPop};
`;
export const CopyRight = styled(PiCopyrightLight)`
	color: ${(props) => props.theme.colors.textPale};
	fontsize: 15px;
`;
