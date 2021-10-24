import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsDropdownHidden } from '../../../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import {
  RightPageContainer,
  RightPageContent,
  ThokimanBodyContainer,
  ThokimanBodyGrayContent,
  ThokimanHandGrayLeftContent,
  ThokimanHandGrayRightContent,
  ThokimanHandLeftContainer,
  ThokimanHandRightContainer,
  ThokimanLegGrayLeftContent,
  ThokimanLegGrayRightContent,
  ThokimanLegLeftContainer,
  ThokimanLegRightContainer,
  ThokimanSkeletonGrayLeft,
  ThokimanSkeletonGrayMiddle,
  ThokimanSkeletonGrayRight,
  ThokimanSkeletonLeftRightContent,
  ThokimanSkeletonMiddleContent,
} from './about-content.styles';

export const AboutHomeContent = ({ isDropdownHidden, isSideBarActive }) => {
  return (
    <RightPageContainer
      $issidebaractive={isSideBarActive}
      className='right-page-container'
    >
      <RightPageContent>
        <ThokimanSkeletonGrayLeft $isdropdownhidden={isDropdownHidden}>
          <ThokimanSkeletonLeftRightContent
            $isdropdownhidden={isDropdownHidden}
            className='about-thokiman-skeleton'
          />
        </ThokimanSkeletonGrayLeft>
        <ThokimanSkeletonGrayMiddle $isdropdownhidden={isDropdownHidden}>
          <ThokimanSkeletonMiddleContent
            $isdropdownhidden={isDropdownHidden}
            className='about-thokiman-skeleton'
          />
        </ThokimanSkeletonGrayMiddle>
        <ThokimanSkeletonGrayRight $isdropdownhidden={isDropdownHidden}>
          <ThokimanSkeletonLeftRightContent
            className='about-thokiman-skeleton'
            $isdropdownhidden={isDropdownHidden}
          />
        </ThokimanSkeletonGrayRight>
        <ThokimanHandRightContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanHandGrayRightContent
            $isdropdownhidden={isDropdownHidden}
            className='about-thokiman-skeleton'
          />
        </ThokimanHandRightContainer>
        <ThokimanBodyContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanBodyGrayContent
            $isdropdownhidden={isDropdownHidden}
            className='about-thokiman-skeleton'
          />
        </ThokimanBodyContainer>
        <ThokimanHandLeftContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanHandGrayLeftContent
            $isdropdownhidden={isDropdownHidden}
            className='about-thokiman-skeleton'
          />
        </ThokimanHandLeftContainer>
        <ThokimanLegRightContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanLegGrayRightContent
            $isdropdownhidden={isDropdownHidden}
            className='about-thokiman-skeleton'
          />
        </ThokimanLegRightContainer>
        <ThokimanLegLeftContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanLegGrayLeftContent
            $isdropdownhidden={isDropdownHidden}
            className='about-thokiman-skeleton'
          />
        </ThokimanLegLeftContainer>
      </RightPageContent>
    </RightPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isDropdownHidden: selectIsDropdownHidden,
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(AboutHomeContent);
