import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CarouselContainer = styled.ul`
	max-width: 1040px;
	list-style: none;
	display: flex;
	justify-content: space-between;
	padding: 7rem 0 0 0;
	margin: 0;
	margin-right: 0 !important;
	/* overflow-x: hidden; */

	&:first-of-type {
		margin-left: 0px;
	}

	//remove scrollbar
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
		scroll-snap-type: x mandatory;
		touch-action: pan-x;
		justify-content: initial;
		padding: 1rem 0 0 0;
		margin: 0;
	}
`;
export const CarouselMobileScrollNode = styled.div`
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
		min-width: min-content;
	}
`;

export const CarouselItem = styled(motion.div)`
	border-radius: 3px;
	width: 205px;

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 124px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: 32px;
		min-width: 200px;

		padding: 4px;
		align-content: start;
		scroll-snap-align: start;
		border-radius: 3px;
		overflow: visible;
		position: relative;
		height: fit-content;

		${(props) => (props.active === props.index ? `opacity: 1` : `opacity: 0.5`)};
	}
`;

export const CarouselItemTitle = styled.h4`
	font-size: 30px;
	line-height: 32px;
	letter-spacing: 0.02em;
	display: flex;
	/* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
	background: linear-gradient(
		161.57deg,
		${(props) => props.theme.colors.textPale} 0%,
		${(props) => props.theme.colors.textGradient} 60%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 8px;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 20px;
		line-height: 28px;
		margin-bottom: 4px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
	}
`;
export const CarouselItemImg = styled.svg`
	margin-left: 21px;
	-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	width: 100%;

	@media ${(props) => props.theme.breakpoints.sm} {
		-webkit-mask-image: none;
		margin-left: 16px;
		overflow: visible;
	}
`;

export const CarouselItemText = styled.p`
	font-size: 14px;

	letter-spacing: 0.02em;
	line-height: 1.2em;
	padding-top: 0.6em;
	margin-bottom: 0;
	color: ${(props) => props.theme.colors.textPale};

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 18px;
		padding-right: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 16px;
		padding-right: 0;
	}
`;
export const CarouselItemExperience = styled(motion.h4)`
	font-size: 1.4rem;
	font-weight:400;
	font-family:  ${(props) => props.theme.fonts.main}
	line-height: 22px;
	padding:0;
	letter-spacing: .6rem;
	color: ${(props) => props.theme.colors.textPale};

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 18px;
		padding-right: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 16px;
		padding-right: 0;
	}
`;
export const CarouselButtons = styled.div`
	// width: 288px;

	display: none;
	visibility: hidden;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		justify-content: center;
		visibility: visible;
		margin-bottom: 40px;
	}
`;

export const CarouselButton = styled.button`
	box-sizing: border-box;
	background: none;
	padding: 15px;
	border: none;
	cursor: pointer;

	opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
	transform: ${(props) => (props.active === props.index ? `scale(2.3)` : `scale(1.3)`)};

	&:focus {
		outline: none;
	}
`;

export const CarouselButtonDot = styled.div`
	background-color: white;
	border-radius: 10px;
	margin: auto;
	width: 3px;
	height: 3px;
`;

export const experienceTitleStyle = {
	fontSize: '18px',

	fontWeight: 100,
	color: '#ccd6f6',

	lineHeight: '22px',
	letterSpacing: '1rem',
	overflow: 'visible',
};
