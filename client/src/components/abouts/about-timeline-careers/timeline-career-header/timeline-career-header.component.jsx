import React from 'react';
import TimelineCareerBelow from '../timeline-career-below/timeline-career-below.component';
import TimelineCareerUpper from '../timeline-career-upper/timeline-career-upper.component';
import {
  SeparatedLineTimelineHeader,
  TimelineHeaderContainer,
  TimelineLine,
  TimelineOverlay,
} from './timeline-career-header.styles';

export const TimelineCareerHeader = () => {
  return (
    <TimelineHeaderContainer className='timeline-header-container'>
      <TimelineCareerUpper />
      <SeparatedLineTimelineHeader className='timeline-header-separator'>
        <TimelineOverlay />
        <TimelineLine />
      </SeparatedLineTimelineHeader>
      <TimelineCareerBelow />
    </TimelineHeaderContainer>
  );
};

export default TimelineCareerHeader;
