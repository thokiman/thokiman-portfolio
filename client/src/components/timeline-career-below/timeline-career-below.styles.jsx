import styled from "styled-components";

export const BelowTimelineHeaderContainer = styled.div`
  grid-area: below-timeline-header-container;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  margin: 20px 0;
  cursor: pointer;
  height: 100%;
`;

BelowTimelineHeaderContainer.displayName = "BelowTimelineHeaderContainer";
