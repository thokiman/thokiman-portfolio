import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectProjectAccomplishmentThesis,
  selectProjectAccomplishmentCourses,
  selectProjectAccomplishmentExperiences,
  selectProjectAchievementExperiences,
} from "../../redux/about/about.selectors";
import AboutAchievementExperience from "../about-achievement-experience/about-achievement-experience.component";
import AboutCourseProject from "../about-project-course/about-project-course.component";
import AboutExperienceProject from "../about-project-experience/about-project-experience.component";
import AboutThesisProject from "../about-project-thesis/about-project-thesis.component";
import "./about-content-project.styles.scss";

const AboutProject = ({ thesis, courses, experiences, lastExperiences }) => {
  return (
    <div className="project-container">
      <AboutThesisProject thesis={thesis} />
      <AboutCourseProject course={courses} />
      <AboutExperienceProject experience={experiences} />
      <AboutAchievementExperience lastExperience={lastExperiences} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  thesis: selectProjectAccomplishmentThesis,
  courses: selectProjectAccomplishmentCourses,
  experiences: selectProjectAccomplishmentExperiences,
  lastExperiences: selectProjectAchievementExperiences,
});

export default connect(mapStateToProps)(AboutProject);
