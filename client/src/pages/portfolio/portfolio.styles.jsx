import styled, { css, keyframes } from 'styled-components';
const blackColor = '#000000';
const whiteSmokeColor = '#e3e1e4';
const maxWidthSmartphone = 800;

export const PortfolioElement = styled.div`
  &.portfolio-element {
  }
`;

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

const getTopPortfolioIsNotActivatedProps = ({
  $portfolioisnotactivatedprops,
}) => {
  return $portfolioisnotactivatedprops.top;
};
const getLeftPortfolioIsNotActivatedProps = ({
  $portfolioisnotactivatedprops,
}) => {
  return $portfolioisnotactivatedprops.left;
};
const getFontSizePortfolioIsNotActivatedProps = ({
  $portfolioisnotactivatedprops,
}) => {
  return $portfolioisnotactivatedprops.fontSize;
};

export const PortfolioIsNotActivated = styled.div`
  font-family: spitfire;
  color: ${whiteSmokeColor};
  position: absolute;
  top: ${getTopPortfolioIsNotActivatedProps}vh;
  left: ${getLeftPortfolioIsNotActivatedProps}vw;
  font-size: ${getFontSizePortfolioIsNotActivatedProps}vw;
  letter-spacing: 0.17em;
  width: 50vw;
  line-height: 1.5em;
  animation: ${portfolioSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
`;
const PortfolioIsActivated = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
    opacity: 1;
    width: 100vw;
  }
`;
const getPortfolioSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return null;
  return PortfolioIsActivated;
};

export const PortfolioContainer = styled.div`
  background-color: ${blackColor};

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
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
PortfolioContainer.displayName = 'PortfolioContainer';
