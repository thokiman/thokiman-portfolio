import React from "react";
import { Link } from "react-router-dom";

import EducationGrid from "../education-grid/education-grid.component";
import "./about-education-course.styles.scss";

const AboutEducationCourse = ({ lastCourse }) => {
  return (
    <div className="education-course-content">
      <div className="education-course-title">Course</div>
      {lastCourse.map(
        ({ id, name, organization, field, date, credentialUrl, imagePath }) => {
          return (
            <div key={id}>
              <div className="education-course-attributes">
                <div className="education-course-name">{name}</div>
                <div className="education-course-organization">
                  {organization}
                </div>
                <div className="education-course-date">{date}</div>
                <div className="education-course-link">
                  <Link
                    className="course-link"
                    target="_blank"
                    to={{ pathname: credentialUrl }}
                  >
                    Professional Certificate - {field.charAt(0).toUpperCase()}
                    {field.slice(1)}
                  </Link>
                </div>
              </div>
              <div className="education-course-images">
                <EducationGrid imagePath={imagePath} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default AboutEducationCourse;
