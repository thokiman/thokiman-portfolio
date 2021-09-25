import styled, { css, keyframes } from 'styled-components';

const whiteSmokeColor = '#e3e1e4';
const greenBlueColor = '#128194';

const backgroundColorTimelineCareerContainer = 'rgba(18, 129, 148, 0.8)';
const maxWidthSmartphone = 800;
const getAboutImage = ({ $rockWaveImage }) => {
  return $rockWaveImage.item.iconPath;
};

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

export const AboutIsNotActivated = styled.div`
  font-family: futura-demi;
  color: ${whiteSmokeColor};
  position: absolute;
  top: 19.5vh;
  left: 6vw;

  font-size: 10vw;
  letter-spacing: 0.17em;
  animation: ${aboutSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
`;

const aboutHeight = ({ $aboutheight }) => {
  return $aboutheight;
};

const AboutIsActived = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    left: 0;
    width: 100vw;
    transition: left 0.5s ease;
    opacity: 1;
    flex-direction: column;
    justify-content: flex-start;

    height: ${aboutHeight}vh;
    overflow-y: hidden;
  }
`;
const getAboutSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return null;
  return AboutIsActived;
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
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
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
    height: 70.8vh;
  }
  @media only screen and (max-width: 500px) {
    height: 68vh;
  }
  @media only screen and (max-width: 350px) {
    height: 71vh;
  }
  ${getAboutSideBarActive};
`;
const AboutContainer = css`
  ${AboutStyles}
  height: 72vh;

  background-image: url(${getAboutImage});
`;

const TimelineCareerContainer = css`
  ${AboutStyles}
  background-color: ${backgroundColorTimelineCareerContainer};
  padding-top: 40px;
  align-items: flex-start;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    padding: 0;
    background-color: ${greenBlueColor};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const getAboutPage = ({ $matchpath }) => {
  if ($matchpath) return TimelineCareerContainer;
  return AboutContainer;
};

export const AboutPage = styled.div`
  ${getAboutPage}
`;
AboutPage.displayName = 'AboutPage';
