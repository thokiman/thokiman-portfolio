import styled, { css } from "styled-components";

const PortfolioSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
    opacity: 1;
    width: 100vw;
  }
`;
const getPortfolioSideBarActive = (props) => {
  if (props.$issidebarhidden) return null;
  return PortfolioSideBarActive;
};

export const PortfolioContainer = styled.div`
  background-color: black;
  @media only screen and (max-width: 800px) {
    width: 65vw;
    position: relative;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: left 0.5s ease;
    height: 130vh;
    overflow-y: scroll;
    overflow-x: hidden;
    opacity: 0.5;
  }
  ${getPortfolioSideBarActive};
`;
PortfolioContainer.displayName = "PortfolioContainer";
