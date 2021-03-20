import React from "react";

import {
  HomepageBackgroundProfileImage,
  HomepageProfileImage,
  HomepageProfileImageContainer,
} from "./homepage-profile-image-container.styles";

const HomePageProfileImageContainer = () => {
  return (
    <HomepageProfileImageContainer>
      <HomepageBackgroundProfileImage>
        <HomepageProfileImage />
      </HomepageBackgroundProfileImage>
    </HomepageProfileImageContainer>
  );
};

export default HomePageProfileImageContainer;
