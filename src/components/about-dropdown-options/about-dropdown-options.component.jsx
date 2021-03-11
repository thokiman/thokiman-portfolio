import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./about-dropdown-options.styles.scss";

const AboutDropdownOptions = ({ location: { pathname } }) => {
  return (
    <div className="dropdown-options">
      <div className="dropdown-option">
        <Link
          to="/about/skill"
          className={
            pathname.match(RegExp(/\/about\/skill$/))
              ? "dropdown-link-option-active"
              : "dropdown-link-option"
          }
        >
          Skill
        </Link>
      </div>
      <div className="dropdown-option">
        <Link
          to="/about/education"
          className={
            pathname.match(RegExp(/\/about\/education$/))
              ? "dropdown-link-option-active"
              : "dropdown-link-option"
          }
        >
          Education
        </Link>
      </div>
      <div className="dropdown-option">
        <Link
          to="/about/project"
          className={
            pathname.match(RegExp(/\/about\/project$/))
              ? "dropdown-link-option-active"
              : "dropdown-link-option"
          }
        >
          Project
        </Link>
      </div>
      <div className="dropdown-option">
        <Link
          to="/about/summary"
          className={
            pathname.match(RegExp(/\/about\/summary$/))
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

export default withRouter(AboutDropdownOptions);
