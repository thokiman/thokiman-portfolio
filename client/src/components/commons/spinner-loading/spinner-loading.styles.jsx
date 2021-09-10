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
    top: 25vh;
    padding: 0;
  }
`;

SpinnerContainer.displayName = 'SpinnerContainer';
