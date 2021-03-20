import React from "react";

import {
  HomepageActivityText,
  HomepageBackgroundProfileText,
  HomepageNameText,
  HomepageProfileTextContainer,
  HomepageQuoteText,
} from "./homepage-background-profile-text-container.styles";

const HomePageProfileTextContainer = ({ shortDescription, quote }) => {
  return (
    <HomepageProfileTextContainer>
      <HomepageBackgroundProfileText>
        <HomepageNameText>Thomas Santosa</HomepageNameText>
        <HomepageActivityText>{shortDescription}</HomepageActivityText>
        <HomepageQuoteText>{quote}</HomepageQuoteText>
      </HomepageBackgroundProfileText>
    </HomepageProfileTextContainer>
  );
};

export default HomePageProfileTextContainer;
