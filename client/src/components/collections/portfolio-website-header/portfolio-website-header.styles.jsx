import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
const maxWidthSmartphone = 900;
const backgroundColorPortfolioWebsiteHeaderOption = 'rgba(0,0,0,1)';
const greenBlueColor1 = '#0A3940';
const greenBlueColor2 = '#0A4650';
const greenBlueColor3 = '#147280';
const greenBlueColor4 = '#0F6D7D';
const greenBlueColor5 = '#146C80';
const greenBlueColor6 = '#0C5967';
const greenBlueColor7 = '#128194';
const greenBlueColor8 = '#8BFDFE';
const greenBlueColor9 = '#28D7FE';
const greenOptionHoverColor55 = 'rgba(18, 129, 148, 0.55)';
const greenOptionHoverColor60 = 'rgba(18, 129, 148, 0.6)';

const translateZDropdown = keyframes`
    0% {
    opacity: 0;
    transform: translateZ(290px);
    
  }
  
  80% {
    transform: translateZ(10px);
  }

  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const DropdownHeaderHide = css`
  display: none;
`;
const DropdownHeaderActive = css`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  position: absolute;
  right: 3vw;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    right: 15vw;
  }
`;

const getDropdownHeaderStyles = ({ $dropdownactive }) => {
  if ($dropdownactive) {
    return DropdownHeaderActive;
  } else {
    return DropdownHeaderHide;
  }
};

export const PortfolioWebsiteHeaderOptions = styled.div`
  ${getDropdownHeaderStyles}
  z-index:1;
`;

export const PortfolioWebsiteHeaderOption = styled(Link)`
  text-shadow: 0 0 10px ${greenBlueColor8}, 0 0 20px ${greenBlueColor7},
    0 0 40px ${greenBlueColor6}, 0 0 80px ${greenBlueColor5};

  text-decoration: none;
  font-size: 1vw;
  letter-spacing: 0.1em;

  animation: ${translateZDropdown} 350ms
    ${({ $orderDelayTranslateTAnimation }) => $orderDelayTranslateTAnimation}ms
    ease-in-out forwards;
  transform-origin: top center;
  justify-content: center;
  display: flex;
  align-items: center;

  height: 6vh;
  padding-right: 2vw;
  padding-left: 2vw;
  background-color: ${backgroundColorPortfolioWebsiteHeaderOption};
  box-shadow: ${greenOptionHoverColor60} 0px 20px 30px -10px,
    ${greenOptionHoverColor55} 0px 25px 50px -20px;
  border-radius: 21px 3px 21px 3px;
  margin: 6px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 2vw;
    padding-right: 2vw;
    padding-left: 2vw;
    letter-spacing: 0.3em;
    height: 5vh;
    margin: 1px;
  }
  @media only screen and (max-width: 500px) {
    height: 4vh;
  }
  @media only screen and (max-width: 280px) {
    height: 3vh;
  }
`;

const fadeHeaderText = keyframes`
  0%,
  100% {
    text-shadow: 0 0 1vw ${greenBlueColor7}, 0 0 3vw ${greenBlueColor7}, 0 0 10vw ${greenBlueColor7}, 0 0 10vw ${greenBlueColor7}, 0 0 .4vw ${greenBlueColor8}, .5vw .5vw .1vw ${greenBlueColor3};
    color: ${greenBlueColor9};
  }
  50% {
    text-shadow: 0 0 .5vw ${greenBlueColor2}, 0 0 1.5vw ${greenBlueColor6}, 0 0 5vw ${greenBlueColor4}, 0 0 5vw ${greenBlueColor6}, 0 0 .2vw ${greenBlueColor7}, .5vw .5vw .1vw ${greenBlueColor1};
    color: ${greenBlueColor5};
  }
`;

const PortfolioWebsiteHeaderTextHide = css`
  color: ${greenBlueColor8};
`;

const PorfolioWebsiteHeaderTextActive = css`
  animation: ${fadeHeaderText} 1s cubic-bezier(0.19, 1, 0.22, 1) 0.5s infinite
    alternate both;
`;

const getPorfolioWebsiteHeaderTextStyles = ({ $matchpath }) => {
  if ($matchpath) {
    return PorfolioWebsiteHeaderTextActive;
  } else {
    return PortfolioWebsiteHeaderTextHide;
  }
};

export const PortfolioWebsiteHeaderText = styled.span`
  color: ${greenBlueColor9};

  ${getPorfolioWebsiteHeaderTextStyles}
  &:hover {
    animation: ${fadeHeaderText} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      infinite alternate both;
  }
`;
