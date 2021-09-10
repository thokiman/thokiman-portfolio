import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import {
  HomepageActivityText,
  HomepageBackgroundProfileText,
  HomepageNameText,
  HomepageProfileTextContainer,
  HomepageQuoteText,
} from './homepage-background-profile-text-container.styles';

export const HomePageProfileTextContainer = ({
  shortDescription,
  quote,
  isSideBarHidden: isSideBarActive,
}) => {
  return (
    <HomepageProfileTextContainer $issidebaractive={isSideBarActive}>
      <HomepageBackgroundProfileText>
        <HomepageNameText>Thomas Santosa</HomepageNameText>
        <HomepageActivityText>{shortDescription}</HomepageActivityText>
        <HomepageQuoteText>{quote}</HomepageQuoteText>
      </HomepageBackgroundProfileText>
    </HomepageProfileTextContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(HomePageProfileTextContainer);
