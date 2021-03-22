import styled, { css, keyframes } from "styled-components";
import AboutImage from "../../assets/layout/water-1.jpg";

const aboutSideBarHide = keyframes`
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

export const AboutSideBarHide = styled.div`
  font-family: futura-demi;
  color: #e3e1e4;
  position: absolute;
  top: 10vh;
  left: 6vw;
  font-size: 480%;
  letter-spacing: 0.17em;
  animation: ${aboutSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
`;

const AboutSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    width: 100vw;
    transition: left 0.5s ease;
    opacity: 1;
    flex-direction: column;
  }
`;
const getAboutSideBarActive = (props) => {
  if (props.$issidebarhidden) return null;
  return AboutSideBarActive;
};

const AboutStyles = css`
  opacity: 0.9;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: futura-medium;
  transition: background-image 0.7s ease-in-out, height 0.4s ease-in-out;
  @media only screen and (max-width: 800px) {
    position: relative;
    top: 0;
    width: 64vw;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: left 0.5s ease;
    height: 115vh;
    overflow-y: scroll;
    overflow-x: hidden;
    opacity: 0.5;
  }
  ${getAboutSideBarActive};
`;
const AboutContainer = css`
  ${AboutStyles}
  height: 72vh;
  background-image: url(${AboutImage});
`;
const TimelineCareerContainer = css`
  ${AboutStyles}
  background-color: rgba(18, 129, 148, 0.8);
  padding-top: 40px;
  align-items: flex-start;
  @media only screen and (max-width: 800px) {
    padding: 0;
    height: 430vh;
    background-color: rgba(18, 129, 148, 1);
  }
`;

const getAboutPage = (props) => {
  if (props.matchpath) return TimelineCareerContainer;
  return AboutContainer;
};

export const AboutPage = styled.div`
  ${getAboutPage}
`;
AboutPage.displayName = "AboutPage";