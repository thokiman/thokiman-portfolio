import React from "react";

import EducationGrid from "../education-grid/education-grid.component";
import "./about-education-bachelor.styles.scss";

const AboutEducationBachelor = ({ lastBachelor }) => {
  return (
    <div className="education-bachelor-content">
      <div className="education-bachelor-title">Bachelor</div>
      {lastBachelor.map(
        ({
          id,
          school,
          degree,
          startDate,
          endDate,
          length,
          grade,
          imagePath,
        }) => {
          return (
            <div key={id}>
              <div className="education-bachelor-attributes">
                <div className="education-bachelor-school">{school}</div>
                <div className="education-bachelor-degree">{degree}</div>
                <div className="education-bachelor-start-end-date">
                  {startDate} - {endDate}
                </div>
                <div className="education-bachelor-length">{length}</div>
                <div className="education-bachelor-grade">{grade}</div>
              </div>
              <div className="education-bachelor-images">
                <EducationGrid imagePath={imagePath} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default AboutEducationBachelor;
