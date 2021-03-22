import styled from "styled-components";

export const SpinnerContainer = styled.div`
  height: 72vh;
  padding-left: 3vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    height: 30vh;
    position: absolute;
    top: 20vh;
    padding: 0;
  }
`;

SpinnerContainer.displayName = "SpinnerContainer";
