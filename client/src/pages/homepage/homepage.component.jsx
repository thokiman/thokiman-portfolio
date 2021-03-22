import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../../components/page-shell/page-shell.component";
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
import SpinnerLoading from "../../components/spinner-loading/spinner-loading.component";
const HomePageThokimanContentContainer = lazy(() =>
  import(
    "../../components/homepage-thokiman-container/homepage-thokiman-container.component"
  )
);
const HomePageProfileImageContainer = lazy(() =>
  import(
    "../../components/homepage-profile-image-container/homepage-profile-image-container.component"
  )
);
const HomePageProfileTextContainer = lazy(() =>
  import(
    "../../components/homepage-background-profile-text-container/homepage-background-profile-text-container.component"
  )
);

const HomePage = (props) => {
  return (
    <HomepageContainer $issidebarhidden={props.isSideBarHidden}>
      <Suspense fallback={<SpinnerLoading />}>
        {props.isSideBarHidden ? (
          <HomepageSideBarHide>
            Ho
            <br />
            me
          </HomepageSideBarHide>
        ) : null}
        <HomePageThokimanContentContainer />
        <HomepageAboutContentContainer>
          <HomePageProfileImageContainer />
          <HomePageProfileTextContainer {...props} />
        </HomepageAboutContentContainer>
      </Suspense>
    </HomepageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  shortDescription: selectPersonalSummaryShortDescription,
  quote: selectPersonalSummaryQuote,
  isSideBarHidden: selectIsSideBarHidden,
});
export default connect(mapStateToProps)(PageShell(HomePage));
