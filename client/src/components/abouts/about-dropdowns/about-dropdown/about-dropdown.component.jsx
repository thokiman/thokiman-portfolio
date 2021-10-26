import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
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
import { measureAboutDropdownContainerProps } from './about-dropdown.utils.style';

export const AboutDropdown = ({
  location: { pathname },
  aboutRoute,
  timelineCareerRoute,
  isSideBarActive,
  lowWaveImage,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <AboutDropdownContainer
      $measureaboutdropdowncontainer={measureAboutDropdownContainerProps(
        viewWidth,
        viewHeight
      )}
      className='about-dropdown-container'
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
