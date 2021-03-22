import styled from "styled-components";

export const UpperTimelineHeaderContainer = styled.div`
  grid-area: upper-timeline-header-container;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  margin: 20px 0;
  cursor: pointer;
  height: 100%;
`;
UpperTimelineHeaderContainer.displayName = "UpperTimelineHeaderContainer";
