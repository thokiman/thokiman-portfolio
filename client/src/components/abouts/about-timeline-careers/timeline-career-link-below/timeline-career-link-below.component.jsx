import React from "react";

import {
  TimelinePointerBelow,
  TimelineYearBoxBelow,
  TimelineYearLinkBelow,
} from "./timeline-career-link-below.styles";

export const TimelineCareerLinkBelow = ({
  TimelineIcon,
  year,
  isClick,
  yearClick,
}) => {
  return (
    <TimelineYearLinkBelow>
      <TimelinePointerBelow $isclick={isClick}>
        <TimelineIcon id="icon" />
      </TimelinePointerBelow>
      <TimelineYearBoxBelow
        $isclick={isClick}
        activeClass="active"
        to={year}
        spy={true}
        smooth={true}
        duration={800}
        onClick={() => yearClick()}
      >
        {year}
      </TimelineYearBoxBelow>
    </TimelineYearLinkBelow>
  );
};

export default TimelineCareerLinkBelow;
