import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { createStructuredSelector } from 'reselect';
import {
  selectProjectAccomplishmentCourses,
  selectProjectAccomplishmentExperiences,
  selectProjectAccomplishmentThesis,
  selectProjectAchievementExperiences
} from '../../../../redux/about/about.selectors';
import { selectIsSideBarHidden } from '../../../../redux/header/header.selectors';
import AboutAchievementProject from '../../about-projects/about-project-achievement/about-project-achievement.component';
import AboutCourseProject from '../../about-projects/about-project-course/about-project-course.component';
import AboutExperienceProject from '../../about-projects/about-project-experience/about-project-experience.component';
import AboutThesisProject from '../../about-projects/about-project-thesis/about-project-thesis.component';
import { ProjectContainer } from './about-content-project.styles';

export const AboutProject = ({
  thesis,
  courses,
  experiences,
  lastExperiences,
  isSideBarHidden,
}) => {
  return (
    <ProjectContainer $issidebarhidden={isSideBarHidden}>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={'slide-out'}
      >
        <AboutThesisProject thesis={thesis} />
        <AboutCourseProject course={courses} />
        <AboutExperienceProject experience={experiences} />
        <AboutAchievementProject lastExperience={lastExperiences} />
      </CSSTransitionGroup>
    </ProjectContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  thesis: selectProjectAccomplishmentThesis,
  courses: selectProjectAccomplishmentCourses,
  experiences: selectProjectAccomplishmentExperiences,
  lastExperiences: selectProjectAchievementExperiences,
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(AboutProject);
