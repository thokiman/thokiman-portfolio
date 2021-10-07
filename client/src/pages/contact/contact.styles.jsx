import styled, { css, keyframes } from 'styled-components';
const whiteSmokeColor = '#e3e1e4';
const maxWidthSmartphone = 800;

export const ContactElement = styled.div`
  &.contact-element {
  }
`;

const getContactImage = ({ $lowWaveImage }) => {
  return $lowWaveImage.item.iconPath;
};

const contactSideBarHide = keyframes`
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

const getTopContactIsNotActivatedProps = ({ $contactisnotactivatedprops }) => {
  return $contactisnotactivatedprops.top;
};
const getLeftContactIsNotActivatedProps = ({ $contactisnotactivatedprops }) => {
  return $contactisnotactivatedprops.left;
};
const getFontSizeContactIsNotActivatedProps = ({
  $contactisnotactivatedprops,
}) => {
  return $contactisnotactivatedprops.fontSize;
};

export const ContactIsNotActivated = styled.div`
  font-family: futura-demi;
  color: ${whiteSmokeColor};
  position: absolute;
  top: ${getTopContactIsNotActivatedProps}vh;
  left: ${getLeftContactIsNotActivatedProps}vw;
  font-size: ${getFontSizeContactIsNotActivatedProps}vw;
  letter-spacing: 0.17em;
  width: 50vw;
  line-height: 1.5em;
  animation: ${contactSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
  @media only screen and (max-width: 300px) {
    top: 55vh;
  }
`;

const contactHeight = ({ $contactheight }) => {
  return $contactheight;
};

const ContactIsActivated = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
    opacity: 1;
    width: 100vw;
    height: ${contactHeight}vh;
    flex-direction: column;
  }
`;
const getContactSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return null;
  return ContactIsActivated;
};

export const ContactContainer = styled.div`
  background-image: url(${getContactImage});
  opacity: 0.9;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70vh;
  font-family: futura-medium;
  transition: background-image 0.7s ease-in-out, height 0.4s ease-in-out;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    width: 64vw;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: left 0.5s ease;
    height: 62vh;
    overflow-y: scroll;
    overflow-x: hidden;
    opacity: 0.5;
  }
  @media only screen and (max-width: 350px) {
    height: 70vh;
  }
  ${getContactSideBarActive};
`;

ContactContainer.displayName = 'ContactContainer';
