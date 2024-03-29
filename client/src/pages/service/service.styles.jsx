import styled, { css, keyframes } from 'styled-components';
const whiteSmokeColor = '#e3e1e4';
const maxWidthSmartphone = 800;

export const ServiceElement = styled.div`
  &.service-element {
  }
`;

const getServiceImage = ({ $bigWaveImage }) => {
  return $bigWaveImage.item.iconPath;
};

const serviceSideBarHide = keyframes`
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

const getTopServiceIsNotActivatedProps = ({ $serviceisnotactivatedprops }) => {
  return $serviceisnotactivatedprops.top;
};
const getLeftServiceIsNotActivatedProps = ({ $serviceisnotactivatedprops }) => {
  return $serviceisnotactivatedprops.left;
};
const getFontSizeServiceIsNotActivatedProps = ({
  $serviceisnotactivatedprops,
}) => {
  return $serviceisnotactivatedprops.fontSize;
};

export const ServiceIsNotActivated = styled.div`
  font-family: spitfire;
  color: ${whiteSmokeColor};
  position: absolute;
  top: ${getTopServiceIsNotActivatedProps}vh;
  left: ${getLeftServiceIsNotActivatedProps}vw;
  font-size: ${getFontSizeServiceIsNotActivatedProps}vw;
  letter-spacing: 0.17em;
  width: 50vw;
  line-height: 1.5em;

  animation: ${serviceSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
`;
const serviceHeight = ({ $serviceHeight }) => {
  return $serviceHeight;
};

const ServiceIsActivated = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    left: 0;
    transition: all 0.5s ease;
    opacity: 1;
    width: 100vw;
    height: ${serviceHeight}vh;
    flex-direction: column;
  }
`;
const getServiceSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return null;
  return ServiceIsActivated;
};

export const ServiceContainer = styled.div`
  background-image: url(${getServiceImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72vh;
  transition: background-image 0.7s ease-in-out, height 0.4s ease-in-out;
  font-family: futura-book;
  opacity: 0.9;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 64vw;
    position: relative;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: all 0.5s ease;
    height: 115vh;
    overflow-y: hidden;
    overflow-x: hidden;
    opacity: 0.5;
    height: 70.8vh;
  }
  @media only screen and (max-width: 350px) {
    height: 71vh;
  }
  ${getServiceSideBarActive};
`;

ServiceContainer.displayName = 'ServiceContainer';
