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
    <RightPageContainer $issidebaractive={isSideBarActive}>
      <RightPageContent>
        <ThokimanSkeletonGrayLeft $isdropdownhidden={isDropdownHidden}>
          <ThokimanSkeletonLeftRightContent
            $isdropdownhidden={isDropdownHidden}
          />
        </ThokimanSkeletonGrayLeft>
        <ThokimanSkeletonGrayMiddle $isdropdownhidden={isDropdownHidden}>
          <ThokimanSkeletonMiddleContent $isdropdownhidden={isDropdownHidden} />
        </ThokimanSkeletonGrayMiddle>
        <ThokimanSkeletonGrayRight $isdropdownhidden={isDropdownHidden}>
          <ThokimanSkeletonLeftRightContent
            $isdropdownhidden={isDropdownHidden}
          />
        </ThokimanSkeletonGrayRight>
        <ThokimanHandRightContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanHandGrayRightContent />
        </ThokimanHandRightContainer>
        <ThokimanBodyContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanBodyGrayContent />
        </ThokimanBodyContainer>
        <ThokimanHandLeftContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanHandGrayLeftContent />
        </ThokimanHandLeftContainer>
        <ThokimanLegRightContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanLegGrayRightContent />
        </ThokimanLegRightContainer>
        <ThokimanLegLeftContainer $isdropdownhidden={isDropdownHidden}>
          <ThokimanLegGrayLeftContent />
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
