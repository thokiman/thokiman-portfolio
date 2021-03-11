import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectAboutRoute,
  selectTimelineCareerRoute,
} from "../../redux/about/about.selectors";
import AboutDropdownBar from "../about-dropdown-content/about-dropdown-bar.component";
import "./about-dropdown.styles.scss";

const AboutDropdown = ({
  location: { pathname },
  timelineCareerRoute,
  aboutRoute,
}) => {
  return (
    <div
      className={
        pathname.match(`${aboutRoute}${timelineCareerRoute}`)
          ? "left-page-container-timeline"
          : "left-page-container"
      }
    >
      <AboutDropdownBar />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  timelineCareerRoute: selectTimelineCareerRoute,
  aboutRoute: selectAboutRoute,
});
export default withRouter(connect(mapStateToProps)(AboutDropdown));
