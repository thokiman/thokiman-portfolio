import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  selectCrownWebsiteRoute,
  selectCrownWebsiteTitle,
  selectThokimanWebsiteRoute,
  selectThokimanWebsiteTitle,
  selectWebsiteHeaderDropdown,
  selectWebsiteRoute,
  selectYelpcampWebsiteRoute,
  selectYelpcampWebsiteTitle,
} from 'redux/collection/collection.selectors';
import { createStructuredSelector } from 'reselect';
import {
  PortfolioWebsiteHeaderOption,
  PortfolioWebsiteHeaderOptions,
  PortfolioWebsiteHeaderText,
} from './portfolio-website-header.styles.jsx';

export const PortfolioWebsiteHeader = (props) => {
  const {
    location: { pathname },

    websiteRoute,
    thokimanWebsiteRoute,
    thokimanWebsiteTitle,
    yelpcampWebsiteRoute,
    yelpcampWebsiteTitle,
    crownWebsiteRoute,
    crownWebsiteTitle,
    isWebsiteLinkDropdownActive,
  } = props;

  return (
    <PortfolioWebsiteHeaderOptions
      $dropdownactive={isWebsiteLinkDropdownActive}
    >
      <PortfolioWebsiteHeaderOption
        to={`${thokimanWebsiteRoute}`}
        $matchpath={
          !!pathname.match(`(${websiteRoute}$|${thokimanWebsiteRoute}$)`)
        }
        $orderDelayTranslateTAnimation={50}
      >
        <PortfolioWebsiteHeaderText
          $matchpath={
            !!pathname.match(`${websiteRoute}$|${thokimanWebsiteRoute}$`)
          }
        >
          {thokimanWebsiteTitle}
        </PortfolioWebsiteHeaderText>
      </PortfolioWebsiteHeaderOption>
      <PortfolioWebsiteHeaderOption
        to={`${crownWebsiteRoute}`}
        $matchpath={!!pathname.match(`${crownWebsiteRoute}$`)}
        $orderDelayTranslateAnimation={200}
      >
        <PortfolioWebsiteHeaderText
          $matchpath={!!pathname.match(`${crownWebsiteRoute}$`)}
        >
          {crownWebsiteTitle}
        </PortfolioWebsiteHeaderText>
      </PortfolioWebsiteHeaderOption>
      <PortfolioWebsiteHeaderOption
        to={`${yelpcampWebsiteRoute}`}
        $matchpath={!!pathname.match(`${yelpcampWebsiteRoute}$`)}
        $orderDelayTranslateAnimation={400}
      >
        <PortfolioWebsiteHeaderText
          $matchpath={!!pathname.match(`${yelpcampWebsiteRoute}$`)}
        >
          {yelpcampWebsiteTitle}
        </PortfolioWebsiteHeaderText>
      </PortfolioWebsiteHeaderOption>
    </PortfolioWebsiteHeaderOptions>
  );
};

const mapStateToProps = createStructuredSelector({
  websiteRoute: selectWebsiteRoute,
  thokimanWebsiteRoute: selectThokimanWebsiteRoute,
  thokimanWebsiteTitle: selectThokimanWebsiteTitle,
  yelpcampWebsiteRoute: selectYelpcampWebsiteRoute,
  yelpcampWebsiteTitle: selectYelpcampWebsiteTitle,
  crownWebsiteRoute: selectCrownWebsiteRoute,
  crownWebsiteTitle: selectCrownWebsiteTitle,
  isWebsiteLinkDropdownActive: selectWebsiteHeaderDropdown,
});

export default withRouter(connect(mapStateToProps)(PortfolioWebsiteHeader));
