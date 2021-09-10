import { Link } from 'react-scroll';
import styled, { css, keyframes } from 'styled-components';

const colorChange2xAnimationColor0 = 'rgba(18,129,148,0.6)';
const colorChange2xAnimationColor100 = 'rgba(63,66,73,0.9)';
const backgroundColorTimelineYearBoxUpperHide = 'rgba(144, 150, 174, 0.4)';
const whiteSmokeColor = '#e3e1e4';
const grayColor = '#3f4249';
const lightGrayColor = '#9096ae';
const maxWidthSmartphone = 800;
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

const rotate90BlCcw = keyframes`
    0% {
        transform: rotate(0);
        transform-origin: 0% 100%;
    }

    100% {
        transform: rotate(-90deg);
        transform-origin: 0% 100%;
    }

`;

const colorChange2x = keyframes`
    0% {
        color: ${colorChange2xAnimationColor0};
    }

    100% {
        color: rgba($color:${colorChange2xAnimationColor100}, $alpha: 0.9);
    }
`;

export const TimelineYearLinkUpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimelineYearBoxUpperHide = css`
  width: fit-content;
  font-size: 200%;
  border-radius: 0px 20px 0px 20px;
  background-color: ${backgroundColorTimelineYearBoxUpperHide};
  padding: 5px;
  color: ${whiteSmokeColor};
  &:hover {
    animation: ${pulsateBck} 0.5s ease-in-out infinite both;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 150%;
  }
`;

const TimelineYearBoxUpperActive = css`
  font-size: 200%;
  background-color: none;
  position: relative;
  top: 45px;
  right: 20px;
  border: none;
  color: ${grayColor};
  transition: color, border, background-color 0.5s linear;
  animation: ${rotate90BlCcw} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 120%;
  }
  &:hover {
    color: ${whiteSmokeColor};
  }
`;
const getTimelineYearBoxUpper = ({ $isclick }) => {
  if ($isclick) return TimelineYearBoxUpperActive;
  return TimelineYearBoxUpperHide;
};
export const TimelineYearBoxUpper = styled(Link)`
  ${getTimelineYearBoxUpper}
`;

const TimelinePointerUpperHide = css`
  position: relative;
  top: 20px;
  color: ${lightGrayColor};
  height: 40px;
  width: 40px;
  transition: top 0.2s ease-in-out, color 0.5s ease-in-out, height,
    width 0.5s ease-in-out;
  animation: ${colorChange2x} 2s linear infinite alternate both;
  cursor: default;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    animation: none;
  }
`;

const TimelinePointerUpperActive = css`
  position: relative;
  top: -35px;
  color: ${grayColor};
  height: 90px;
  width: 90px;
  transition: top 0.2s ease-in-out, color 0.5s ease-in-out, height,
    width 0.5s ease-in-out;
  cursor: default;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: 70px;
    width: 70px;
    top: -25px;
  }
`;

const getTimelinePointerUpper = ({ $isclick }) => {
  if ($isclick) return TimelinePointerUpperActive;
  return TimelinePointerUpperHide;
};
export const TimelinePointerUpper = styled.div`
  ${getTimelinePointerUpper}
  #icon {
    width: 100%;
    height: 100%;
  }
`;

TimelineYearLinkUpper.displayName = 'TimelineYearLinkUpper';
TimelineYearBoxUpper.displayName = 'TimelineYearBoxUpper';
TimelinePointerUpper.displayName = 'TimelinePointerUpper';
