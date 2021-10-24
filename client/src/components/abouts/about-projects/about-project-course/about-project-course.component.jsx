import React from 'react';
import {
  AboutCourseProjectAttributes,
  AboutCourseProjectContainer,
  AboutCourseProjectTitle,
  AboutDescriptionCourseProject,
  AboutGithubCourseProject,
  AboutGithubIconCourseProject,
  AboutNameCourseProject,
  AboutRelatedCourseProject,
} from './about-project-course.styles';

export const AboutCourseProject = ({ course }) => {
  return (
    <AboutCourseProjectContainer className='about-course-project-content'>
      <AboutCourseProjectTitle>Course Project</AboutCourseProjectTitle>
      {course.map(({ id, name, description, related, url, github }) => {
        return (
          <AboutCourseProjectAttributes key={id}>
            <AboutRelatedCourseProject>{related}</AboutRelatedCourseProject>
            <AboutNameCourseProject to={{ pathname: `${url}` }} target='_blank'>
              {name}
            </AboutNameCourseProject>
            <AboutGithubCourseProject
              to={{ pathname: `${github}` }}
              target='_blank'
            >
              <AboutGithubIconCourseProject />
            </AboutGithubCourseProject>
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
