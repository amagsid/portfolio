import styled from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Form, Container } from 'react-bootstrap';

export const Input = styled(Form.Control)`
	background-color: ${(props) => props.theme.colors.inputField};
	// background-color: transparent;
	color: ${(props) => props.theme.colors.textPale};
	font-size: 1.5rem;
	padding: 10px;
	line-height: unset;
	border: none;
	appearance: none;
	outline: none;

	::placeholder {
		color: white;
		opacity: 0.2;
		letter-spacing: 0.9px;
		font-weight: 100;

		font-family: ${(props) => props.theme.fonts.title};
	}

	&:focus {
		box-shadow: none;
		background-color: ${(props) => props.theme.colors.inputField};
		color: ${(props) => props.theme.colors.colorPop};
	}
	&:focus::placeholder {
		color: transparent;
		transition: color 0.3s ease-in-out;
	}
`;
export const Placeholder = styled.span``;

export const CharCount = styled(motion.span)`
	color: ${(props) => props.theme.colors.colorPop};
`;

export const CharAlert = styled(motion.h4)`
	font-weight: 300;
	color: ${(props) => props.theme.colors.paragraphHeading};
	margin-bottom: 5px;
`;

export const SendButton = styled(motion.h4)`
color: ${(props) => props.theme.colors.colorPop};
	border: solid 1px;
	backgroundcolor: ${(props) => props.theme.colors.colorPop};

	&:hover {
		background-color: ${(props) => props.theme.colors.colorPop}50;
		text-shadow: 2px 2px 20px ${(props) => props.theme.colors.colorPop};
		color: ${(props) => props.theme.colors.buttonHoverColor};
		display: flex;
    	justifyContent: center;

		//small mobile
		@media ${(props) => props.theme.breakpoints.sm} {
		width: 175px;
	}

		
		`;

export const SendCharLimitContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	//small mobile
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
	}
`;
export const FormContainer = styled(motion.div)`
	//small mobile
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 2rem 0 2rem;
	}
`;
