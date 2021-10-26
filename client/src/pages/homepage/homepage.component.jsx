import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Footer from '../../components/footers/footer/footer.component';
import HomepageProfileTextContainer from '../../components/homepage/homepage-contents/homepage-background-profile-text-container/homepage-background-profile-text-container.component';
import HomepageProfileImageContainer from '../../components/homepage/homepage-contents/homepage-profile-image-container/homepage-profile-image-container.component';
import HomepageThokimanContentContainer from '../../components/homepage/homepage-contents/homepage-thokiman-container/homepage-thokiman-container.component';
import {
  selectPersonalSummaryQuote,
  selectPersonalSummaryShortDescription,
} from '../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../redux/header/header.selectors';
import {
  HomepageAboutContentContainer,
  HomepageContainer,
  HomepageElement,
  HomepageIsNotActivated,
} from './homepage.styles';
import {
  measureHomepageContainerProps,
  measureHomepageIsNotActivated,
} from './homepage.utils.styles';

export const Homepage = (props) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  const { isSideBarActive } = props;

  return (
    <HomepageElement>
      <HomepageContainer
        $measurehomepagecontainer={measureHomepageContainerProps(
          viewWidth,
          viewHeight
        )}
        $issidebaractive={isSideBarActive}
      >
        {props.isSideBarActive ? (
          <HomepageIsNotActivated
            $homepageisnotactivatedprops={measureHomepageIsNotActivated(
              viewWidth,
              viewHeight
            )}
          >
            Ho
            <br />
            me
          </HomepageIsNotActivated>
        ) : null}
        <HomepageThokimanContentContainer />

        <HomepageAboutContentContainer className='homepage-about-content-container'>
          <HomepageProfileImageContainer />
          <HomepageProfileTextContainer {...props} />
        </HomepageAboutContentContainer>
      </HomepageContainer>
      <Footer />
    </HomepageElement>
  );
};
const mapStateToProps = createStructuredSelector({
  shortDescription: selectPersonalSummaryShortDescription,
  quote: selectPersonalSummaryQuote,
  isSideBarActive: selectIsSideBarActive,
});
export default connect(mapStateToProps)(Homepage);
