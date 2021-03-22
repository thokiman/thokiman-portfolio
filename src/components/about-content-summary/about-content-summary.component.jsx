import React from "react";

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
import {
  ThokimanExcitedFaceIcon,
  ThokimanNormalFaceIcon,
  AboutDownloadLink,
  AboutDownloadText,
  AboutSummaryContainer,
  AboutSummaryTextFour,
  AboutSummaryTextOne,
  AboutSummaryTextThree,
  AboutSummaryTextTwo,
  AboutSummaryTitle,
  AboutThankYouText,
  SummaryContainer,
} from "./about-content-summary.styles";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

const AboutSummary = ({
  longDescription: { p1, p2, p3, p4 },
  cv: { iconPath },
  isVibrate,
  isDownloadClick,
  toggleDownload,
  toggleVibrate,
  isSideBarHidden,
}) => {
  return (
    <SummaryContainer $issidebarhidden={isSideBarHidden}>
      <AboutSummaryContainer>
        <ThokimanNormalFaceIcon />
        <AboutSummaryTitle>
          Summary of Thomas Santosa A.K.A Thokiman
        </AboutSummaryTitle>
        <AboutSummaryTextOne>{p1}</AboutSummaryTextOne>
        <AboutSummaryTextTwo>{p2}</AboutSummaryTextTwo>
        <AboutSummaryTextThree>{p3}</AboutSummaryTextThree>
        <AboutSummaryTextFour>{p4}</AboutSummaryTextFour>
        <AboutDownloadLink to={`${iconPath}`} download target="_blank">
          <AboutDownloadText
            onMouseEnter={() => toggleVibrate()}
            onMouseLeave={() => toggleVibrate()}
            onClick={() => toggleDownload()}
          >
            Download CV
          </AboutDownloadText>
          {isDownloadClick ? (
            <AboutThankYouText>
              Thanks <GiSharpSmile /> <ImGrin /> <GiSharpSmile />
            </AboutThankYouText>
          ) : (
            ""
          )}
          <ThokimanExcitedFaceIcon $isvibrate={isVibrate} />
        </AboutDownloadLink>
      </AboutSummaryContainer>
    </SummaryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isVibrate: selectIsVibrate,
  isDownloadClick: selectIsDownloadClick,
  longDescription: selectPersonalSummaryLongDescription,
  cv: selectPersonalSummaryCV,
  isSideBarHidden: selectIsSideBarHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleVibrate: () => dispatch(toggleVibrate()),
  toggleDownload: () => dispatch(toggleDownload()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutSummary);
