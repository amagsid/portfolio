import styled from 'styled-components';

export const Banner = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: content-box;
	align-items: center;
	text-align: center;
	width: 40px;
	color: ${(props) => props.theme.colors.slate};
	font-family: ${(props) => props.theme.fonts.mono};
	position: fixed;
	bottom: 0px;
	right: ${(props) => props.position == 'right' && '50px'};
	left: ${(props) => props.position == 'left' && '50px'};
	font-size: 12px;
	letter-spacing: 0.3em;

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
export const SocialContainer = styled.ul`
	height: 183px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: unset;
	padding: unset;
`;
export const Line = styled.div`
	content: '';
	display: block;
	width: 0.95px;
	height: 90px;
	margin: 0px auto;
	background-color: ${(props) => props.theme.colors.slate}; ;
`;
export const Container = styled.div`
	display: flex;
	flex-direcgtion: column;
`;
