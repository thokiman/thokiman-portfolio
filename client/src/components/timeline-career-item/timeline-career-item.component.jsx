import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import {
  TimelineTextContainer,
  TimelineCareerYearElement,
  TimelineCareerYear,
  TimelineCareerCompany,
  TimelineCareerTitleType,
  TimelineCareerDateLength,
  TimelineCareerDescription,
  TimelineCareerLocation,
} from "./timeline-career-item.styles";

const TimelineCareerItem = ({ beforeWorking }) => {
  return (
    <TimelineTextContainer>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
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
      </CSSTransitionGroup>
    </TimelineTextContainer>
  );
};

export default TimelineCareerItem;
