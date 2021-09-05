import React from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { createStructuredSelector } from 'reselect';
import {
  selectCareerPath,
  selectLowWaveImage
} from '../../../../redux/about/about.selectors';
import { selectIsSideBarHidden } from '../../../../redux/header/header.selectors';
import TimelineCareerHeader from '../timeline-career-header/timeline-career-header.component';
import TimelineCareerItem from '../timeline-career-item/timeline-career-item.component';
import {
  AboutScrollToTheTop,
  AboutTimelineCareerTitle,
  AboutTimelineContainer
} from './about-timeline-career.styles';

export const AboutTimelineCareer = ({
  careerPath: {
    title,
    items: { beforeWorking },
  },
  isSideBarHidden,
  lowWaveImage,
}) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AboutTimelineContainer
      $issidebarhidden={isSideBarHidden}
      $lowWaveImage={lowWaveImage}
    >
      <TimelineCareerHeader />
      <AboutTimelineCareerTitle>{title}</AboutTimelineCareerTitle>
      <TimelineCareerItem beforeWorking={beforeWorking} />
      <AboutScrollToTheTop onClick={scrollToTop} />
    </AboutTimelineContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  careerPath: selectCareerPath,
  isSideBarHidden: selectIsSideBarHidden,
  lowWaveImage: selectLowWaveImage,
});

export default connect(mapStateToProps)(AboutTimelineCareer);
