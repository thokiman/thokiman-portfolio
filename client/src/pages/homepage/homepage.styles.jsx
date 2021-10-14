import styled, { css, keyframes } from 'styled-components';
const whiteSmokeColor = '#e3e1e4';
const maxWidthDesktop = 1366;
const maxWidthTabletPro = 1024;
const maxWidthSmartphone = 800;

export const HomepageElement = styled.div``;

const homepageSideBarHide = keyframes`
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

const getTopHomepageIsNotActivatedProps = ({
  $homepageisnotactivatedprops,
}) => {
  return $homepageisnotactivatedprops.top;
};
const getLeftHomepageIsNotActivatedProps = ({
  $homepageisnotactivatedprops,
}) => {
  return $homepageisnotactivatedprops.left;
};
const getFontSizeHomepageIsNotActivatedProps = ({
  $homepageisnotactivatedprops,
}) => {
  return $homepageisnotactivatedprops.fontSize;
};

export const HomepageIsNotActivated = styled.div`
  font-family: spitfire;

  color: ${whiteSmokeColor};
  position: absolute;
  top: ${getTopHomepageIsNotActivatedProps}vh;
  left: ${getLeftHomepageIsNotActivatedProps}vw;
  font-size: ${getFontSizeHomepageIsNotActivatedProps}vw;
  letter-spacing: 0.17em;
  width: 50vw;
  line-height: 1.5em;

  animation: ${homepageSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
`;

const HomepageIsActivated = css`
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    position: relative;
    left: 0;
    width: 100vw;
    transition: left 0.5s ease;
    opacity: 1;
    height: 500vh;
  }
  @media only screen and (max-width: ${maxWidthTabletPro}px) {
    height: 380vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: 360vh;
  }
`;

const getHomepageSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return null;
  return HomepageIsActivated;
};
export const HomepageContainer = styled.div`
  text-align: center;
  transition: background-image 0.7s ease-in-out, height 0.4s ease-in-out;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    position: relative;
    top: 0;
    width: 64vw;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: left 0.5s ease;
    overflow-y: hidden;
    overflow-x: hidden;
    opacity: 0.5;
    height: 70.8vh;
  }
  @media only screen and (max-width: 350px) {
    height: 71vh;
  }
  ${getHomepageSideBarActive};
`;

export const HomepageAboutContentContainer = styled.div`
  color: ${whiteSmokeColor};
  height: 120vh;
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    flex-direction: column;
  }
`;

HomepageContainer.displayName = 'HomepageContainer';
HomepageAboutContentContainer.displayName = 'HomepageAboutContentContainer';
