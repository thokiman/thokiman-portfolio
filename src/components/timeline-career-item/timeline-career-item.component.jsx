import React from "react";
import { Element } from "react-scroll";
import { CSSTransitionGroup } from "react-transition-group";

import "./timeline-career-item.styles.scss";

const TimelineCareerItem = ({ beforeWorking }) => {
  return (
    <div className="timeline-text-container">
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
              <Element
                key={id}
                name={`${year}`}
                className="timeline-career-year-element"
              >
                <div className="timeline-career-year">{year}</div>
                <div className="timeline-career-company">{company}</div>
                <div className="timeline-career-title-type">
                  {title}
                  <br />
                  {type}
                </div>
                <div className="timeline-career-date-length">
                  {date}
                  <br />
                  {length}
                </div>
                <div className="timeline-career-location">{location}</div>
                <div className="timeline-career-description">{description}</div>
              </Element>
            );
          }
        )}
      </CSSTransitionGroup>
    </div>
  );
};

export default TimelineCareerItem;
