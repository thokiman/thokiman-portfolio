import React from "react";

import {
  AboutCourseProjectAttributes,
  AboutCourseProjectContainer,
  AboutCourseProjectTitle,
  AboutDescriptionCourseProject,
  AboutNameCourseProject,
  AboutRelatedCourseProject,
} from "./about-project-course.styles";

const AboutCourseProject = ({ course }) => {
  return (
    <AboutCourseProjectContainer>
      <AboutCourseProjectTitle>Course Project</AboutCourseProjectTitle>
      {course.map(({ id, name, description, related, url }) => {
        return (
          <AboutCourseProjectAttributes key={id}>
            <AboutRelatedCourseProject>{related}</AboutRelatedCourseProject>
            <AboutNameCourseProject to={{ pathname: `${url}` }} target="_blank">
              {name}
            </AboutNameCourseProject>
            <AboutDescriptionCourseProject>
              {description}
            </AboutDescriptionCourseProject>
          </AboutCourseProjectAttributes>
        );
      })}
    </AboutCourseProjectContainer>
  );
};

export default AboutCourseProject;
