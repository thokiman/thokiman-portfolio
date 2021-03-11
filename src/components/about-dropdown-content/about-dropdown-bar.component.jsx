import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleDropdownHidden } from "../../redux/about/about.actions";
import {
  selectAboutRoute,
  selectIsDropdownHidden,
  selectTimelineCareerRoute,
} from "../../redux/about/about.selectors";
import AboutDropdownOptions from "../about-dropdown-options/about-dropdown-options.component";
import { ReactComponent as ThokimanHeadColor } from "../../assets/collections-icon/thokiman-icon/logo/color/thokiman_head_color.svg";
import "./about-dropdown-bar.styles.scss";

const AboutDropdownBar = ({
  isDropdownHidden,
  toggleDropdownHidden,
  aboutRoute,
  timelineCareerRoute,
  location: { pathname },
}) => {
  return (
    <div className="dropdown-container">
      <div className="thokiman-head-color-container">
        {isDropdownHidden ? null : (
          <ThokimanHeadColor className="thokiman-head-color-show" />
        )}
      </div>
      <div className="dropdown-content">
        <Link
          to={aboutRoute}
          className={
            pathname.match(
              RegExp(
                `(${aboutRoute}/(skill|education|project|summary))|${aboutRoute}$`
              )
            )
              ? "dropdown-link-container-active"
              : "dropdown-link-container"
          }
          onClick={() => toggleDropdownHidden()}
        >
          About
        </Link>
        <div
          className="dropdown-menu-icon"
          onClick={() => toggleDropdownHidden()}
        >
          <div className={isDropdownHidden ? "bar1" : "change-bar1"}></div>
          <div className={isDropdownHidden ? "bar2" : "change-bar2"}></div>
          <div className={isDropdownHidden ? "bar3" : "change-bar3"}></div>
        </div>
      </div>

      {isDropdownHidden ? null : <AboutDropdownOptions />}
      <div className="break-line"></div>
      <div className="dropdown-content">
        <Link
          to={`${aboutRoute}${timelineCareerRoute}`}
          className={
            pathname.match(RegExp(`${aboutRoute}${timelineCareerRoute}$`))
              ? "dropdown-link-container-active"
              : "dropdown-link-container"
          }
        >
          Timeline Career
        </Link>
      </div>
      <div className="thokiman-head-color-container">
        {isDropdownHidden ? (
          <ThokimanHeadColor className="thokiman-head-color-hidden" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isDropdownHidden: selectIsDropdownHidden,
  aboutRoute: selectAboutRoute,
  timelineCareerRoute: selectTimelineCareerRoute,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDropdownHidden: () => dispatch(toggleDropdownHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AboutDropdownBar)
);
