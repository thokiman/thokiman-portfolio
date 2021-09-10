import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const maxWidthSmartphone = 800;
const boxShadowPortfolioHeaderOptionActive = 'rgba(18, 129, 148, 0.4)';
const backgroundColorPortfolioHeaderOptions = '#000000';
const fadeHeaderMobileAnimationColor0 = 'rgba(18, 129, 148, 0)';
const fadeHeaderMobileAnimationColor100 = 'rgba(18, 129, 148, 0.3)';
const greenBlueColor1 = '#0A3940';
const greenBlueColor2 = '#0A4650';
const greenBlueColor3 = '#147280';
const greenBlueColor4 = '#0F6D7D';
const greenBlueColor5 = '#146C80';
const greenBlueColor7 = '#0C5967';
const greenBlueColor8 = '#128194';
const greenBlueColor9 = '#8BFDFE';
const greenBlueColor10 = '#28D7FE';
const greenOptionHoverColor10 = 'rgba(18, 129, 148, 0.1)';
const greenOptionHoverColor20 = 'rgba(18, 129, 148, 0.2)';
const greenOptionHoverColor25 = 'rgba(18, 129, 148, 0.25)';
const greenOptionHoverColor35 = 'rgba(18, 129, 148, 0.35)';
const greenOptionHoverColor40 = 'rgba(18, 129, 148, 0.40)';
const greenOptionHoverColor45 = 'rgba(18, 129, 148, 0.45)';
const greenOptionHoverColor55 = 'rgba(18, 129, 148, 0.55)';
const greenOptionHoverColor60 = 'rgba(18, 129, 148, 0.6)';

const optionHover = keyframes`
 0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    text-shadow: none;
  }
  10.1% {
    opacity: 1;
    text-shadow: none;
  }
  10.2% {
    opacity: 0;
    text-shadow: none;
  }
  20% {
    opacity: 0;
    text-shadow: none;
  }
  20.1% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor25};
  }
  20.6% {
    opacity: 0;
    text-shadow: none;
  }
  30% {
    opacity: 0;
    text-shadow: none;
  }
  30.1% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor45}, 0 0 60px ${greenOptionHoverColor25};
  }
  30.5% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor45}, 0 0 60px ${greenOptionHoverColor25};
  }
  30.6% {
    opacity: 0;
    text-shadow: none;
  }
  45% {
    opacity: 0;
    text-shadow: none;
  }
  45.1% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor45}, 0 0 60px ${greenOptionHoverColor25};
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor45}, 0 0 60px ${greenOptionHoverColor25};
  }
  55% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor45}, 0 0 60px ${greenOptionHoverColor25};
  }
  55.1% {
    opacity: 0;
    text-shadow: none;
  }
  57% {
    opacity: 0;
    text-shadow: none;
  }
  57.1% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor55}, 0 0 60px ${greenOptionHoverColor35};
  }
  60% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor55}, 0 0 60px ${greenOptionHoverColor35};
  }
  60.1% {
    opacity: 0;
    text-shadow: none;
  }
  65% {
    opacity: 0;
    text-shadow: none;
  }
  65.1% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor55}, 0 0 60px ${greenOptionHoverColor35}, 0 0 100px ${greenOptionHoverColor10};
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor55}, 0 0 60px ${greenOptionHoverColor35}, 0 0 100px ${greenOptionHoverColor10};
  }
  75.1% {
    opacity: 0;
    text-shadow: none;
  }
  77% {
    opacity: 0;
    text-shadow: none;
  }
  77.1% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor55}, 0 0 60px ${greenOptionHoverColor40}, 0 0 110px ${greenOptionHoverColor20}, 0 0 100px ${greenOptionHoverColor20};
  }
  85% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor55}, 0 0 60px ${greenOptionHoverColor40}, 0 0 110px ${greenOptionHoverColor20}, 0 0 100px ${greenOptionHoverColor20};
  }
  85.1% {
    opacity: 0;
    text-shadow: none;
  }
  86% {
    opacity: 0;
    text-shadow: none;
  }
  86.1% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor60}, 0 0 60px ${greenOptionHoverColor45}, 0 0 110px ${greenOptionHoverColor25}, 0 0 100px ${greenOptionHoverColor10};
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenOptionHoverColor60}, 0 0 60px ${greenOptionHoverColor45}, 0 0 110px ${greenOptionHoverColor25}, 0 0 100px ${greenOptionHoverColor10};
  }
`;

const fadeHeaderMobile = keyframes`
from{
    
    box-shadow: ${fadeHeaderMobileAnimationColor0} -3px 3px 10px -10px ;
}
to{
  
  box-shadow: ${fadeHeaderMobileAnimationColor100} 0px 2px 10px 5px ;
}
`;
const fadeActiveMobile = keyframes`
  0%,
  100% {
    text-shadow: 0 0 1vw ${greenBlueColor8}, 0 0 3vw ${greenBlueColor8}, 0 0 10vw ${greenBlueColor8}, 0 0 10vw ${greenBlueColor8}, 0 0 .4vw ${greenBlueColor9}, .5vw .5vw .1vw ${greenBlueColor3};
    color: ${greenBlueColor10};
  }
  50% {
    text-shadow: 0 0 .5vw ${greenBlueColor2}, 0 0 1.5vw ${greenBlueColor7}, 0 0 5vw ${greenBlueColor4}, 0 0 5vw ${greenBlueColor7}, 0 0 .2vw ${greenBlueColor8}, .5vw .5vw .1vw ${greenBlueColor1};
    color: ${greenBlueColor5};
  }
`;

const PortfolioHeaderIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return PortfolioHeaderIsNotActivated;
  return null;
};

export const PortfolioHeaderOptions = styled.div`
  background-color: ${backgroundColorPortfolioHeaderOptions};
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    background-color: ${backgroundColorPortfolioHeaderOptions};
    width: 98%;
    margin: 15px auto;
    height: max-content;
    padding-right: 10px;
    padding-left: 10px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 15px 0px;
    justify-content: center;
    align-items: center;
    justify-items: center;

    ${getSideBarActive}
  }
`;

const PortfolioHeaderOptionStyles = css`
  margin: auto 0px;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.04em;
  font-size: 120%;
  padding: 9px;
  color: ${greenBlueColor8};

  font-family: futura-medium;
  display: block;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 110%;
    text-align: left;
    animation: ${fadeHeaderMobile} 1.3s ease-in-out infinite alternate both;

    width: 35vw;
    height: min-content;
    letter-spacing: 0.15em;
    &:nth-child(1) {
      width: 45vw;
      padding-left: 20px;
      grid-column: 1;
    }
    &:nth-child(2) {
      width: 48vw;
      padding-left: 10px;
      grid-column: 2 / span 2;
    }
    &:nth-child(3) {
      width: 45vw;
      padding-left: 20px;
      grid-column: 1;
    }
    &:nth-child(4) {
      width: 48vw;
      padding-left: 10px;
      grid-column: 2 / span 2;
    }
    &:nth-child(5) {
      width: 93vw;
      padding-left: 20px;
      grid-column: 1 / span 3;
    }
    &:nth-child(6) {
      width: 93vw;
      padding-left: 20px;
      grid-column: 1 / span 3;
    }
  }
`;
const PortfolioHeaderOptionActive = css`
  transition: box-shadow 0.5s ease-in-out;
  box-shadow: ${boxShadowPortfolioHeaderOptionActive} 0px 4px 6px;
  animation: ${fadeActiveMobile} 1s ease-in-out infinite alternate both;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    animation: ${fadeActiveMobile} 1s ease-in-out infinite alternate both;
    box-shadow: none;
  } ;
`;
const getPortfolioHeaderOption = ({ $matchpath }) => {
  if ($matchpath) return PortfolioHeaderOptionActive;
};

export const PortfolioHeaderOption = styled(Link)`
  ${PortfolioHeaderOptionStyles}
  ${getPortfolioHeaderOption}
    &:hover {
    animation: ${optionHover} 1s linear both;
  }
`;
PortfolioHeaderOptions.displayName = 'PortfolioHeaderOptions';
PortfolioHeaderOption.displayName = 'PortfolioHeaderOption';
