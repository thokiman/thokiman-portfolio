import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransitionGroup } from "react-transition-group";
import { selectIsDropdownHidden } from "../../redux/about/about.selectors";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

import {
  RightPageContainer,
  RightPageContent,
  ThokimanSkeletonGrayMiddle,
  ThokimanSkeletonMiddleContent,
  ThokimanSkeletonGrayLeft,
  ThokimanSkeletonGrayRight,
  ThokimanSkeletonLeftRightContent,
  ThokimanBodyContainer,
  ThokimanBodyGrayContent,
  ThokimanHandGrayLeftContent,
  ThokimanHandLeftContainer,
  ThokimanHandGrayRightContent,
  ThokimanHandRightContainer,
  ThokimanLegGrayLeftContent,
  ThokimanLegLeftContainer,
  ThokimanLegGrayRightContent,
  ThokimanLegRightContainer,
} from "./about-content.styles";

const AboutHomeContent = ({ isDropdownHidden, isSideBarHidden }) => {
  return (
    <RightPageContainer $issidebarhidden={isSideBarHidden}>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <RightPageContent>
          <ThokimanSkeletonGrayLeft $isdropdownhidden={isDropdownHidden}>
            <ThokimanSkeletonLeftRightContent
              $isdropdownhidden={isDropdownHidden}
            />
          </ThokimanSkeletonGrayLeft>
          <ThokimanSkeletonGrayMiddle $isdropdownhidden={isDropdownHidden}>
            <ThokimanSkeletonMiddleContent
              $isdropdownhidden={isDropdownHidden}
            />
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
      </CSSTransitionGroup>
    </RightPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isDropdownHidden: selectIsDropdownHidden,
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(AboutHomeContent);
