import styled, { createGlobalStyle } from 'styled-components';

const blackColor = '#000000';
const grayColor = '#3f4249';
const lightBlueColor = '#74c6d4';
const heavyLightBlueColor = '#bccfd5';
export const AppContainer = styled.div``;
export const Ball = styled.div``;

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${blackColor};
  font-family: futura-book;
  overscroll-behavior: none;
   overflow-x: hidden;
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
  box-shadow: inset 0 0 5px ${grayColor};
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${lightBlueColor};
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${heavyLightBlueColor};
}
 


`;
