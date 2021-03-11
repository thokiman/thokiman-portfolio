import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./about-skill-header.styles.scss";

const SkillHeader = ({ match: { url }, location: { pathname } }) => {
  return (
    <div className="header-skill-container">
      <div className="skill-box">
        <Link
          to={`${url}/visualart`}
          className={`${
            pathname.match(/\/about\/skill\/visualart/)
              ? "active-text-box"
              : "text-box"
          }`}
        >
          Visual Art
        </Link>
      </div>
      <div className="skill-box">
        <Link
          to={`${url}/engineer`}
          className={`${
            pathname.match(/\/about\/skill\/engineer/)
              ? "active-text-box"
              : "text-box"
          }`}
        >
          Engineer
        </Link>
      </div>
      <div className="skill-box">
        <Link
          to={`${url}/technology`}
          className={`${
            pathname.match(/\/about\/skill\/technology/)
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

export default withRouter(SkillHeader);
