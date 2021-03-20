import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const backgroundColor = " rgba(63,66,73,0.5)";
const greenColor = "#128194";
const greenHover10 = "rgba(18, 129, 148, 0.1)";
const greenHover20 = "rgba(18, 129, 148, 0.2)";
const greenHover25 = "rgba(18, 129, 148, 0.25)";
const greenHover35 = "rgba(18, 129, 148, 0.35)";
const greenHover40 = "rgba(18, 129, 148, 0.40)";
const greenHover45 = "rgba(18, 129, 148, 0.45)";
const greenHover55 = "rgba(18, 129, 148, 0.55)";
const greenHover60 = "rgba(18, 129, 148, 0.6)";

export const PortfolioHeaderOptions = styled.div`
  background-color: ${backgroundColor};
  height: 8vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

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
    text-shadow: 0 0 30px ${greenHover25};
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
    text-shadow: 0 0 30px ${greenHover45}, 0 0 60px ${greenHover25};
  }
  30.5% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenHover45}, 0 0 60px ${greenHover25};
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
    text-shadow: 0 0 30px ${greenHover45}, 0 0 60px ${greenHover25};
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenHover45}, 0 0 60px ${greenHover25};
  }
  55% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenHover45}, 0 0 60px ${greenHover25};
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
    text-shadow: 0 0 30px ${greenHover55}, 0 0 60px ${greenHover35};
  }
  60% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenHover55}, 0 0 60px ${greenHover35};
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
    text-shadow: 0 0 30px ${greenHover55}, 0 0 60px ${greenHover35}, 0 0 100px ${greenHover10};
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenHover55}, 0 0 60px ${greenHover35}, 0 0 100px ${greenHover10};
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
    text-shadow: 0 0 30px ${greenHover55}, 0 0 60px ${greenHover40}, 0 0 110px ${greenHover20}, 0 0 100px ${greenHover20};
  }
  85% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenHover55}, 0 0 60px ${greenHover40}, 0 0 110px ${greenHover20}, 0 0 100px ${greenHover20};
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
    text-shadow: 0 0 30px ${greenHover60}, 0 0 60px ${greenHover45}, 0 0 110px ${greenHover25}, 0 0 100px ${greenHover10};
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 30px ${greenHover60}, 0 0 60px ${greenHover45}, 0 0 110px ${greenHover25}, 0 0 100px ${greenHover10};
  }
`;

const PortfolioHeaderOptionStyles = css`
  margin: auto 0px;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.04em;
  font-size: 120%;
  padding: 9px;
  color: ${greenColor};
  text-align: center;
  font-family: futura-medium;
`;
const PortfolioHeaderOptionActive = css`
  transition: box-shadow 0.5s ease-in-out;
  box-shadow: rgba(18, 129, 148, 0.4) 0px 4px 6px;
`;
const getPortfolioHeaderOption = (props) => {
  if (props.$matchpath) return PortfolioHeaderOptionActive;
};

export const PortfolioHeaderOption = styled(Link)`
  ${PortfolioHeaderOptionStyles}
  ${getPortfolioHeaderOption}
         &:hover {
    animation: ${optionHover} 1s linear both;
  }
`;
PortfolioHeaderOptions.displayName = "PortfolioHeaderOptions";
PortfolioHeaderOption.displayName = "PortfolioHeaderOption";
