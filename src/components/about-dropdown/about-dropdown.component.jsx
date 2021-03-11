import React from "react";
import { withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import AboutDropdownBar from "../about-dropdown-content/about-dropdown-bar.component";
import "./about-dropdown.styles.scss";

const AboutDropdown = ({ location: { pathname }, match: { url } }) => {
  return (
    <div
      className={
        pathname.match(`${url}/timelinecareer$`)
          ? "left-page-container-timeline"
          : "left-page-container"
      }
    >
      <AboutDropdownBar />
    </div>
  );
};

export default withRouter(AboutDropdown);
