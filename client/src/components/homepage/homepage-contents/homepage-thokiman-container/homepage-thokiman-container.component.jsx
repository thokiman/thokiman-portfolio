import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectIsHeaderMorphingActive,
  selectIsSideBarActive,
} from '../../../../redux/header/header.selectors';
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
  isHeaderMorphingActive,
  toggleThokimanSkeleton,
  toggleThokimanOutline,
}) => {
  const homepageThokimanHeadOutlineRef = useRef();
  const homepageWhiteThokimanSkeletonRef = useRef();
  const homepageThokimanHeadOutlineTl = useRef();
  const homepageWhiteThokimanSkeletonTl = useRef();

  useEffect(() => {
    if (isHeaderMorphingActive) {
      homepageThokimanHeadOutlineTl.current = gsap
        .timeline()
        .to(homepageThokimanHeadOutlineRef.current, {
          yPercent: 40,
          duration: 6,
          yoyo: true,
          yoyoEase: true,
          repeat: 1,
          repeatDelay: 0.2,
        });
      homepageWhiteThokimanSkeletonTl.current = gsap
        .timeline()
        .to(homepageWhiteThokimanSkeletonRef.current, {
          yPercent: 60,
          duration: 6,
          yoyo: true,
          yoyoEase: true,
          repeat: 1,
          repeatDelay: 0.4,
        });
      homepageThokimanHeadOutlineTl.current.play();
      homepageWhiteThokimanSkeletonTl.current.play();
    }
  });
  return (
    <HomepageThokimanContentContainer
      $rockWaveImage={rockWaveImage}
      className='homepage-thokiman-content-container'
    >
      <HomepageThokimanContainer $issidebaractive={isSideBarActive}>
        <HomepageThokimanHeadContainer>
          <HomepageThokimanHeadOutline ref={homepageThokimanHeadOutlineRef} />
        </HomepageThokimanHeadContainer>
        <HomepageThokimanBodyContainer>
          <HomepageWhiteThokimanSkeleton
            ref={homepageWhiteThokimanSkeletonRef}
          />
        </HomepageThokimanBodyContainer>
      </HomepageThokimanContainer>
    </HomepageThokimanContentContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isHeaderMorphingActive: selectIsHeaderMorphingActive,
  isSideBarActive: selectIsSideBarActive,
  rockWaveImage: selectRockWaveImage,
});

export default connect(mapStateToProps)(HomePageThokimanContentContainer);
