import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowCircleUp } from "react-icons/fa";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCareerPath } from "../../redux/about/about.selectors";
import TimelineCareerHeader from "../timeline-career-header/timeline-career-header.component";
import TimelineCareerItem from "../timeline-career-item/timeline-career-item.component";
import "./about-timeline-career.styles.scss";

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
    <div className="timeline-container">
      <TimelineCareerHeader />
      <div className="timeline-career-title">{title}</div>
      <TimelineCareerItem beforeWorking={beforeWorking} />
      <FaArrowCircleUp className="scroll-to-the-top" onClick={scrollToTop} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  careerPath: selectCareerPath,
});

export default connect(mapStateToProps)(AboutTimelineCareer);
