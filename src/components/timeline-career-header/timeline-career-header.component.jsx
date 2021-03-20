import React from "react";

import {
  TimelineHeaderContainer,
  SeparatedLineTimelineHeader,
  TimelineLine,
  TimelineOverlay,
} from "./timeline-career-header.styles";
import TimelineCareerUpper from "../timeline-career-upper/timeline-career-upper.component";
import TimelineCareerBelow from "../timeline-career-below/timeline-career-below.component";

const TimelineCareerHeader = () => {
  return (
    <TimelineHeaderContainer>
      <TimelineCareerUpper />
      <SeparatedLineTimelineHeader>
        <TimelineOverlay />
        <TimelineLine />
      </SeparatedLineTimelineHeader>
      <TimelineCareerBelow />
    </TimelineHeaderContainer>
  );
};

export default TimelineCareerHeader;
