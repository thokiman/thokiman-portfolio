import styled, { css } from "styled-components";
import ContactImage from "../../assets/layout/water-2.jpg";

const ContactSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
    opacity: 1;
    width: 100vw;
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
