import styled from 'styled-components';

const maxWidthSmartphone = 800;

export const SpinnerContainer = styled.div`
  height: 72vh;
  padding-left: 3vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: absolute;
    top: 0vh;
    left: 7vw;
    padding: 0;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    top: 0vh;
    left: 0vw;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    top: 0vh;
    left: 3vw;
  }
  @media only screen and (max-width: 470px) and (max-height: 736px) {
    top: -1vh;
    left: 4vw;
  }
  @media only screen and (max-width: 300px) {
    top: 0vh;
    left: 7vw;
  }
`;

SpinnerContainer.displayName = 'SpinnerContainer';
