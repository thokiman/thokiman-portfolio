import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { GiSharpSmile } from "react-icons/gi";
import { ImGrin } from "react-icons/im";

import {
  selectIsVibrate,
  selectIsDownloadClick,
  selectPersonalSummaryLongDescription,
  selectPersonalSummaryCV,
} from "../../redux/about/about.selectors";
import { toggleVibrate, toggleDownload } from "../../redux/about/about.actions";
import { ReactComponent as ThokimanExcitedFace } from "../../assets/collections-icon/thokiman-icon/collections/excited_face.svg";
import { ReactComponent as ThokimanNormalFace } from "../../assets/collections-icon/thokiman-icon/collections/normal_face.svg";
import "./about-content-summary.styles.scss";

const AboutSummary = ({
  longDescription: { p1, p2, p3, p4 },
  cv: { iconPath },
  isVibrate,
  isDownloadClick,
  toggleDownload,
  toggleVibrate,
}) => {
  return (
    <div className="summary-container">
      <div className="about-summary-container">
        <ThokimanNormalFace className="thokiman-normal-face" />
        <div className="about-summary-title">
          Summary of Thomas Santosa A.K.A Thokiman
        </div>
        <p className="about-summary-text-1">{p1}</p>
        <p className="about-summary-text-2">{p2}</p>
        <p className="about-summary-text-3">{p3}</p>
        <p className="about-summary-text-4">{p4}</p>
        <Link
          to={`${iconPath}`}
          download
          target="_blank"
          className="download-link"
        >
          <div
            className="download-text"
            onMouseEnter={() => toggleVibrate()}
            onMouseLeave={() => toggleVibrate()}
            onClick={() => toggleDownload()}
          >
            Download CV
          </div>
          {isDownloadClick ? (
            <div className="thankyou-text">
              Thanks <GiSharpSmile /> <ImGrin /> <GiSharpSmile />
            </div>
          ) : (
            ""
          )}
          <ThokimanExcitedFace
            className={
              isVibrate
                ? "thokiman-excited-face-vibrate"
                : "thokiman-excited-face"
            }
          />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isVibrate: selectIsVibrate,
  isDownloadClick: selectIsDownloadClick,
  longDescription: selectPersonalSummaryLongDescription,
  cv: selectPersonalSummaryCV,
});

const mapDispatchToProps = (dispatch) => ({
  toggleVibrate: () => dispatch(toggleVibrate()),
  toggleDownload: () => dispatch(toggleDownload()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutSummary);
