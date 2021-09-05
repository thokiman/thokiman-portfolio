import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000;
  font-family: futura-book;
  overscroll-behavior: none;
}
  


* {
  box-sizing: border-box;
}
/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #3f4249;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #74c6d4;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #bccfd5;
}



`;
