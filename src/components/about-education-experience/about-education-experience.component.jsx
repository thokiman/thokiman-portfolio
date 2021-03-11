import React from "react";

import EducationGrid from "../education-grid/education-grid.component";
import "./about-education-experience.styles.scss";

const AboutEducationExperience = ({ lastExperience }) => {
  return (
    <div className="education-experience-content">
      <div className="education-experience-title">Experience</div>
      {lastExperience.map(
        ({
          id,
          company,
          field,
          description,
          startDate,
          endDate,
          grade,
          imagePath,
        }) => {
          return (
            <div key={id}>
              <div className="education-experience-attributes">
                <div className="education-experience-company">{company}</div>
                <div className="education-experience-field">{field}</div>
                <div className="education-experience-grade">{grade}</div>
                <div className="education-experience-start-end-date">
                  {startDate} - {endDate}
                </div>
                <div className="education-experience-description">
                  {description}
                </div>
              </div>
              <div className="education-experience-images">
                <EducationGrid imagePath={imagePath} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default AboutEducationExperience;
