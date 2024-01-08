import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
export const ProjectName = styled.h3`
  font-size: clamp(2.8rem, 3.5rem, 5rem);
  // line-height: 1.8em;

  font-weight: 600;
  color: ${(props) => props.theme.colors.textLight};
`;

export const ClientsLogoContainer = styled.div`
	display: flex;
	color: ${(props) => props.theme.colors.paragraphHeading};
	justify-content: space-around;
	align-items: center;


	@media ${(props) => props.theme.breakpoints.sm} {
    flex-wrap: wrap;
    flex-direction: row;
	height: 12rem;
	align-content: space-between;
    justify-content: space-evenly;
	
	}

}
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    // padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;

  background-color: #171e2e;
  text-align: center;
  width: 400px;

  &:hover {
    // box-shadow: 5px 3px 10px rgba(50, 40, 30, 1);
    // box-shadow: -10px -20px 10px rgba(50, 40, 30, 1);
    transform: scale(0.96);
    transition-duration: 0.3s;
    img {
      transform: scale(1.04);
      transition-duration: 0.4s;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 2rem;
  // padding: 1rem 1.5rem;
  // background: #6b3030;
  // border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
