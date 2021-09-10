import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import HomepageProfileImageCartoon from '../homepage-profile-image-cartoon/homepage-profile-image-cartoon.component.jsx';
import {
  HomepageBackgroundProfileImage,
  HomepageProfileImage,
  HomepageProfileImageContainer,
} from './homepage-profile-image-container.styles';

export const HomePageProfileImageContainer = ({ isSideBarActive }) => {
  return (
    <HomepageProfileImageContainer $issidebaractive={isSideBarActive}>
      <HomepageProfileImageCartoon />
      <HomepageBackgroundProfileImage>
        <HomepageProfileImage />
      </HomepageBackgroundProfileImage>
    </HomepageProfileImageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(HomePageProfileImageContainer);
