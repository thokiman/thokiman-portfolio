import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectEducationItemsLastBachelor,
  selectEducationItemsLastExperiences,
  selectEducationItemsLastCourses,
  selectPersonality,
} from "../../redux/about/about.selectors";
import AboutEducationBachelor from "../about-education-bachelor/about-education-bachelor.component";
import AboutEducationExperience from "../about-education-experience/about-education-experience.component";
import AboutEducationCourse from "../about-education-course/about-education-course.component";
import AboutEducationPersonality from "../about-education-personality/about-education-personality.component";
import "./about-content-education.styles.scss";

const AboutEducation = ({
  lastBachelor,
  lastExperiences,
  lastCourses,
  personality,
}) => {
  return (
    <div className="education-container">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <AboutEducationBachelor lastBachelor={lastBachelor} />
        <AboutEducationExperience lastExperience={lastExperiences} />
        <AboutEducationCourse lastCourse={lastCourses} />
        <AboutEducationPersonality personality={personality} />
      </ReactCSSTransitionGroup>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  lastBachelor: selectEducationItemsLastBachelor,
  lastExperiences: selectEducationItemsLastExperiences,
  lastCourses: selectEducationItemsLastCourses,
  personality: selectPersonality,
});

export default connect(mapStateToProps)(AboutEducation);
