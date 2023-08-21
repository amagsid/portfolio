import styled from 'styled-components';
import Image from 'next/image';

export const SkillsList = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, minmax(140px, 200px));
	gap: 0px 10px;
	padding: 0px;
	margin: 20px 0px 0px;
	overflow: hidden;
	list-style: none;
`;
export const SkillsListItem = styled.li`
	position: relative;
	margin-bottom: 10px;
	padding-left: 20px;
	font-weight: 300;
	font-family: Noto Sans Mono, monospace;
	font-size: 15px;
	color: ${(props) => props.theme.colors.paragraphHeading};

	&:before {
		font-family: Space Grotesk, sans-serif;
		content: '▹';
		position: absolute;
		left: 0px;
		color: ${(props) => props.theme.colors.indexNumbers};
		font-size: 15px;
		font-weight: 100;
	}
`;

export const StyledImage = styled(Image)`
	color: #fff;
	opacity: 0.8;
	border-radius: 10px;
	max-width: 350px;

	&:before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 255, 255, 0.5);
		transition: all 0.3s linear;
	}

	//small mobile
	@media ${(props) => props.theme.breakpoints.sm} {
		// padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
		width: 300px;
	}
`;
export const Motto = styled.span`
	color: ${(props) => props.theme.colors.textPale};
	text-decoration: italic;
`;
export const PictureTent = styled.a`
	display: inline-block;
	border-radius: 10px;
	opacity: 1;
`;
