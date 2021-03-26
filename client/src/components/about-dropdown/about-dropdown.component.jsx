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
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";
export const AboutDropdown = ({
  location: { pathname },
  aboutRoute,
  timelineCareerRoute,
  isSideBarHidden,
}) => {
  return (
    <AboutDropdownContainer
      $matchpath={!!pathname.match(`${aboutRoute}${timelineCareerRoute}`)}
      $issidebarhidden={isSideBarHidden}
    >
      <AboutDropdownBar />
    </AboutDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  timelineCareerRoute: selectTimelineCareerRoute,
  aboutRoute: selectAboutRoute,
  isSideBarHidden: selectIsSideBarHidden,
});
export default withRouter(connect(mapStateToProps)(AboutDropdown));
