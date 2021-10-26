import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectProjectAccomplishmentCourses,
  selectProjectAccomplishmentExperiences,
  selectProjectAccomplishmentThesis,
  selectProjectAchievementExperiences,
} from '../../../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import AboutAchievementProject from '../../about-projects/about-project-achievement/about-project-achievement.component';
import AboutCourseProject from '../../about-projects/about-project-course/about-project-course.component';
import AboutExperienceProject from '../../about-projects/about-project-experience/about-project-experience.component';
import AboutThesisProject from '../../about-projects/about-project-thesis/about-project-thesis.component';
import { ProjectContainer } from './about-content-project.styles';
import { measureProjectContainerProps } from './about-content-project.utils.style';

export const AboutProject = ({
  thesis,
  courses,
  experiences,
  lastExperiences,
  isSideBarActive,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <ProjectContainer
      $measureprojectcontainer={measureProjectContainerProps(
        viewWidth,
        viewHeight
      )}
      className='project-container'
      $issidebaractive={isSideBarActive}
    >
      <AboutThesisProject thesis={thesis} />
      <AboutCourseProject course={courses} />
      <AboutExperienceProject experience={experiences} />
      <AboutAchievementProject lastExperience={lastExperiences} />
    </ProjectContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  thesis: selectProjectAccomplishmentThesis,
  courses: selectProjectAccomplishmentCourses,
  experiences: selectProjectAccomplishmentExperiences,
  lastExperiences: selectProjectAchievementExperiences,
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(AboutProject);
