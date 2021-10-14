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
  isSideBarActive,
}) => {
  return (
    <HomepageProfileTextContainer $issidebaractive={isSideBarActive}>
      <HomepageBackgroundProfileText>
        <HomepageNameText className='homepage-text'>
          Thomas Santosa
        </HomepageNameText>
        <HomepageActivityText className='homepage-text'>
          {shortDescription}
        </HomepageActivityText>
        <HomepageQuoteText className='homepage-text'>{quote}</HomepageQuoteText>
      </HomepageBackgroundProfileText>
    </HomepageProfileTextContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(HomePageProfileTextContainer);
