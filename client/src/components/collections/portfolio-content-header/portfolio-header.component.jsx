import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleWebsiteLinkDropdown } from 'redux/collection/collection.actions';
import { createStructuredSelector } from 'reselect';
import {
  selectAllPortfolioRoute,
  selectAllTitle,
  selectBrandRoute,
  selectBrandTitle,
  selectCurrentWebsitePathname,
  selectDefaultPortfolioRoute,
  selectDigitalArtRoute,
  selectDigitalArtTitle,
  selectPhotographyBwRoute,
  selectPhotographyBwTitle,
  selectPhotographyColorRoute,
  selectPhotographyColorTitle,
  selectWebsiteHeaderDropdown,
  selectWebsiteRoute,
  selectWebsiteTitle,
} from '../../../redux/collection/collection.selectors';
import {
  selectIsHeaderMorphingActive,
  selectIsSideBarActive,
} from '../../../redux/header/header.selectors';
import {
  PortfolioHeaderOption,
  PortfolioHeaderOptions,
  WebsiteLeftButton,
} from './portfolio-header.styles';

export const PortfolioHeader = ({
  location: { pathname },
  portfolioDefaultRoute,
  portfolioAllRoute,
  allTitle,
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
  isHeaderMorphingActive,
}) => {
  const toggleHeader = () => {
    toggleWebsiteLinkDropdown();
  };
  return (
    <PortfolioHeaderOptions
      $isheadermorphingactive={isHeaderMorphingActive}
      $issidebaractive={isSideBarActive}
    >
      <PortfolioHeaderOption
        $pathname={pathname}
        to={portfolioAllRoute}
        $matchpath={
          !!pathname.match(`${portfolioAllRoute}$`) ||
          !!pathname.match(`${portfolioAllRoute}[/]$`) ||
          !!pathname.match(`${portfolioDefaultRoute}$`)
        }
        onClick={toggleHeader}
      >
        {`${allTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        $pathname={pathname}
        to={brandRoute}
        $matchpath={!!pathname.match(brandRoute)}
        onClick={toggleHeader}
      >
        {`${brandTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        $pathname={pathname}
        to={digitalArtRoute}
        $matchpath={!!pathname.match(digitalArtRoute)}
        onClick={toggleHeader}
      >
        {`${digitalArtTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        $pathname={pathname}
        to={photographyColorRoute}
        $matchpath={!!pathname.match(photographyColorRoute)}
        onClick={toggleHeader}
      >
        {`${photographyColorTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        $pathname={pathname}
        to={photographyBwRoute}
        $matchpath={!!pathname.match(photographyBwRoute)}
        onClick={toggleHeader}
      >
        {photographyBwTitle}
      </PortfolioHeaderOption>

      <PortfolioHeaderOption
        $pathname={pathname}
        to={currentWebsitePathname}
        $matchpath={!!pathname.match(currentWebsitePathname)}
        onClick={toggleHeader}
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
  portfolioDefaultRoute: selectDefaultPortfolioRoute,
  portfolioAllRoute: selectAllPortfolioRoute,
  allTitle: selectAllTitle,
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
  isHeaderMorphingActive: selectIsHeaderMorphingActive,
});

const mapDispatchToProps = (dispatch) => ({
  toggleWebsiteLinkDropdown: () => dispatch(toggleWebsiteLinkDropdown()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PortfolioHeader)
);
