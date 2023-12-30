import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

/* CSS */
.button-52 {
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid ${(props) => props.theme.colors.textPale};
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-52:after {
  content: "";
  background-color:${(props) => props.theme.colors.colorPop};
  width: 100%;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 6px;
  transition: 0.2s;
}

.button-52:hover:after {
  top: 0px;
  left: 0px;

}

// .button-52:hover {
//   font-weight: 400;
//     transition: 1s;
// }

@media (min-width: 768px) {
  .button-52 {
    padding: 13px 50px 13px;
  }
}



  
`;

export default GlobalStyles;
