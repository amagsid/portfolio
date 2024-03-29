import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};


  // :root {
  //   font-family: Inter, sans-serif;
  //   font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
  // }
  // @supports (font-variation-settings: normal) {
  //   :root { font-family: InterVariable, sans-serif; }
  // }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
 --scroll-behavior: smooth!important;
scroll-behavior: smooth!important;
overflow-x: hidden;

  }






  body {
    // font-family: ${(props) => props.theme.fonts.main};
   
    font-family: InterVariable, sans-serif;
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.bgMain};
    cursor: none;
    overflow-x: hidden;


  }
  h1,h2,h3,h4,h5,h6{
    margin: unset;
    font-family: ${(props) => props.theme.fonts.title};
  
  }
  aside a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textEmphasis};
    font-weight: 400;
    letter-spacing:.5px;
  }
//   .music-container {
//     display: flex;
//         flex-direction: column;
//     align-items: center;
//     justify-content: space-around;

//   height: 85vh;
// color: ${(props) => props.theme.colors.textPale};
//   }

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





 a {
 
    text-decoration: none;
    	 -webkit-transition: transform .1s ease-in-out;

    &:hover {
    // transform: translateY(-6px);
	 -webkit-transition: transform .3s ease-in-out;
    color: ${(props) => props.theme.colors.colorPop};
    }
    
  }
 p a {
  color: ${(props) => props.theme.colors.textEmphasis};
  font-weight:400;
    
  }


  .tech-icon {
    width: 25px;
    height: 25px;
    display: inline-block;
}

  .tech-icon-small {
	stroke-width: 0.8;


}
  .styled-components-icon {
	stroke-width: 0.1;

}

.switch-icon {
	width: 30px;
	padding: 2px;
	stroke-width: 0.8;
	/* text-align: center;
	height: 1px; */
}




  

//links after paragraphs
  // p > a {
  //   position: relative;
  //   text-decoration: none;
 
  //   color: ${(props) => props.theme.colors.links};
  //   transition: all .05s ease;

  //   &::before {
  //       content: ""; 
  //       position: absolute;
  //       width: 100%;
  //       height: .5px;
  //       bottom: 0;
  //       left: 0;
  //       background-color: ${(props) => props.theme.colors.links};
  //       visibility: hidden;
  //       -webkit-transform: scaleX(0);
  //       transform: scaleX(0);
  //       -webkit-transition: all 0.3s ease-in-out 0s; 
  //   }   

  //   &:hover {
  //    color: ${(props) => props.theme.colors.links};

  //       &::before {
  //           visibility: visible;
  //           -webkit-transform: scaleX(1);
  //           transform: scaleX(1);
  //       }   
  //   }   
  // }

  
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
      background-color: rgba(10,25,47,0.3);
      backdrop-filter: blur(20px);
      z-index: 99;
    }

  
  

  }

  // styline to animate custom cursor on greeating hover


  body:has(.dragme) .custom-cursor {
    transform: translate(-50%, -50%) scale(1);
 
    transition: transform 400ms ease-in-out;
  }


  body:has(.dragme:hover) .custom-cursor {
    transform: translate(-50%, -50%) scale(3.8);
    transition: transform 200ms ease-in-out;

  }


  // styline to animate drag text prompt on greeating hover


  body:has(.dragme:hover) .drag-prompt {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    transition: transform 300ms ease-in-out;
  }

  body:has(.dragme) .drag-prompt{
      opacity: 1;
      transform: translate(-50%, -50%) scale(0.2);
      transition: transform 300ms ease-in-out;

    }


    // styline to animate drag text prompt on greeating hover

    body:has(.dragme:hover) .drag-prompt-text {
      opacity: 1;
      transition: all 600ms ease-in-out;
  
    }
  
     .drag-prompt-text {
      opacity: 0.0;
      transition: all 400ms ease-in-out;
  
    }



    //animate custom cursor on link hovers
    body:has(.side-nav a:hover) .custom-cursor {
      transform: translate(-50%, -50%) scale(3);
      transition: transform 200ms ease-in-out;
      mix-blend-mode: overlay;
  
    }

    
    .container a {
      color: #f9fafb;
      text-decoration: none;
      font-size: 1.75rem;
      font-weight: 600;
      margin: 20px;
    }
    
    .btn {
      cursor: pointer;
      margin: 1.25rem;
      border: none;
      padding: 0.5rem 1rem;
      background-color: #f9fafb;
    }
     .flip-button{
      -webkit-transform: scale(-1, 1);

    }


    .card-container:nth-child(even) {
      flex-direction: row-reverse;
    }


    @media only screen and (max-width: 450px) {
      .card-container:nth-child(even) {
        flex-direction: column;
      }
    @media only screen and (max-width: 450px) {
      .card-container:nth-child(odd) {
        flex-direction: column;
      }

    /* Overriding styles */

    ::-webkit-input-placeholder {
       font-size: 12px!important;
       font-weight: 200;
    }
    
    :-moz-placeholder { /* Firefox 18- */
          font-size: 12px!important;
          font-weight: 200;
    }
    ::-moz-placeholder {  /* Firefox 19+ */
          font-size: 12px!important;
          font-weight: 200;
    }

    
    
    
    // footer {
    // position: fixed;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // display: flex;
    // justify-content: flex-start;
    // align-items: center;
    // padding: 20px;
    // background-image: radial-gradient(
    //   rgba(0, 0, 0, 0) 1px,
    //   rgba(100, 255, 218, 0.4) 1px
    // );
    // background-size: 4px 4px;
    // backdrop-filter: blur(3px);
    // -webkit-backdrop-filter: blur(3px);
    // -moz-backdrop-filter: blur(3px);
    // font-size: 14px;
    // line-height: 14px;
  // }

  // footer::before {
  //   display: block;
  //   content: "";
  //   position: absolute;
  //   top: -1px;
  //   left: 0;
  //   right: 0;
  //   height: 1px;
  //   background:  rgba(100, 255, 218, 0.8);
  //   opacity: 0.2;
  // }


  .box {
    width: 150px;
    height: 150px;
    border-radius: 1em;
    background-color: #f9f07e;
    margin-left: auto;
    margin-right: auto;
  }
  
  .magic {
    width: 200px;
    height: 200px;
    background-color: #fff;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
  }





`;

export default GlobalStyles;
