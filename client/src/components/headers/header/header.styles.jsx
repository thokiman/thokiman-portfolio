import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as BluePrickInklaimIcon } from '../../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_blue.svg';

const maxWidthSmartphone = 800;
const blackColor = '#000000';
const greenBlueColor = '#128194';
const greenBlueLowColor = 'rgba(18,129,148,0.1)';
const greenBlueMediumColor = 'rgba(18,129,148,0.3)';
const greenBlueColor1 = '#3F96A8';
const greenBlueLowColor1 = 'rgb(63, 150, 168,0.1)';
const greenBlueMediumColor1 = 'rgb(63, 150, 168,0.3)';
const greenBlueColor2 = '#70b9c5';
const greenBlueLowColor2 = 'rgba(112,185,197,0.1)';
const greenBlueMediumColor2 = 'rgba(112,185,197,0.3)';
const greenBlueColor3 = '#73cfdf';
const greenBlueLowColor3 = 'rgba(115,207,223,0.1)';
const greenBlueMediumColor3 = 'rgba(115,207,223,0.3)';
const greenBlueColor4 = '#99f0ff';
const greenBlueLowColor4 = 'rgba(153,240,255,0.1)';
const greenBlueMediumColor4 = 'rgba(153,240,255,0.3)';
const whiteSmokeColor = '#e3e1e4';
const lightBlueColor = '#74c6d4';
const heavyLightBlueColor = '#BBCED4';

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
  font-size: 150%;
  padding: 10px 10px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;

const colorChange = keyframes`
  
    0% {
    color: ${heavyLightBlueColor};
  
    
  }
  33.3333% {
    color: ${greenBlueColor4};
  
  }
  66.666% {
    color: ${lightBlueColor};
  
  }
  100% {
    color: ${heavyLightBlueColor};
  
  }


`;

const HeaderLinkActive = css`
  ${HeaderLinkStyles}
  transition: all 2.5s ease-in-out;
  color: ${lightBlueColor};

  box-shadow: ${greenBlueColor} 0px 2px 0px 0px,
    ${greenBlueColor1} 0px 7px 0px 0px, ${greenBlueColor2} 0px 12px 0px 0px,
    ${greenBlueColor3} 0px 17px 0px 0px, ${greenBlueColor4} 0px 22px 0px 0px,
    0px 2px 15px 5px rgba(0, 0, 0, 0);

  animation: ${colorChange} 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite
    alternate both;
  cursor: default;
`;

const borderFlicker = keyframes`
  0% {
    opacity:0.1;
 
text-shadow: 0px 0px 50px 1px ${greenBlueColor4};

  }
  2% {
    opacity:1;
 
text-shadow: 0px 0px 50px 1px ${greenBlueColor4};
  }
  4% {
    opacity:0.1;
    text-shadow: 0px 0px 50px 1px ${greenBlueColor4};
  }
  
  8% {
    opacity:1;
    text-shadow: 0px 0px 50px 1px ${greenBlueColor4};
  }
  70% {
    opacity:0.7;
    text-shadow: 0px 0px 50px 1px ${greenBlueColor4};
  }
  100% {
    opacity:1;
    text-shadow: 0px 0px 50px 1px ${greenBlueColor4};
  }

`;

const HeaderLinkHide = css`
  ${HeaderLinkStyles}
  color: ${greenBlueColor3};

  animation: ${borderFlicker} 2.5s linear infinite;
  box-shadow: ${greenBlueLowColor} 2px -2px 0px 0px,
    ${greenBlueLowColor1} 7px -7px 0px 0px,
    ${greenBlueLowColor2} 12px -12px 0px 0px,
    ${greenBlueLowColor3} 17px -17px 0px 0px,
    ${greenBlueLowColor4} 22px -22px 0px 0px, 2px -2px 15px 5px rgba(0, 0, 0, 0);

  transition: all 1s linear;
  &:hover {
    box-shadow: ${greenBlueMediumColor} 2px 0px 0px 0px,
      ${greenBlueMediumColor1} 7px 0px 0px 0px,
      ${greenBlueMediumColor2} 12px 0px 0px 0px,
      ${greenBlueMediumColor3} 17px 0px 0px 0px,
      ${greenBlueMediumColor4} 22px 0px 0px 0px,
      2px 0px 15px 5px rgba(0, 0, 0, 0);
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
