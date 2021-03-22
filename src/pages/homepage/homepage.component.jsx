import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../../components/page-shell/page-shell.component";
import HomePageThokimanContentContainer from "../../components/homepage-thokiman-container/homepage-thokiman-container.component";
import HomePageProfileImageContainer from "../../components/homepage-profile-image-container/homepage-profile-image-container.component";
import HomePageProfileTextContainer from "../../components/homepage-background-profile-text-container/homepage-background-profile-text-container.component";
import {
  HomepageContainer,
  HomepageAboutContentContainer,
  HomepageSideBarHide,
} from "./homepage.styles";
import {
  selectPersonalSummaryQuote,
  selectPersonalSummaryShortDescription,
} from "../../redux/about/about.selectors";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

const HomePage = (props) => {
  return (
    <HomepageContainer $issidebarhidden={props.isSideBarHidden}>
      {props.isSideBarHidden ? (
        <HomepageSideBarHide>Ho me</HomepageSideBarHide>
      ) : null}
      <HomePageThokimanContentContainer />
      <HomepageAboutContentContainer>
        <HomePageProfileImageContainer />
        <HomePageProfileTextContainer {...props} />
      </HomepageAboutContentContainer>
    </HomepageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  shortDescription: selectPersonalSummaryShortDescription,
  quote: selectPersonalSummaryQuote,
  isSideBarHidden: selectIsSideBarHidden,
});
export default connect(mapStateToProps)(PageShell(HomePage));
