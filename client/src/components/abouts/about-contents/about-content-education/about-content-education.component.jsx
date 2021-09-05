import React from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import { createStructuredSelector } from "reselect";
import {
  selectEducationItemsLastBachelor,
  selectEducationItemsLastCourses,
  selectEducationItemsLastExperiences, selectPersonality
} from "../../../../redux/about/about.selectors";
import { selectIsSideBarHidden } from "../../../../redux/header/header.selectors";
import AboutEducationBachelor from "../../about-educations/about-education-bachelor/about-education-bachelor.component";
import AboutEducationCourse from "../../about-educations/about-education-course/about-education-course.component";
import AboutEducationExperience from "../../about-educations/about-education-experience/about-education-experience.component";
import AboutEducationPersonality from "../../about-educations/about-education-personality/about-education-personality.component";
import { EducationContainer } from "./about-content-education.styles";


export const AboutEducation = ({
  lastBachelor,
  lastExperiences,
  lastCourses,
  personality,
  isSideBarHidden,
}) => {
  return (
    <EducationContainer $issidebarhidden={isSideBarHidden}>
      <CSSTransitionGroup
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
      </CSSTransitionGroup>
    </EducationContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lastBachelor: selectEducationItemsLastBachelor,
  lastExperiences: selectEducationItemsLastExperiences,
  lastCourses: selectEducationItemsLastCourses,
  personality: selectPersonality,
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(AboutEducation);