import styled from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Form, Container } from 'react-bootstrap';

export const Input = styled(Form.Control)`
	background-color: ${(props) => props.theme.colors.inputField};
	// background-color: transparent;
	color: ${(props) => props.theme.colors.heading};
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
	// width: 700px;
	// margin: auto;
	color: ${(props) => props.theme.colors.colorPop};
`;
export const CharAlert = styled(motion.h4)`
	// width: 700px;
	// margin: auto;
	color: ${(props) => props.theme.colors.heading};

	text-align: left;
`;
