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
    <TimelineTextContainer>
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
            <TimelineCareerYearElement key={id} name={`${year}`}>
              <TimelineCareerYear>{year}</TimelineCareerYear>
              <TimelineCareerCompany>{company}</TimelineCareerCompany>
              <TimelineCareerTitleType>
                {title}
                <br />
                {type}
              </TimelineCareerTitleType>
              <TimelineCareerDateLength>
                {date}
                <br />
                {length}
              </TimelineCareerDateLength>
              <TimelineCareerLocation>{location}</TimelineCareerLocation>
              <TimelineCareerDescription>
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
