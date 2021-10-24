import React from 'react';
import {
  TimelineCareerCompany,
  TimelineCareerDateLength,
  TimelineCareerDescription,
  TimelineCareerLocation,
  TimelineCareerTitleType,
  TimelineCareerYear,
  TimelineCareerYearElement,
  TimelineTextContainer,
} from './timeline-career-item.styles';

export const TimelineCareerItem = ({ beforeWorking }) => {
  return (
    <TimelineTextContainer className='timeline-text-container'>
      {beforeWorking.map(
        ({
          id,
          year,
          company,
          title,
          type,
          date,
          length,
          location,
          description,
        }) => {
          return (
            <TimelineCareerYearElement
              className='about-timeline-career-element'
              key={id}
              name={`${year}`}
            >
              <TimelineCareerYear className='about-timeline-career'>
                {year}
              </TimelineCareerYear>
              <TimelineCareerCompany className='about-timeline-career'>
                {company}
              </TimelineCareerCompany>
              <TimelineCareerTitleType className='about-timeline-career'>
                {title}
                <br />
                {type}
              </TimelineCareerTitleType>
              <TimelineCareerDateLength className='about-timeline-career'>
                {date}
                <br />
                {length}
              </TimelineCareerDateLength>
              <TimelineCareerLocation className='about-timeline-career'>
                {location}
              </TimelineCareerLocation>
              <TimelineCareerDescription className='about-timeline-career'>
                {description}
              </TimelineCareerDescription>
            </TimelineCareerYearElement>
          );
        }
      )}
    </TimelineTextContainer>
  );
};

export default TimelineCareerItem;
