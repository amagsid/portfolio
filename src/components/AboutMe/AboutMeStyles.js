import styled from 'styled-components';

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
