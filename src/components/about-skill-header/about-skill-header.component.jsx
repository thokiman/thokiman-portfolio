import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./about-skill-header.styles.scss";
import {
  selectSkillEngineerRoute,
  selectSkillRoute,
  selectSkillTechnologyRoute,
  selectSkillVisualArtRoute,
} from "../../redux/about/about.selectors";

const SkillHeader = ({
  location: { pathname },
  skillRoute,
  visualArtRoute,
  engineerRoute,
  technologyRoute,
}) => {
  return (
    <div className="header-skill-container">
      <div className="skill-box">
        <Link
          to={`${visualArtRoute}`}
          className={`${
            pathname.match(`(${skillRoute}$|${visualArtRoute}$)`)
              ? "active-text-box"
              : "text-box"
          }`}
        >
          Visual Art
        </Link>
      </div>
      <div className="skill-box">
        <Link
          to={`${engineerRoute}`}
          className={`${
            pathname.match(`${engineerRoute}$`) ? "active-text-box" : "text-box"
          }`}
        >
          Engineer
        </Link>
      </div>
      <div className="skill-box">
        <Link
          to={`${technologyRoute}`}
          className={`${
            pathname.match(`${technologyRoute}`)
              ? "active-text-box"
              : "text-box"
          }`}
        >
          Technology
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  skillRoute: selectSkillRoute,
  visualArtRoute: selectSkillVisualArtRoute,
  engineerRoute: selectSkillEngineerRoute,
  technologyRoute: selectSkillTechnologyRoute,
});

export default withRouter(connect(mapStateToProps)(SkillHeader));
