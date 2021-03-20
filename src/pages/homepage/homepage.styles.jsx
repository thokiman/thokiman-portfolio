import styled, { css } from "styled-components";

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
  ${getHomepageSideBarActive};
`;

export const HomepageAboutContentContainer = styled.div`
  color: #e3e1e4;
  height: 110vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

HomepageContainer.displayName = "HomepageContainer";
HomepageAboutContentContainer.displayName = "HomepageAboutContentContainer";
