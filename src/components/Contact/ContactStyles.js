import styled from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Form, Container } from 'react-bootstrap';

export const Input = styled(Form.Control)`
	background-color: ${(props) => props.theme.colors.inputField};
	// background-color: transparent;
	color: ${(props) => props.theme.colors.paragraphHeading};
	font-size: 1.5rem;
	padding: 10px;
	line-height: unset;
	border: none;
	appearance: none;
	outline: none;

	&:focus {
		box-shadow: none;
		background-color: ${(props) => props.theme.colors.inputField};
		color: ${(props) => props.theme.colors.colorPop};
	}
	&:focus::placeholder {
		color: transparent;
		transition: color 0.5s ease;
	}
`;
export const Placeholder = styled.span``;
export const CharCount = styled(motion.span)`
	color: ${(props) => props.theme.colors.colorPop};
`;
export const CharAlert = styled(motion.h4)`
	font-weight: 300;
	color: ${(props) => props.theme.colors.paragraphHeading};
`;
export const SendButton = styled(motion.h4)`
color: ${(props) => props.theme.colors.colorPop};
	border: solid 1px;
	backgroundcolor: ${(props) => props.theme.colors.colorPop};
	&:hover {
		background-color: ${(props) => props.theme.colors.colorPop}50;
		text-shadow: 2px 2px 20px ${(props) => props.theme.colors.colorPop};
		color: ${(props) => props.theme.colors.buttonHoverColor};`;
