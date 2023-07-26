import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem 5rem;
	z-index: 100;

	// @media ${(props) => props.theme.breakpoints.sm} {
	// 	display: grid;
	// 	grid-template-columns: repeat(5, 1fr);
	// 	grid-template-rows: repeat(2, 60px);
	// 	grid-column-gap: 0.5rem;
	// 	grid-row-gap: 0.5rem;
	// }
`;

export const Span = styled.span`
	font-size: 2rem;
`;

// Navigation Links
export const NavLink = styled.a`
	font-size: 1.5rem;
	font-weight: 300;
	line-height: 32px;
	color: ${(props) => props.theme.colors.navItems};
	transition: 0.4s ease;
	&:hover {
		color: #fff;
		opacity: 1;
		cursor: pointer;
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
	font-family: ${(props) => props.theme.fonts.mono};
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
		color: ${(props) => props.theme.colors.buttonHoverColor};
		// -khtml-opacity: 0.5;
		// -moz-opacity: 0.5;
		// -ms-filter: ”alpha(opacity=50) ”;
		// filter: alpha(opacity=50);
		// filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0.5);
		// opacity: 0.2;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`;

// hamburger icon
export const BurgerLine = styled.span`
	background-color: ${(props) => props.theme.colors.colorPop};
`;

export const BurgerIcon = styled.div`
	color: ${(props) => props.theme.colors.colorPop};
	// background-color: ${(props) => props.theme.colors.colorPop};
`;
