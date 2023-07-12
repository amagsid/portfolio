import styled from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

export const HeroWrapper = styled(motion.div)`
	display: 'flex';
	flex-direction: 'row';
	// align-items: center;
`;

export const BigHeading = styled(motion.h2)`
	font-size: clamp(20rem, 30vw, 32rem);
	line-height: 250px;
	// position: fixed;
	padding-bottom: 180px;
	// width: 100%;
	// width: max-content;
	max-width: 100%;
	// padding: 100px 0 50px 0;
	color: ${(props) =>
		props.main ? props.theme.colors.heading : props.theme.colors.secondaryHeading};

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: clamp(20rem, 30vw, 32rem);

		// line-height: ${(props) => (props.main ? '56px' : '48px')};
		// margin-bottom: 12px;
		padding-bottom: 190px;
		padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
		padding-bottom: 423px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 32px;
		line-height: 40px;
		font-size: clamp(15rem, 35vw, 42rem);
		// line-height: ${(props) => (props.main ? '32px' : '40px')};
		margin-bottom: 323px;
		padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
		max-width: 100%;
	}
`;

export const MedHeading = styled(motion.h2)`
	font-weight: 600;
	font-size: clamp(11rem, 11vw, 12rem);
	width: 100%;
	letter-spacing: -5px;
	z-index: 100;
	text-align: center;
	-webkit-animation-timing-function: linear; /* Chrome, Safari, Opera */
	animation-timing-function: linear;
	// position: fixed;

	color: ${(props) => props.theme.colors.heading};
	line-height: 95px;
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
