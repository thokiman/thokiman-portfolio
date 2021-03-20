import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectAboutRoute,
  selectTimelineCareerRoute,
} from "../../redux/about/about.selectors";
import AboutDropdownBar from "../about-dropdown-content/about-dropdown-bar.component";
import { AboutDropdownContainer } from "./about-dropdown.styles";

const AboutDropdown = ({
  location: { pathname },
  aboutRoute,
  timelineCareerRoute,
}) => {
  return (
    <AboutDropdownContainer
      $matchpath={!!pathname.match(`${aboutRoute}${timelineCareerRoute}`)}
    >
      <AboutDropdownBar />
    </AboutDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  timelineCareerRoute: selectTimelineCareerRoute,
  aboutRoute: selectAboutRoute,
});
export default withRouter(connect(mapStateToProps)(AboutDropdown));
