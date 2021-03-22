import styled, { css, keyframes } from "styled-components";
const portfolioSideBarHide = keyframes`
  0% {
    transform: rotateX(100deg);
    transform-origin: bottom;
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    transform-origin: bottom;
    opacity: 1;
  }

`;

export const PortfolioSideBarHide = styled.div`
  font-family: futura-demi;
  color: #e3e1e4;
  position: absolute;
  top: 10vh;
  left: 6vw;
  font-size: 480%;
  letter-spacing: 0.17em;
  width: 50vw;
  line-height: 1.5em;
  animation: ${portfolioSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
`;
const PortfolioSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
    opacity: 1;
    width: 100vw;
  }
`;
const getPortfolioSideBarActive = (props) => {
  if (props.$issidebarhidden) return null;
  return PortfolioSideBarActive;
};

export const PortfolioContainer = styled.div`
  background-color: black;
  @media only screen and (max-width: 800px) {
    width: 64vw;
    position: relative;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: left 0.5s ease;
    height: 130vh;
    overflow-y: scroll;
    overflow-x: hidden;
    opacity: 0.5;
  }
  ${getPortfolioSideBarActive};
`;
PortfolioContainer.displayName = "PortfolioContainer";
