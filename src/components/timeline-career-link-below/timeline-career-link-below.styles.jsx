import { Link } from "react-scroll";
import styled, { keyframes, css } from "styled-components";

const pulsateBck = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.9);
    }

    100% {
        transform: scale(1);
    }

`;

const rotate90TrCcw = keyframes`
    0% {
        transform: rotate(0);
        transform-origin: top right;
    }

    100% {
        transform: rotate(-90deg);
        transform-origin: top right;
    }

`;

const colorChange2x = keyframes`
    0% {
        color: rgba(18,129,148,0.6);
    }

    100% {
        color: rgba($color:rgba(63,66,73,0.9), $alpha: 0.9);
    }
`;

//below
export const TimelineYearLinkBelow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 10vw;
`;

const TimelineYearBoxBelowHide = css`
  position: relative;
  top: 20px;
  width: fit-content;
  font-size: 200%;
  border-radius: 0px 20px 0px 20px;
  background-color: rgba(144, 150, 174, 0.4);
  padding: 5px;
  color: #e3e1e4;

  &:hover {
    animation: ${pulsateBck} 0.5s ease-in-out infinite both;
  }
`;

const TimelineYearBoxBelowActive = css`
  position: relative;
  top: -35px;
  font-size: 200%;
  border: none;
  background-color: none;
  color: #3f4249;
  transition: color, border, background-color 0.5s linear;
  animation: ${rotate90TrCcw} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  position: relative;

  cursor: pointer;

  &:hover {
    color: #e3e1e4;
  }
`;
const getTimelineYearBoxBelow = (props) => {
  if (props.$isclick) return TimelineYearBoxBelowActive;
  return TimelineYearBoxBelowHide;
};
export const TimelineYearBoxBelow = styled(Link)`
  ${getTimelineYearBoxBelow}
`;

const TimelinePointerBelowHide = css`
  color: #9096ae;
  height: 40px;
  width: 40px;
  transition: top 0.2s ease-in-out, color 0.5s ease-in-out, height,
    width 0.5s ease-in-out;
  animation: ${colorChange2x} 2s linear infinite alternate both;
  cursor: default;
`;

const TimelinePointerBelowActive = css`
  position: relative;
  top: 45px;
  right: 20px;

  color: #3f4249;
  height: 90px;
  width: 90px;
  transition: top 0.2s ease-in-out, color 0.5s ease-in-out, height,
    width 0.5s ease-in-out;
  cursor: default;
`;

const getTimelinePointerBelow = (props) => {
  if (props.$isclick) return TimelinePointerBelowActive;
  return TimelinePointerBelowHide;
};
export const TimelinePointerBelow = styled.div`
  ${getTimelinePointerBelow}
  #icon {
    width: 100%;
    height: 100%;
  }
`;

TimelineYearLinkBelow.displayName = "TimelineYearLinkBelow";
TimelineYearBoxBelow.displayName = "TimelineYearBoxBelow";
TimelinePointerBelow.displayName = "TimelinePointerBelow";
