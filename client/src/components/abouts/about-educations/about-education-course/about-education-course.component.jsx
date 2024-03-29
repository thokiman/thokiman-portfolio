import React from 'react';
import EducationGrid from '../../about-commons/education-parts/education-grid/education-grid.component';
import {
  AboutCourseLink,
  AboutEducationCourseAttributes,
  AboutEducationCourseContent,
  AboutEducationCourseDate,
  AboutEducationCourseLink,
  AboutEducationCourseName,
  AboutEducationCourseOrganization,
  AboutEducationCourseTitle,
} from './about-education-course.styles';

export const AboutEducationCourse = ({ lastCourse }) => {
  return (
    <AboutEducationCourseContent className='about-education-course-content'>
      <AboutEducationCourseTitle>Course</AboutEducationCourseTitle>
      {lastCourse.map(
        ({ id, name, organization, field, date, credentialUrl, imagePath }) => {
          return (
            <div key={id}>
              <AboutEducationCourseAttributes>
                <AboutEducationCourseName>{name}</AboutEducationCourseName>
                <AboutEducationCourseOrganization>
                  {organization}
                </AboutEducationCourseOrganization>
                <AboutEducationCourseDate>{date}</AboutEducationCourseDate>
                <AboutEducationCourseLink>
                  <AboutCourseLink
                    target='_blank'
                    to={{ pathname: credentialUrl }}
                  >
                    Professional Certificate - {field.charAt(0).toUpperCase()}
                    {field.slice(1)}
                  </AboutCourseLink>
                </AboutEducationCourseLink>
              </AboutEducationCourseAttributes>
              <EducationGrid imagePath={imagePath} />
            </div>
          );
        }
      )}
    </AboutEducationCourseContent>
  );
};

export default AboutEducationCourse;
