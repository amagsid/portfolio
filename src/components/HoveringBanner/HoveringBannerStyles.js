import styled from 'styled-components';

export const Banner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40px;
	color: ${(props) => props.theme.colors.paleGreen};
	position: fixed;
	bottom: 0px;
	right: ${(props) => props.position == 'right' && '50px'};
	left: ${(props) => props.position == 'left' && '50px'};
	font-size: 1.3rem;
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
