import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./service-header.styles.scss";

const ServiceHeader = ({ match: { url }, location: { pathname } }) => {
  return (
    <div className="left-service-container">
      <div className="directory-service">
        <Link
          to={`${url}/engineer`}
          className={
            pathname.match(RegExp(`${url}/engineer$`))
              ? "directory-service-text-eng-active"
              : "directory-service-text-eng"
          }
        >
          engineer
        </Link>
        <Link
          to={`${url}/fullstack`}
          className={
            pathname.match(RegExp(`${url}/fullstack$`))
              ? "directory-service-text-fsd-active"
              : "directory-service-text-fsd"
          }
        >
          full
          <br />
          stack <br />
          developer
        </Link>
        <Link
          to={`${url}/visualart`}
          className={
            pathname.match(RegExp(`${url}/visualart$`))
              ? "directory-service-text-gd-active"
              : "directory-service-text-gd"
          }
        >
          graphic
          <br />
          design
        </Link>
        <Link
          to={`${url}/photo`}
          className={
            pathname.match(RegExp(`${url}/photo$`))
              ? "directory-service-text-pg-active"
              : "directory-service-text-pg"
          }
        >
          photo
          <br />
          graphy
        </Link>
      </div>
    </div>
  );
};

export default withRouter(ServiceHeader);
