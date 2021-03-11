import React from "react";
import { Link } from "react-router-dom";

import "./about-project-course.styles.scss";

const AboutCourseProject = ({ course }) => {
  return (
    <div className="course-project-container">
      <div className="course-project-title">Course Project</div>
      {course.map(({ id, name, description, related, url }) => {
        return (
          <div key={id} className="course-project">
            <div className="related-course-project">{related}</div>
            <Link
              to={{ pathname: `${url}` }}
              target="_blank"
              className="name-course-project"
            >
              {name}
            </Link>
            <div className="description-course-project">{description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutCourseProject;
