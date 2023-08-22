import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Container = styled.div`
	font-family: ${(props) => props.theme.fonts.title};
	letter-spacing: 2px;
	display: flex;
	align-items: center;
	font-weight: 300;
	justify-content: space-between;
	padding: 2rem 5rem 0.5rem 5rem;
	z-index: 10;

	// @media ${(props) => props.theme.breakpoints.sm} {
	// 	display: grid;
	// 	grid-template-columns: repeat(5, 1fr);
	// 	grid-template-rows: repeat(2, 60px);
	// 	grid-column-gap: 0.5rem;
	// 	grid-row-gap: 0.5rem;
	// }
`;

export const StyledImage = styled(Image)``;

export const Span = styled.span`
	font-size: 2rem;
`;

// Navigation Links
export const NavLink = styled.a`
	font-size: 1.5rem;

	line-height: 32px;
	transition: all 0.3s ease-in-out;
	color: ${(props) => props.theme.colors.textPale};
	transition: 0.1s ease-in-out;
	&:hover {
		color: ${(props) => props.theme.colors.colorPop};
		opacity: 1;
		font-weight: 300;
		cursor: pointer;
		text-shadow: ${(props) => props.theme.colors.colorPop} 1px 0 10px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
`;

export const LogoContainer = styled.div`
color: ${(props) => props.theme.colors.colorPop};
	display: flex;
	flex: 1;
	flex-direction: row;
	align-content: center;
	// @media ${(props) => props.theme.breakpoints.sm} {
	// 	grid-area: 1 / 1 / 2 / 3;
	}
`;
export const NavLinksContainer = styled.div`
	
	display: flex;
	align-items: center;
	flex: 2;
	justify-content: end;
	// @media ${(props) => props.theme.breakpoints.sm} {
	// 	grid-area: 2 / 2 / 3 / 5;
	}
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
	border: none;
	display: flex;
	position: relative;
	background: none;
	font-size: 1.7rem;

	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
	margin-left: 8px;
	display: flex;
	align-self: center;
	transition: 0.3s ease;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
	transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

	&:hover {
		opacity: 1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`;
export const ResumeButton = styled.button`
	color: ${(props) => props.theme.colors.colorPop};
	border: solid 1px;
	backgroundcolor: ${(props) => props.theme.colors.colorPop};
	&:hover {
		background-color: ${(props) => props.theme.colors.colorPop}50;
		text-shadow: 2px 2px 20px ${(props) => props.theme.colors.colorPop};
		color: ${(props) => props.theme.colors.colorPop};
		// color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`;

// hamburger icon
export const BurgerLine = styled(motion.span)`
	background-color: ${(props) => props.theme.colors.colorPop};
	margin-bottom: 3px;
`;

export const BurgerIcon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100px;
	padding: 10px 0px;
	color: ${(props) => props.theme.colors.colorPop};
	// background-color: ${(props) => props.theme.colors.colorPop};
	margin-left: 22vw;
	z-index: 100;
`;

export const MobileNav = styled(motion.div)`
	position: fixed;
	top: 0px;
	right: 0px;
	width: 50vw;
	height: 100vh;
	display: flex;
	// background-color: red !important;

	background-color: rgba(10, 25, 47, 0.5);
	backdrop-filter: blur(15px) !important;

	flex-direction: column;
	align-items: end;
	justify-content: flex-start;
`;
