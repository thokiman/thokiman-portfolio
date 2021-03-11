import React from "react";

import TimelineCareerUpper from "../timeline-career-upper/timeline-career-upper.component";
import TimelineCareerBelow from "../timeline-career-below/timeline-career-below.component";
import "./timeline-career-header.styles.scss";

const TimelineCareerHeader = () => {
  return (
    <div className="timeline-header-container">
      <TimelineCareerUpper />
      <div className="separated-line-timeline-header" id="straigh-line">
        <div className="overlay"></div>
        <div className="line"></div>
      </div>
      <TimelineCareerBelow />
    </div>
  );
};

export default TimelineCareerHeader;
