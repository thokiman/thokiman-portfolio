import styled from 'styled-components';

const maxWidthSmartphone = 800;

export const FormGroupSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 98%;
  margin: 15px 10px 40px;
  @media only screen and (max-width: 1024px) {
    position: relative;
    top: -1vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    margin: 30px 10px 40px;
    top: -4vh;
  }
  @media only screen and (max-width: 550px) {
    top: 0vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    top: -3vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    top: -4vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 731px) {
    top: -4.5vh;
  }
  @media only screen and (max-width: 320px) and (max-height: 568px) {
    top: -6.5vh;
  }
  @media only screen and (max-width: 300px) {
    top: -7vh;
  }
`;

FormGroupSelectContainer.displayName = 'FormGroupSelectContainer';
