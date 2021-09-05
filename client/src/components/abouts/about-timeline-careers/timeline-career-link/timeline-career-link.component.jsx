import React from "react";

import TimelineCareerLinkBelow from "../timeline-career-link-below/timeline-career-link-below.component";
import TimelineCareerLinkUpper from "../timeline-career-link-upper/timeline-career-link-upper.component";

export const TimelineCareerLink = (props) => {
  if (props.placement === "upper") {
    return <TimelineCareerLinkUpper {...props} />;
  }
  return <TimelineCareerLinkBelow {...props} />;
};

export default TimelineCareerLink;
