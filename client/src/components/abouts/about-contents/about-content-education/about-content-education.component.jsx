import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectEducationItemsLastBachelor,
  selectEducationItemsLastCourses,
  selectEducationItemsLastExperiences,
  selectPersonality,
} from '../../../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import AboutEducationBachelor from '../../about-educations/about-education-bachelor/about-education-bachelor.component';
import AboutEducationCourse from '../../about-educations/about-education-course/about-education-course.component';
import AboutEducationExperience from '../../about-educations/about-education-experience/about-education-experience.component';
import AboutEducationPersonality from '../../about-educations/about-education-personality/about-education-personality.component';
import { EducationContainer } from './about-content-education.styles';

export const AboutEducation = ({
  lastBachelor,
  lastExperiences,
  lastCourses,
  personality,
  isSideBarActive,
}) => {
  return (
    <EducationContainer
      className='education-container'
      $issidebaractive={isSideBarActive}
    >
      <AboutEducationBachelor lastBachelor={lastBachelor} />
      <AboutEducationExperience lastExperience={lastExperiences} />
      <AboutEducationCourse lastCourse={lastCourses} />
      <AboutEducationPersonality personality={personality} />
    </EducationContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lastBachelor: selectEducationItemsLastBachelor,
  lastExperiences: selectEducationItemsLastExperiences,
  lastCourses: selectEducationItemsLastCourses,
  personality: selectPersonality,
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(AboutEducation);
