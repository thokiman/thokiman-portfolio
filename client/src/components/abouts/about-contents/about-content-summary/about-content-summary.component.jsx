import React from "react";
import { GiSharpSmile } from "react-icons/gi";
import { ImGrin } from "react-icons/im";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleDownload, toggleVibrate } from "../../../../redux/about/about.actions";
import {
  selectIsDownloadClick, selectIsVibrate, selectPersonalSummaryCV, selectPersonalSummaryLongDescription
} from "../../../../redux/about/about.selectors";
import { selectIsSideBarHidden } from "../../../../redux/header/header.selectors";
import {
  AboutDownloadLink,
  AboutDownloadText,
  AboutSummaryContainer,
  AboutSummaryTextFour,
  AboutSummaryTextOne,
  AboutSummaryTextThree,
  AboutSummaryTextTwo,
  AboutSummaryTitle,
  AboutThankYouText,
  SummaryContainer, ThokimanExcitedFaceIcon,
  ThokimanNormalFaceIcon
} from "./about-content-summary.styles";



export const AboutSummary = ({
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
        <AboutDownloadLink to={`${ iconPath }`} download target="_blank">
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
