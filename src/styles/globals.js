import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.bgMain};
  // width:2000px;
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    margin: unset;
    font-family: ${(props) => props.theme.fonts.title};
  }
  
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.links};
  }
  li{
    list-style: none;
  }

  input {
    width: 600px;
  }
  textarea {
    height: 10em;
    width: 600px;
  }
  

  .message-chars-left {
    width: 700px;
    margin: auto;
    text-align: left;
  }

  .BgAnimation__svg {
    position: relative;
    left: 50px;
  }

  .custom-button{
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
  }

  .pdf-icon {
    color:#a972cb;
  
  }

  .my-logo{
    width:50px;
    margin-left:40px;
  }

  .portrait{
    border: .5px solid #ddd;
    border-radius: 5px;
    padding: 3px;
    width: 230px;

    
  }


  @media only screen and (max-width: 400px) {
    .portrait {
      width: 75px;
    }
    .col-2{
      padding: 0px;
    }
    .col-10{
      padding-right: 2px;
    }
    }
`;

export default GlobalStyles;
