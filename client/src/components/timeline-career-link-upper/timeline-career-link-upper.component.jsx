import React from "react";

import {
  TimelinePointerUpper,
  TimelineYearBoxUpper,
  TimelineYearLinkUpper,
} from "./timeline-career-link-upper.styles";

export const TimelineCareerLinkUpper = ({
  TimelineIcon,
  year,
  isClick,
  yearClick,
}) => {
  return (
    <TimelineYearLinkUpper>
      <TimelineYearBoxUpper
        $isclick={isClick}
        activeClass="active"
        to={year}
        spy={true}
        smooth={true}
        duration={800}
        onClick={() => yearClick()}
      >
        {year}
      </TimelineYearBoxUpper>
      <TimelinePointerUpper $isclick={isClick}>
        <TimelineIcon id="icon" />
      </TimelinePointerUpper>
    </TimelineYearLinkUpper>
  );
};

export default TimelineCareerLinkUpper;
