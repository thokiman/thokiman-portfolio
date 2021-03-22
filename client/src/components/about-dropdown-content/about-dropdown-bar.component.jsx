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
import {
  AboutDropdownContainer,
  AboutThokimanHeadColorContainer,
  AboutThokimanHeadColorShow,
  AboutThokimanHeadColorHide,
  AboutDropdownContent,
  AboutDropdownLinkContainer,
  AboutDropdownMenuIcon,
  AboutBarOne,
  AboutBarTwo,
  AboutBarThree,
  AboutBreakLine,
} from "./about-dropdown-bar.styles";

const AboutDropdownBar = ({
  isDropdownHidden,
  toggleDropdownHidden,
  aboutRoute,
  timelineCareerRoute,
  location: { pathname },
}) => {
  return (
    <AboutDropdownContainer>
      <AboutThokimanHeadColorContainer>
        {isDropdownHidden ? null : <AboutThokimanHeadColorShow />}
      </AboutThokimanHeadColorContainer>
      <AboutDropdownContent>
        <AboutDropdownLinkContainer
          to={aboutRoute}
          $matchpath={
            !!pathname.match(
              RegExp(
                `(${aboutRoute}/(skill|education|project|summary))|${aboutRoute}$`
              )
            )
          }
          onClick={() => toggleDropdownHidden()}
        >
          About
        </AboutDropdownLinkContainer>
        <AboutDropdownMenuIcon onClick={() => toggleDropdownHidden()}>
          <AboutBarOne $isdropdownhidden={isDropdownHidden} />
          <AboutBarTwo $isdropdownhidden={isDropdownHidden} />
          <AboutBarThree $isdropdownhidden={isDropdownHidden} />
        </AboutDropdownMenuIcon>
      </AboutDropdownContent>

      {isDropdownHidden ? null : <AboutDropdownOptions />}
      <AboutBreakLine />
      <AboutDropdownContent>
        <AboutDropdownLinkContainer
          to={`${aboutRoute}${timelineCareerRoute}`}
          $matchpath={
            !!pathname.match(RegExp(`${aboutRoute}${timelineCareerRoute}$`))
          }
        >
          Timeline Career
        </AboutDropdownLinkContainer>
      </AboutDropdownContent>
      <AboutThokimanHeadColorContainer>
        {isDropdownHidden ? <AboutThokimanHeadColorHide /> : ""}
      </AboutThokimanHeadColorContainer>
    </AboutDropdownContainer>
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
