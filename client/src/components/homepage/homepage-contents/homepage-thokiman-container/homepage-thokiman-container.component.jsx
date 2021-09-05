import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarHidden } from '../../../../redux/header/header.selectors';
import { selectRockWaveImage } from '../../../../redux/homepage/homepage.selectors';
import {
  HomepageThokimanBodyContainer,
  HomepageThokimanContainer,
  HomepageThokimanContentContainer,
  HomepageThokimanHeadContainer,
  HomepageThokimanHeadOutline,
  HomepageWhiteThokimanSkeleton
} from './homepage-thokiman-container.styles';

export const HomePageThokimanContentContainer = ({
  isSideBarHidden,
  rockWaveImage,
}) => {
  return (
    <HomepageThokimanContentContainer $rockWaveImage={rockWaveImage}>
      <HomepageThokimanContainer $issidebarhidden={isSideBarHidden}>
        <HomepageThokimanHeadContainer>
          <HomepageThokimanHeadOutline />
        </HomepageThokimanHeadContainer>
        <HomepageThokimanBodyContainer>
          <HomepageWhiteThokimanSkeleton />
        </HomepageThokimanBodyContainer>
      </HomepageThokimanContainer>
    </HomepageThokimanContentContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarHidden,
  rockWaveImage: selectRockWaveImage,
});

export default connect(mapStateToProps)(HomePageThokimanContentContainer);
