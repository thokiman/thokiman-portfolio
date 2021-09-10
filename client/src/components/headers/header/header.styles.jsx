import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as BluePrickInklaimIcon } from '../../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_blue.svg';

const maxWidthSmartphone = 800;
const blackColor = '#000000';
const greenBlueColor = '#128194';
const greenBlueColor1 = '#3F96A8';
const greenBlueColor2 = '#75C6D4';
const greenBlueColor3 = '#73cfdf';
const greenBlueColor4 = '#99f0ff';
const whiteSmokeColor = '#e3e1e4';
const lightBlueColor = '#74c6d4';
const heavyLightBlueColor = '#BBCED4';
const flickerColor = 'rgba(116, 198, 212, 0.8)';
const borderColorHandleLinkHide = 'rgba(116, 198, 212, 0.1)';

const HeaderIsActivated = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
    opacity: 1;
    width: 100vw;
  }
`;
const getHeaderSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return null;
  return HeaderIsActivated;
};

const HeaderPortfolioColor = css`
  transition: background-color 0.5s ease;
  background-color: ${blackColor};
`;

const getHeaderPortfolioColor = ({ $matchpath }) => {
  if ($matchpath) return HeaderPortfolioColor;
};

export const HeaderContainer = styled.div`
  background-color: ${blackColor};
  color: ${greenBlueColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 14vh;
  transition: background-color 0.5s ease;
  ${getHeaderPortfolioColor}
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    width: 64vw;
    transition: left 0.5s ease;
    opacity: 0.5;
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
                        stroke: ${whiteSmokeColor};
                        stroke-dashoffset: 0%;
                    }
`;
const piBlueDisplay = keyframes`
                    to {
                        stroke-dashoffset: 0%;
                    }
`;

const HeaderPILogoContainerActive = css`
  left: 35vw;
  transition: left 0.5s ease;
`;

const getHeaderPILogoContainerActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return null;
  return HeaderPILogoContainerActive;
};
export const HeaderPILogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  border: 1px solid ${greenBlueColor};
  padding: 4px;
  margin-left: 1.8vw;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 105px;
    position: absolute;
    left: -2vw;
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
  width: 800px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
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

const colorChange = keyframes`
  
    0% {
    color: ${whiteSmokeColor};
    border-color: ${greenBlueColor1};
  }
  33.3333% {
    color: ${heavyLightBlueColor};
    border-color: ${greenBlueColor2};
  }
  66.666% {
    color: ${lightBlueColor};
    border-color: ${greenBlueColor3};
  }
  100% {
    color: ${whiteSmokeColor};
    border-color: ${greenBlueColor4};
  }


`;

const HeaderLinkActive = css`
  ${HeaderLinkStyles}
  transition: all 0.7s linear;
  color: ${lightBlueColor};
  border-bottom: 2px solid;
  animation: ${colorChange} 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite
    alternate both;
  cursor: default;
`;

const borderFlicker = keyframes`
  0% {
    opacity:0.1;
 
box-shadow: 0px 0px 50px 2px ${flickerColor};

  }
  2% {
    opacity:1;
 
box-shadow: 0px 0px 50px 1px ${flickerColor};
  }
  4% {
    opacity:0.1;
    box-shadow: 0px 0px 50px 1px ${flickerColor};
  }
  
  8% {
    opacity:1;
    box-shadow: 0px 0px 50px 1px ${flickerColor};
  }
  70% {
    opacity:0.7;
    box-shadow: 0px 0px 50px 1px ${flickerColor};
  }
  100% {
    opacity:1;
    box-shadow: 0px 0px 50px 1px ${flickerColor};
  }

`;

const HeaderLinkHide = css`
  ${HeaderLinkStyles}
  color: ${greenBlueColor};

  border: 2px solid ${borderColorHandleLinkHide};

  opacity: 0.2;
  animation: ${borderFlicker} 1.5s linear infinite;

  transition: all 1s linear;
  &:hover {
    border: 2px solid ${flickerColor};
    transition: all 0.5s linear;
  }
`;

const getHeaderLink = ({ $matchpath }) => {
  if ($matchpath) return HeaderLinkActive;
  return HeaderLinkHide;
};

export const HeaderLink = styled(Link)`
  ${getHeaderLink}
`;
HeaderContainer.displayName = 'HeaderContainer';
HeaderPILogo.displayName = 'HeaderPILogo';
HeaderTextContainer.displayName = 'HeaderTextContainer';
HeaderLink.displayName = 'HeaderLink';
