import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCareerPath } from "../../redux/about/about.selectors";
import TimelineCareerHeader from "../timeline-career-header/timeline-career-header.component";
import TimelineCareerItem from "../timeline-career-item/timeline-career-item.component";
import {
  AboutScrollToTheTop,
  AboutTimelineCareerTitle,
  AboutTimelineContainer,
} from "./about-timeline-career.styles";

const AboutTimelineCareer = ({
  careerPath: {
    title,
    items: { beforeWorking },
  },
}) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AboutTimelineContainer>
      <TimelineCareerHeader />
      <AboutTimelineCareerTitle>{title}</AboutTimelineCareerTitle>
      <TimelineCareerItem beforeWorking={beforeWorking} />
      <AboutScrollToTheTop onClick={scrollToTop} />
    </AboutTimelineContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  careerPath: selectCareerPath,
});

export default connect(mapStateToProps)(AboutTimelineCareer);
