import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import { selectRockWaveImage } from '../../../../redux/homepage/homepage.selectors';
import {
  HomepageThokimanBodyContainer,
  HomepageThokimanContainer,
  HomepageThokimanContentContainer,
  HomepageThokimanHeadContainer,
  HomepageThokimanHeadOutline,
  HomepageWhiteThokimanSkeleton,
} from './homepage-thokiman-container.styles';

export const HomePageThokimanContentContainer = ({
  isSideBarActive,
  rockWaveImage,
}) => {
  return (
    <HomepageThokimanContentContainer $rockWaveImage={rockWaveImage}>
      <HomepageThokimanContainer $issidebaractive={isSideBarActive}>
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
  isSideBarActive: selectIsSideBarActive,
  rockWaveImage: selectRockWaveImage,
});

export default connect(mapStateToProps)(HomePageThokimanContentContainer);
