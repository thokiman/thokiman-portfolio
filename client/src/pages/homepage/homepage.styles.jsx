import styled, { css, keyframes } from "styled-components";

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

export const HomepageSideBarHide = styled.div`
  font-family: futura-demi;
  color: #e3e1e4;
  position: absolute;
  top: 10vh;
  left: 6vw;
  font-size: 480%;
  letter-spacing: 0.17em;
  width: 50vw;
  line-height: 1.5em;
  animation: ${homepageSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
`;

const HomepageSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    width: 100vw;
    transition: left 0.5s ease;
    opacity: 1;
  }
`;

const getHomepageSideBarActive = (props) => {
  if (props.$issidebarhidden) return null;
  return HomepageSideBarActive;
};
export const HomepageContainer = styled.div`
  text-align: center;
  transition: background-image 0.7s ease-in-out, height 0.4s ease-in-out;

  @media only screen and (max-width: 800px) {
    position: relative;
    top: 0;
    width: 64vw;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: left 0.5s ease;
    height: 118vh;
    overflow-y: scroll;
    overflow-x: hidden;
    opacity: 0.5;
  }
  ${getHomepageSideBarActive};
`;

export const HomepageAboutContentContainer = styled.div`
  color: #e3e1e4;
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

HomepageContainer.displayName = "HomepageContainer";
HomepageAboutContentContainer.displayName = "HomepageAboutContentContainer";
