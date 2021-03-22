import styled, { css, keyframes } from "styled-components";
import ServiceImage from "../../assets/layout/water-3.jpg";
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

export const ServiceSideBarHide = styled.div`
  font-family: futura-demi;
  color: #e3e1e4;
  position: absolute;
  top: 10vh;
  left: 6vw;
  font-size: 550%;
  letter-spacing: 0.17em;
  width: 50vw;
  line-height: 1.5em;
  animation: ${serviceSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
`;
const ServiceSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    transition: all 0.5s ease;
    opacity: 1;
    width: 100vw;

    flex-direction: column;
  }
`;
const getServiceSideBarActive = (props) => {
  if (props.$issidebarhidden) return null;
  return ServiceSideBarActive;
};

export const ServiceContainer = styled.div`
  background-image: url(${ServiceImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72vh;
  transition: background-image 0.7s ease-in-out, height 0.4s ease-in-out;
  font-family: futura-book;
  opacity: 0.9;
  @media only screen and (max-width: 800px) {
    width: 65vw;
    position: relative;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: all 0.5s ease;
    height: 115vh;
    overflow-y: scroll;
    overflow-x: hidden;
    opacity: 0.5;
  }
  ${getServiceSideBarActive};
`;

ServiceContainer.displayName = "ServiceContainer";
