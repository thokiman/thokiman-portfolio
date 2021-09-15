import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleWebsiteLinkDropdown } from 'redux/collection/collection.actions';
import { createStructuredSelector } from 'reselect';
import {
  selectBrandRoute,
  selectBrandTitle,
  selectCurrentWebsitePathname,
  selectDigitalArtRoute,
  selectDigitalArtTitle,
  selectPhotographyBwRoute,
  selectPhotographyBwTitle,
  selectPhotographyColorRoute,
  selectPhotographyColorTitle,
  selectPortfolioRoute,
  selectWebsiteHeaderDropdown,
  selectWebsiteRoute,
  selectWebsiteTitle,
} from '../../../redux/collection/collection.selectors';
import { selectIsSideBarActive } from '../../../redux/header/header.selectors';
import {
  PortfolioHeaderOption,
  PortfolioHeaderOptions,
  WebsiteLeftButton,
} from './portfolio-header.styles';

export const PortfolioHeader = ({
  location: { pathname },
  portfolioRoute,
  brandRoute,
  brandTitle,
  digitalArtRoute,
  digitalArtTitle,
  photographyBwTitle,
  photographyBwRoute,
  photographyColorTitle,
  photographyColorRoute,
  websiteRoute,
  websiteTitle,
  isSideBarActive,
  isWebsiteLinkDropdownActive,
  toggleWebsiteLinkDropdown,
  currentWebsitePathname,
}) => {
  return (
    <PortfolioHeaderOptions
      className='options'
      $issidebaractive={isSideBarActive}
    >
      <PortfolioHeaderOption
        to={portfolioRoute}
        $matchpath={!!pathname.match(`${portfolioRoute}$`)}
        onClick={toggleWebsiteLinkDropdown}
      >
        All
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        to={brandRoute}
        $matchpath={!!pathname.match(brandRoute)}
        onClick={toggleWebsiteLinkDropdown}
      >
        {`${brandTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        to={digitalArtRoute}
        $matchpath={!!pathname.match(digitalArtRoute)}
        onClick={toggleWebsiteLinkDropdown}
      >
        {`${digitalArtTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        to={photographyColorRoute}
        $matchpath={!!pathname.match(photographyColorRoute)}
        onClick={toggleWebsiteLinkDropdown}
      >
        {`${photographyColorTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        to={photographyBwRoute}
        $matchpath={!!pathname.match(photographyBwRoute)}
        onClick={toggleWebsiteLinkDropdown}
      >
        {photographyBwTitle}
      </PortfolioHeaderOption>

      <PortfolioHeaderOption
        to={currentWebsitePathname}
        $matchpath={!!pathname.match(currentWebsitePathname)}
        onClick={toggleWebsiteLinkDropdown}
      >
        {websiteTitle}
        <WebsiteLeftButton
          $matchwebsite={!!pathname.match(currentWebsitePathname)}
          $dropdownactive={isWebsiteLinkDropdownActive}
        />
      </PortfolioHeaderOption>
    </PortfolioHeaderOptions>
  );
};

const mapStateToProps = createStructuredSelector({
  portfolioRoute: selectPortfolioRoute,
  brandRoute: selectBrandRoute,
  brandTitle: selectBrandTitle,
  digitalArtRoute: selectDigitalArtRoute,
  digitalArtTitle: selectDigitalArtTitle,
  photographyBwTitle: selectPhotographyBwTitle,
  photographyBwRoute: selectPhotographyBwRoute,
  photographyColorTitle: selectPhotographyColorTitle,
  photographyColorRoute: selectPhotographyColorRoute,
  websiteTitle: selectWebsiteTitle,
  websiteRoute: selectWebsiteRoute,
  isSideBarActive: selectIsSideBarActive,
  isWebsiteLinkDropdownActive: selectWebsiteHeaderDropdown,
  currentWebsitePathname: selectCurrentWebsitePathname,
});

const mapDispatchToProps = (dispatch) => ({
  toggleWebsiteLinkDropdown: () => dispatch(toggleWebsiteLinkDropdown()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PortfolioHeader)
);
