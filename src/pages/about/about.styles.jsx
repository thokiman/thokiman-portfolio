import styled, { css } from "styled-components";
import AboutImage from "../../assets/layout/water-1.jpg";

const AboutSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    width: 100vw;
    transition: left 0.5s ease;
    opacity: 1;
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
    width: 66vw;
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
`;

const getAboutPage = (props) => {
  if (props.matchpath) return TimelineCareerContainer;
  return AboutContainer;
};

export const AboutPage = styled.div`
  ${getAboutPage}
`;
AboutPage.displayName = "AboutPage";
