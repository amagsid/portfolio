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
export const MusicButton = styled.button`
	width: 600px;
	height: 600px;
	font-size: 30px;
	color: #fff;
	background: none;
	border: none;
	border-radius: 50%;
	position: relative;
	z-index: 0;
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
		-webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
		-webkit-mask-composite: xor;
		mask-composite: intersect;
	}
	&:after {
		content: '';
		position: absolute;
		inset: -100px;
		background: radial-gradient(200px at left 400px top 150px, #ff53bb 100%, #0000),
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
