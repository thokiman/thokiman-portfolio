import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectAboutRoute,
  selectLowWaveImage,
  selectTimelineCareerRoute
} from '../../../../redux/about/about.selectors';
import { selectIsSideBarHidden } from '../../../../redux/header/header.selectors';
import AboutDropdownBar from '../about-dropdown-content/about-dropdown-bar.component';
import { AboutDropdownContainer } from './about-dropdown.styles';

export const AboutDropdown = ({
  location: { pathname },
  aboutRoute,
  timelineCareerRoute,
  isSideBarHidden,
  lowWaveImage,
}) => {
  return (
    <AboutDropdownContainer
      $matchpath={!!pathname.match(`${ aboutRoute }${ timelineCareerRoute }`)}
      $issidebarhidden={isSideBarHidden}
      $lowWaveImage={lowWaveImage}
    >
      <AboutDropdownBar />
    </AboutDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  timelineCareerRoute: selectTimelineCareerRoute,
  aboutRoute: selectAboutRoute,
  isSideBarHidden: selectIsSideBarHidden,
  lowWaveImage: selectLowWaveImage,
});
export default withRouter(connect(mapStateToProps)(AboutDropdown));
