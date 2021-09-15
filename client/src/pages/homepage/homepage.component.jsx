import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SpinnerLoading from '../../components/commons/spinner-loading/spinner-loading.component';
import {
  selectPersonalSummaryQuote,
  selectPersonalSummaryShortDescription,
} from '../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../redux/header/header.selectors';
import {
  HomepageAboutContentContainer,
  HomepageContainer,
  HomepageIsNotActivated,
} from './homepage.styles';

const HomePageThokimanContentContainer = lazy(() =>
  import(
    '../../components/homepage/homepage-contents/homepage-thokiman-container/homepage-thokiman-container.component'
  )
);
const HomePageProfileImageContainer = lazy(() =>
  import(
    '../../components/homepage/homepage-contents/homepage-profile-image-container/homepage-profile-image-container.component'
  )
);
const HomePageProfileTextContainer = lazy(() =>
  import(
    '../../components/homepage/homepage-contents/homepage-background-profile-text-container/homepage-background-profile-text-container.component'
  )
);

export const HomePage = (props) => (
  <HomepageContainer $issidebaractive={props.isSideBarActive}>
    {props.isSideBarActive ? (
      <HomepageIsNotActivated>
        Ho
        <br />
        me
      </HomepageIsNotActivated>
    ) : null}
    <Suspense fallback={<SpinnerLoading />}>
      <HomePageThokimanContentContainer />
      <HomepageAboutContentContainer>
        <HomePageProfileImageContainer />
        <HomePageProfileTextContainer {...props} />
      </HomepageAboutContentContainer>
    </Suspense>
  </HomepageContainer>
);

const mapStateToProps = createStructuredSelector({
  shortDescription: selectPersonalSummaryShortDescription,
  quote: selectPersonalSummaryQuote,
  isSideBarActive: selectIsSideBarActive,
});
export default connect(mapStateToProps)(HomePage);
