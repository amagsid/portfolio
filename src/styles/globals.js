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
    color: ${(props) => props.theme.colors.secondaryHeading};
    
  }


.apple-music {
  width: 884px;
  height: 150px;
border: dashed ${(props) => props.theme.colors.secondaryHeading};
color: ${(props) => props.theme.colors.secondaryHeading};

  }

  .social-container a {
      // color: ${(props) => props.theme.colors.secondaryHeading};
    text-decoration: none;
    	 -webkit-transition: transform .1s ease-in-out;
       

    &:hover {
    transform: translateY(-6px);
	 -webkit-transition: transform .3s ease-in-out;
    color: ${(props) => props.theme.colors.links};
    }
    
  }


  .icon {
	stroke-width: 0.9;
	width: 20px;
  	//  -webkit-transition: all .5s ease-out;
        color: ${(props) => props.theme.colors.navItems};


     &:hover {
    stroke-width: 1.5;
	 -webkit-transition: all 1s ease-out;
    stroke: ${(props) => props.theme.colors.links};
    	// width: 23px;
    }
}

.switch-icon {
	width: 30px;
	padding: 2px;
	stroke-width: 0.8;
	/* text-align: center;
	height: 1px; */
}



  .email-link {
      color: ${(props) => props.theme.colors.navItems};
    	font-family: Noto Sans Mono, monospace;
      letter-spacing: .5rem;
          -webkit-transition: all .01s ease-out;
    // &:hover {
    //    letter-spacing: .7rem;
    //   padding-bottom: .8rem;
    //       -webkit-transition: all .4s ease-out;
    //        color: ${(props) => props.theme.colors.links};

    // }
    
  }

//links after paragraphs
  p > a {
    position: relative;
    text-decoration: none;
    font-weight: 400;
    color: ${(props) => props.theme.colors.links};
    transition: all .05s ease;

    &::before {
        content: ""; 
        position: absolute;
        width: 100%;
        height: .5px;
        bottom: 0;
        left: 0;
        background-color: ${(props) => props.theme.colors.links};
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s; 
    }   

    &:hover {
     color: ${(props) => props.theme.colors.links};

        &::before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }   
    }   
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
