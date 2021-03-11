import React from "react";

import "./about-project-thesis.styles.scss";

const AboutThesisProject = ({ thesis }) => {
  return (
    <div className="thesis-project-container">
      <div className="thesis-project-title">Thesis</div>
      {thesis.map(
        ({
          id,
          name,
          type,
          startDate,
          endDate,
          length,
          location,
          description,
        }) => {
          return (
            <div key={id} className="thesis-project">
              <div className="name-thesis-project">{name}</div>
              <div className="type-thesis-project">
                {type.charAt(0).toUpperCase()}
                {type.slice(1, 7)}
                {type.charAt(7).toUpperCase()}
                {type.slice(8)}
              </div>
              <div className="start-end-date-thesis-project">
                {startDate} - {endDate}
              </div>
              <div className="length-thesis-project">{length}</div>
              <div className="location-thesis-project">{location}</div>
              <div className="description-thesis-project">{description}</div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default AboutThesisProject;
