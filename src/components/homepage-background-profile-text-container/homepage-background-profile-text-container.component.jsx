import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsSideBarHidden } from "../../redux/header/header.selectors";
import {
  HomepageActivityText,
  HomepageBackgroundProfileText,
  HomepageNameText,
  HomepageProfileTextContainer,
  HomepageQuoteText,
} from "./homepage-background-profile-text-container.styles";

const HomePageProfileTextContainer = ({
  shortDescription,
  quote,
  isSideBarHidden,
}) => {
  return (
    <HomepageProfileTextContainer $issidebarhidden={isSideBarHidden}>
      <HomepageBackgroundProfileText>
        <HomepageNameText>Thomas Santosa</HomepageNameText>
        <HomepageActivityText>{shortDescription}</HomepageActivityText>
        <HomepageQuoteText>{quote}</HomepageQuoteText>
      </HomepageBackgroundProfileText>
    </HomepageProfileTextContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(HomePageProfileTextContainer);
