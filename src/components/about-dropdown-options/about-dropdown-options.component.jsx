import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./about-dropdown-options.styles.scss";
import {
  selectEducationRoute,
  selectProjectRoute,
  selectSkillRoute,
  selectSummaryRoute,
  selectTimelineCareerRoute,
} from "../../redux/about/about.selectors";

const AboutDropdownOptions = ({
  location: { pathname },
  skillRoute,
  summaryRoute,
  educationRoute,
  projectRoute,
  timelineCareerRoute,
}) => {
  return (
    <div className="dropdown-options">
      <div className="dropdown-option">
        <Link
          to={skillRoute}
          className={
            pathname.match(RegExp(`${skillRoute}$`))
              ? "dropdown-link-option-active"
              : "dropdown-link-option"
          }
        >
          Skill
        </Link>
      </div>
      <div className="dropdown-option">
        <Link
          to={educationRoute}
          className={
            pathname.match(RegExp(`${educationRoute}$`))
              ? "dropdown-link-option-active"
              : "dropdown-link-option"
          }
        >
          Education
        </Link>
      </div>
      <div className="dropdown-option">
        <Link
          to={projectRoute}
          className={
            pathname.match(RegExp(`${projectRoute}$`))
              ? "dropdown-link-option-active"
              : "dropdown-link-option"
          }
        >
          Project
        </Link>
      </div>
      <div className="dropdown-option">
        <Link
          to={summaryRoute}
          className={
            pathname.match(RegExp(`${summaryRoute}$`))
              ? "dropdown-link-option-active"
              : "dropdown-link-option"
          }
        >
          Summary
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  skillRoute: selectSkillRoute,
  summaryRoute: selectSummaryRoute,
  educationRoute: selectEducationRoute,
  projectRoute: selectProjectRoute,
  timelineCareerRoute: selectTimelineCareerRoute,
});
export default withRouter(connect(mapStateToProps)(AboutDropdownOptions));
