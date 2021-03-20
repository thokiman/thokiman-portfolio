import styled, { css } from "styled-components";
import ServiceImage from "../../assets/layout/water-3.jpg";

const ServiceSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    transition: all 0.5s ease;
    opacity: 1;
    width: 100vw;
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
