import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsSideBarHidden } from "../../../../redux/header/header.selectors";
import HomepageProfileImageCartoon from "../homepage-profile-image-cartoon/homepage-profile-image-cartoon.component.jsx";
import {
  HomepageBackgroundProfileImage,
  HomepageProfileImage,
  HomepageProfileImageContainer
} from "./homepage-profile-image-container.styles";


export const HomePageProfileImageContainer = ({ isSideBarHidden }) => {
  return (
    <HomepageProfileImageContainer $issidebarhidden={isSideBarHidden}>
      <HomepageBackgroundProfileImage>
        <HomepageProfileImageCartoon/>
        <HomepageProfileImage />
      </HomepageBackgroundProfileImage>
    </HomepageProfileImageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(HomePageProfileImageContainer);
