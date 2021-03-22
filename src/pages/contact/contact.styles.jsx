import styled, { css, keyframes } from "styled-components";
import ContactImage from "../../assets/layout/water-2.jpg";

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

export const ContactSideBarHide = styled.div`
  font-family: futura-demi;
  color: #e3e1e4;
  position: absolute;
  top: 10vh;
  left: 6vw;
  font-size: 550%;
  letter-spacing: 0.17em;
  width: 50vw;
  line-height: 1.5em;

  animation: ${contactSideBarHide} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
`;
const ContactSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
    opacity: 1;
    width: 100vw;
    height: 350vh;

    flex-direction: column;
  }
`;
const getContactSideBarActive = (props) => {
  if (props.$issidebarhidden) return null;
  return ContactSideBarActive;
};

export const ContactContainer = styled.div`
  background-image: url(${ContactImage});
  opacity: 0.9;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 72vh;
  font-family: futura-medium;
  transition: background-image 0.7s ease-in-out, height 0.4s ease-in-out;
  @media only screen and (max-width: 800px) {
    position: relative;
    width: 66vw;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: left 0.5s ease;
    height: 115vh;
    overflow-y: scroll;
    overflow-x: hidden;
    opacity: 0.5;
  }
  ${getContactSideBarActive};
`;

ContactContainer.displayName = "ContactContainer";
