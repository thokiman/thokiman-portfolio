import React from "react";
import { Element } from "react-scroll";

import "./timeline-career-item.styles.scss";

const TimelineCareerItem = ({ beforeWorking }) => {
  return (
    <div className="timeline-text-container">
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
    </div>
  );
};

export default TimelineCareerItem;
