import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as BluePrickInklaimIcon } from "../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_blue.svg";

const grayColor = "#3f4249";
const greenColor = "#128194";
const creamColor = "#e3e1e4";
const blueColor = "#74c6d4";

const HeaderSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
    opacity: 1;
    width: 100vw;
  }
`;
const getHeaderSideBarActive = (props) => {
  if (props.$issidebarhidden) return null;
  return HeaderSideBarActive;
};

export const HeaderContainer = styled.div`
  background-color: ${grayColor};
  color: ${greenColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 14vh;

  @media only screen and (max-width: 800px) {
    position: relative;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    width: 66vw;
    transition: left 0.5s ease;
  }
  ${getHeaderSideBarActive};
`;
const piLogo = keyframes`
                   0% {
                        border-radius: 0px 0px 0px 0px;

                    }

                    100% {
                        border-radius: 18px 18px 18px 18px;
                    }
`;

const piBlueHover = keyframes`
                    to {
                        stroke: ${creamColor};
                        stroke-dashoffset: 0%;
                    }
`;
const piBlueDisplay = keyframes`
                    to {
                        stroke-dashoffset: 0%;
                    }
`;

const HeaderPILogoContainerActive = css`
  left: 140px;
  transition: left 0.5s ease;
`;

const getHeaderPILogoContainerActive = (props) => {
  if (props.$issidebarhidden) return null;
  return HeaderPILogoContainerActive;
};
export const HeaderPILogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  border: 1px solid ${greenColor};
  padding: 4px;
  margin-left: 1.8vw;

  @media only screen and (max-width: 800px) {
    width: 120px;
    position: absolute;
    left: -8px;
    transition: left 0.5s ease;
    ${getHeaderPILogoContainerActive}
  }
  &:hover {
    animation: ${piLogo} 0.2s ease-in;
    border-radius: 18px 18px 18px 18px;

    .pi-blue {
      stroke-width: 10.78;
      stroke-opacity: 0.9978;
      stroke-dasharray: 100 40;
      stroke-dashoffset: 50%;
      stroke-miterlimit: 10;
      animation: ${piBlueHover} 2s ease-in-out infinite alternate-reverse;
      transition: all 1.4s linear;
    }
    svg:hover {
      animation-play-state: running;
    }
  }

  path.pi-blue {
    stroke-dasharray: 200 40;
    stroke-dashoffset: 50%;
    stroke-miterlimit: 10;
    animation: ${piBlueDisplay} 5s ease-in-out infinite alternate;
    transition: all 1.4s linear;
  }
`;

export const HeaderPILogo = styled(BluePrickInklaimIcon)`
  width: 120px;
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 3vw;
  width: 500px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const HeaderLinkStyles = css`
  margin: 0 10px;
  font-size: 150%;
  padding: 10px 10px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;
const HeaderLinkActive = css`
  ${HeaderLinkStyles}
  transition: all 0.7s linear;
  color: ${blueColor};
  cursor: default;
  box-shadow: rgba(116, 198, 212, 0.25) 0px 2px 5px -1px,
    rgba(116, 198, 212, 0.3) 0px 1px 3px -1px;
`;

const HeaderLinkHide = css`
  ${HeaderLinkStyles}
  color: ${greenColor};

  transition: all 0.7s linear;
  &:hover {
    transition: all 0.2s linear;
    box-shadow: rgba(116, 198, 212, 0.3) 0px 2px 5px -1px,
      rgba(116, 198, 212, 0.3) 0px 1px 3px -1px;
  }
`;

const getHeaderLink = (props) => {
  if (props.$matchpath) return HeaderLinkActive;
  return HeaderLinkHide;
};

export const HeaderLink = styled(Link)`
  ${getHeaderLink}
`;
HeaderContainer.displayName = "HeaderContainer";
HeaderPILogo.displayName = "HeaderPILogo";
HeaderTextContainer.displayName = "HeaderTextContainer";
HeaderLink.displayName = "HeaderLink";
