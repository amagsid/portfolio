import styled from 'styled-components';

export const LeftSection = styled.div`
	width: 100%;
	height: 80vh;
	min-height: 85vh;
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding: 2em 4em;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	// @media ${(props) => props.theme.breakpoints.md} {
	// 	padding-top: 18em;
	// }

	@media ${(props) => props.theme.breakpoints.xxl} {
		padding-top: 18em;
	}
`;
