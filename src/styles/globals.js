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
 --scroll-behavior: smooth!important;
scroll-behavior: smooth!important;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.bgMain};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6{
    margin: unset;
    font-family: ${(props) => props.theme.fonts.title};
  
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondaryHeading};
  }
  .music-container {
    display: flex;
        flex-direction: column;
    align-items: center;
    justify-content: space-around;

  height: 85vh;
color: ${(props) => props.theme.colors.secondaryHeading};
  }

  .music-container div {
    width:100%
  }

  .music-list {
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left:0;

  }
  .music-list-item {
     box-shadow: 0 10px 30px -15px black;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    // // -webkit-box-align: center;
    flex-direction: column;
    // // align-items: flex-start;
    position: relative;

    padding: 2rem 1.75rem;
    border-radius: 20px;
    background-color:#0d1f38;
    // // transition: var(--transition);
    // // overflow: auto;

  }



  .box{
    background-color: white;
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


  .tech-icon {
	width: 20px;
	height: 20px;
}
  .tech-icon-small {
	stroke-width: 0.9;
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


  textarea {
    width: 100%;
  }

  textarea:focus-visible {
    outline-offset: 0px;
    outline: none;
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

  .refresh {
  padding: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

// .content-placeholder {
//   padding: 20px;
//   transform-origin: top center;
// }

header {
  background: #0055ff;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  height: 40px;
  margin-bottom: 20px;
}

// .word {
//   height: 18px;
//   border-radius: 10px;
//   display: inline-block;
//   margin-bottom: 8px;
//   margin-right: 8px;
//   background: #0055ff;
//   border-radius: 10px;
//   display: inline-block;
// }

// .paragraph {
//   margin-bottom: 20px;
// }

// section {
//   overflow: hidden;
// }

// @media (max-width: 600px) {
//   .content-placeholder {
//     padding-left: 20px;
//   }

  // .header .word {
  //   height: 30px;
  // }

  // .word {
  //   height: 14px;
  //   margin-bottom: 5px;
  //   margin-right: 5px;
  // }

  // .paragraph {
  //   margin-bottom: 20px;
  // }


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


    .nav-animation {
      background-color: #fff;
      background-color: rgba(10,25,47,0.3);
      backdrop-filter: blur(20px);

    }


    .svg-scroll {
      height: 50px;
      transition: height .3s;
            transition-timing-function: ease-in-out;
    }

`;

export default GlobalStyles;
