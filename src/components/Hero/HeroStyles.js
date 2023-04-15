import styled from 'styled-components';

export const LeftSection = styled.div`
	// width: 100%;
	height: 80vh;
	min-height: 85vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
`;

export const SmallHeading = styled.h1`
	// font-weight: 800;
	font-size: ${(props) => (props.main ? '20px' : '15px')};
	line-height: ${(props) => (props.main ? '72px' : '56px')};
	width: max-content;
	max-width: 100%;
	word-spacing: 5px;
	color: ${(props) => props.theme.colors.green};
	padding: ${(props) => (props.main ? '58px 0 16px' : '0')};

	@media ${(props) => props.theme.breakpoints.md} {
		line-height: ${(props) => (props.main ? '56px' : '48px')};
		padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		line-height: 40px;
		line-height: ${(props) => (props.main ? '32px' : '40px')};
		padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
		max-width: 100%;
	}
`;
export const BigHeading = styled.h2`
	font-weight: 800;
	font-size: ${(props) => (props.main ? '65px' : '56px')};
	line-height: ${(props) => (props.main ? '72px' : '56px')};
	width: max-content;
	max-width: 100%;
	color: white;
	// margin-bottom: 16px;
	// padding: ${(props) => (props.main ? '58px 0 16px' : '0')};

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: ${(props) => (props.main ? '56px' : '48px')};
		line-height: ${(props) => (props.main ? '56px' : '48px')};
		// margin-bottom: 12px;
		padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 32px;
		line-height: 40px;
		font-size: ${(props) => (props.main ? '28px' : '32px')};
		line-height: ${(props) => (props.main ? '32px' : '40px')};
		// margin-bottom: 8px;
		padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
		max-width: 100%;
	}
`;
