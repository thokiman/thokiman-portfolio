import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { createStructuredSelector } from 'reselect';
import {
  selectCareerPath,
  selectLowWaveImage,
} from '../../../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import TimelineCareerHeader from '../timeline-career-header/timeline-career-header.component';
import TimelineCareerItem from '../timeline-career-item/timeline-career-item.component';
import {
  AboutScrollToTheTop,
  AboutTimelineCareerTitle,
  AboutTimelineContainer,
} from './about-timeline-career.styles';
import { measureTimelineContainerProps } from './about-timeline-career.utils.style';

export const AboutTimelineCareer = ({
  careerPath: {
    title,
    items: { beforeWorking },
  },
  isSideBarActive,
  lowWaveImage,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AboutTimelineContainer
      $issidebaractive={isSideBarActive}
      $lowWaveImage={lowWaveImage}
      $measuretimelinecontainer={measureTimelineContainerProps(
        viewWidth,
        viewHeight
      )}
    >
      <TimelineCareerHeader />
      <AboutTimelineCareerTitle className='about-timeline-career-title'>
        {title}
      </AboutTimelineCareerTitle>
      <TimelineCareerItem beforeWorking={beforeWorking} />
      <AboutScrollToTheTop
        className='about-timeline-career-title'
        onClick={scrollToTop}
      />
    </AboutTimelineContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  careerPath: selectCareerPath,
  isSideBarActive: selectIsSideBarActive,
  lowWaveImage: selectLowWaveImage,
});

export default connect(mapStateToProps)(AboutTimelineCareer);
