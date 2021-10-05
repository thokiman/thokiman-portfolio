import React, { useEffect, useRef } from 'react';
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

export const Homepage = (props) => {
  const homepageElementRef = useRef(null);

  const { isSideBarActive } = props;
  // gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // console.log('1called');

    // gsap.from(homepageElementRef.current, {
    //   opacity: 0,
    //   duration: 10,
    // });
    // gsap.to(homepageElementRef.current, {
    //   opacity: 1,
    //   duration: 10,
    // });
    return () => {
      // homepageElementAnimation.kill();
      // console.log('2called');
    };
  }, []);

  return (
    <HomepageElement>
      <HomepageContainer $issidebaractive={isSideBarActive}>
        {props.isSideBarActive ? (
          <HomepageIsNotActivated>
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
