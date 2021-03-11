import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ThokimanSkeletonGray } from "../../assets/collections-icon/thokiman-icon/page/thokiman_skeleton_gray.svg";
import { ReactComponent as ThokimanBodyGray } from "../../assets/collections-icon/thokiman-icon/page/thokiman_body_gray.svg";
import { ReactComponent as ThokimanHandGray } from "../../assets/collections-icon/thokiman-icon/page/thokiman_hand_gray.svg";
import { ReactComponent as ThokimanLegGray } from "../../assets/collections-icon/thokiman-icon/page/thokiman_leg_gray.svg";
import "./about-content.styles.scss";
import { selectIsDropdownHidden } from "../../redux/about/about.selectors";

const AboutHomeContent = ({ isDropdownHidden }) => {
  return (
    <div className="right-page-container">
      <div className="right-page-content">
        <div
          className={
            isDropdownHidden
              ? "thokiman-skeleton-gray-left-hide"
              : "thokiman-skeleton-gray-left-show"
          }
        >
          <ThokimanSkeletonGray
            className={
              isDropdownHidden
                ? "thokiman-skeleton-content-hide"
                : "thokiman-skeleton-content-show"
            }
          />
        </div>
        <div
          className={
            isDropdownHidden
              ? "thokiman-skeleton-gray-middle-hide"
              : "thokiman-skeleton-gray-middle-show"
          }
        >
          <ThokimanSkeletonGray
            className={
              isDropdownHidden
                ? "thokiman-skeleton-content-hide"
                : "thokiman-skeleton-content-show"
            }
          />
        </div>
        <div
          className={
            isDropdownHidden
              ? "thokiman-skeleton-gray-right-hide"
              : "thokiman-skeleton-gray-right-show"
          }
        >
          <ThokimanSkeletonGray
            className={
              isDropdownHidden
                ? "thokiman-skeleton-content-hide"
                : "thokiman-skeleton-content-show"
            }
          />
        </div>

        <div
          className={
            isDropdownHidden
              ? "thokiman-right-hand-hide"
              : "thokiman-right-hand-show"
          }
        >
          <ThokimanHandGray
            className={
              isDropdownHidden
                ? "thokiman-right-hand-content-hide"
                : "thokiman-right-hand-content-show"
            }
          />
        </div>
        <div
          className={
            isDropdownHidden
              ? "thokiman-body-middle-hide"
              : "thokiman-body-middle-show"
          }
        >
          <ThokimanBodyGray
            className={
              isDropdownHidden
                ? "thokiman-body-content-hide"
                : "thokiman-body-content-show"
            }
          />
        </div>
        <div
          className={
            isDropdownHidden
              ? "thokiman-left-hand-hide"
              : "thokiman-left-hand-show"
          }
        >
          <ThokimanHandGray
            className={
              isDropdownHidden
                ? "thokiman-left-hand-content-hide"
                : "thokiman-left-hand-content-show"
            }
          />
        </div>
        <div
          className={
            isDropdownHidden
              ? "thokiman-right-leg-hide"
              : "thokiman-right-leg-show"
          }
        >
          <ThokimanLegGray
            className={
              isDropdownHidden
                ? "thokiman-right-leg-content-hide"
                : "thokiman-right-leg-content-show"
            }
          />
        </div>
        <div
          className={
            isDropdownHidden
              ? "thokiman-left-leg-hide"
              : "thokiman-left-leg-show"
          }
        >
          <ThokimanLegGray
            className={
              isDropdownHidden
                ? "thokiman-left-leg-content-hide"
                : "thokiman-left-leg-content-show"
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isDropdownHidden: selectIsDropdownHidden,
});

export default connect(mapStateToProps)(AboutHomeContent);
