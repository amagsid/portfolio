import styled from 'styled-components';
import Image from 'next/image';

export const StyledImage = styled(Image)`
	color: #fff;

	border-radius: 7px;
	filter: saturate(0.3);
	margin: 5px;
	height: 400px;
	width: 400px;

	//small mobile
	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 5px;
		height: 250px;
		width: 250px;
	}
`;
export const SlideShowContainer = styled.div`
	padding: 1em 0rem 1em 0rem;
`;
