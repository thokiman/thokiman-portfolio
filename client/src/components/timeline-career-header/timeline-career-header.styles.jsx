import styled, { keyframes } from "styled-components";

export const TimelineHeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-auto-columns: repeat(auto, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  gap: 10px 0px;
  grid-template-areas:
    "upper-timeline-header-container upper-timeline-header-container upper-timeline-header-container upper-timeline-header-container"
    "separated-line-timeline-header separated-line-timeline-header separated-line-timeline-header separated-line-timeline-header"
    "below-timeline-header-container below-timeline-header-container below-timeline-header-container below-timeline-header-container";

  align-items: center;
  padding: 10px;
  @media only screen and (max-width: 800px) {
    position: relative;
    left: -10px;
  }
`;
export const SeparatedLineTimelineHeader = styled.div`
  width: 420%;
  height: 5px;
  overflow: hidden;
  position: relative;
  left: 120px;
  @media only screen and (max-width: 800px) {
    width: 90vw;
    left: 15px;
  }
`;
const timelineWipe = keyframes`
      to {
            transform: scaleX(0);
        }
`;
export const TimelineOverlay = styled.div`
  background: rgba(18, 129, 148, 0.5);
  border-radius: 20px 20px 20px 20px;
  height: 10px;
  position: absolute;
  top: -2px;
  width: 100%;
  animation: ${timelineWipe} 3s ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const TimelineLine = styled.div`
  border: 3px solid rgba(188, 207, 213, 0.4);
  border-radius: 10px 10px 10px 10px;
  backface-visibility: hidden;
`;
TimelineHeaderContainer.displayName = "TimelineHeaderContainer";
SeparatedLineTimelineHeader.displayName = "SeparatedLineTimelineHeader";
TimelineOverlay.displayName = "TimelineOverlay";
TimelineLine.displayName = "TimelineLine";
