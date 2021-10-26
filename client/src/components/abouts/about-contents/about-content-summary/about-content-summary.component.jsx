import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { GiSharpSmile } from 'react-icons/gi';
import { ImGrin } from 'react-icons/im';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  toggleDownload,
  toggleVibrate,
} from '../../../../redux/about/about.actions';
import {
  selectIsDownloadClick,
  selectIsVibrate,
  selectPersonalSummaryCV,
  selectPersonalSummaryLongDescription,
} from '../../../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
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
  SummaryContainer,
  ThokimanExcitedFaceIcon,
  ThokimanNormalFaceIcon,
} from './about-content-summary.styles';
import { measureSummaryContainerProps } from './about-content-summary.utils.style';

export const AboutSummary = ({
  longDescription: { p1, p2, p3, p4 },
  cv: { iconPath },
  isVibrate,
  isDownloadClick,
  toggleDownload,
  toggleVibrate,
  isSideBarActive,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <SummaryContainer
      $summarycontainer={measureSummaryContainerProps(viewWidth, viewHeight)}
      className='summary-container'
      $issidebaractive={isSideBarActive}
    >
      <AboutSummaryContainer>
        <ThokimanNormalFaceIcon className='about-summary-title' />
        <AboutSummaryTitle className='about-summary-title'>
          Summary of Thomas Santosa A.K.A Thokiman
        </AboutSummaryTitle>
        <AboutSummaryTextOne className='about-summary'>
          {p1}
        </AboutSummaryTextOne>
        <AboutSummaryTextTwo className='about-summary'>
          {p2}
        </AboutSummaryTextTwo>
        <AboutSummaryTextThree className='about-summary'>
          {p3}
        </AboutSummaryTextThree>
        <AboutSummaryTextFour className='about-summary'>
          {p4}
        </AboutSummaryTextFour>
        <AboutDownloadLink
          className='about-summary'
          to={`${iconPath}`}
          download
          target='_blank'
        >
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
            ''
          )}
          <ThokimanExcitedFaceIcon
            className='about-summary'
            $isvibrate={isVibrate}
          />
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
  isSideBarActive: selectIsSideBarActive,
});

const mapDispatchToProps = (dispatch) => ({
  toggleVibrate: () => dispatch(toggleVibrate()),
  toggleDownload: () => dispatch(toggleDownload()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutSummary);
