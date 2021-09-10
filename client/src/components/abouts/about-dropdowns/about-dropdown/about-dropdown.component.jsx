import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectAboutRoute,
  selectLowWaveImage,
  selectTimelineCareerRoute,
} from '../../../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import AboutDropdownBar from '../about-dropdown-content/about-dropdown-bar.component';
import { AboutDropdownContainer } from './about-dropdown.styles';

export const AboutDropdown = ({
  location: { pathname },
  aboutRoute,
  timelineCareerRoute,
  isSideBarActive,
  lowWaveImage,
}) => {
  return (
    <AboutDropdownContainer
      $matchpath={!!pathname.match(`${aboutRoute}${timelineCareerRoute}`)}
      $issidebaractive={isSideBarActive}
      $lowWaveImage={lowWaveImage}
    >
      <AboutDropdownBar />
    </AboutDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  timelineCareerRoute: selectTimelineCareerRoute,
  aboutRoute: selectAboutRoute,
  isSideBarActive: selectIsSideBarActive,
  lowWaveImage: selectLowWaveImage,
});
export default withRouter(connect(mapStateToProps)(AboutDropdown));
