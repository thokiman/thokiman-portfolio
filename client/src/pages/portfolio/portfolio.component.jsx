import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PortfolioContentHeader from '../../components/collections/portfolio-content-header/portfolio-header.component';
import PortfolioContentContainer from '../../components/collections/portfolio-contents/portfolio-content/portfolio-content-container.component';
import PortfolioWebsite from '../../components/collections/portfolio-contents/portfolio-website/portfolio-website.component';
import {
  selectAllItems,
  selectAllPortfolioRoute,
  selectBrandItems,
  selectBrandRoute,
  selectDefaultPortfolioRoute,
  selectDigitalArtItems,
  selectDigitalArtRoute,
  selectPhotographyBwItems,
  selectPhotographyBwRoute,
  selectPhotographyColorItems,
  selectPhotographyColorRoute,
  selectWebsiteItems,
  selectWebsiteRoute,
} from '../../redux/collection/collection.selectors';
import { selectIsSideBarActive } from '../../redux/header/header.selectors';
import {
  PortfolioContainer,
  PortfolioElement,
  PortfolioIsNotActivated,
} from './portfolio.styles';
import { measurePortfolioIsNotActivated } from './portfolio.utils.styles';

export const Portfolio = ({
  portfolioDefaultRoute,
  portfolioAllRoute,
  allItems,
  brandItems,
  brandRoute,
  digitalArtItems,
  digitalArtRoute,
  photographyBwItems,
  photographyBwRoute,
  photographyColorItems,
  photographyColorRoute,
  websiteItems,
  websiteRoute,
  isSideBarActive,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <PortfolioElement>
      <PortfolioContainer $issidebaractive={isSideBarActive}>
        {isSideBarActive ? (
          <PortfolioIsNotActivated
            $portfolioisnotactivatedprops={measurePortfolioIsNotActivated(
              viewWidth,
              viewHeight
            )}
          >
            Port
            <br />
            folio
          </PortfolioIsNotActivated>
        ) : null}

        <PortfolioContentHeader />
        <Route
          exact
          path={portfolioDefaultRoute}
          render={() => <PortfolioContentContainer items={allItems} />}
        />
        <Route
          path={portfolioAllRoute}
          render={() => <PortfolioContentContainer items={allItems} />}
        />
        <Route
          path={brandRoute}
          render={() => <PortfolioContentContainer items={brandItems} />}
        />
        <Route
          path={digitalArtRoute}
          render={() => <PortfolioContentContainer items={digitalArtItems} />}
        />
        <Route
          path={photographyBwRoute}
          render={() => (
            <PortfolioContentContainer items={photographyBwItems} />
          )}
        />
        <Route
          path={photographyColorRoute}
          render={() => (
            <PortfolioContentContainer items={photographyColorItems} />
          )}
        />
        <Route
          path={websiteRoute}
          render={() => <PortfolioWebsite websiteItems={websiteItems} />}
        />
      </PortfolioContainer>
    </PortfolioElement>
  );
};
const mapStateToProps = createStructuredSelector({
  portfolioDefaultRoute: selectDefaultPortfolioRoute,
  portfolioAllRoute: selectAllPortfolioRoute,
  allItems: selectAllItems,
  brandItems: selectBrandItems,
  brandRoute: selectBrandRoute,
  digitalArtItems: selectDigitalArtItems,
  digitalArtRoute: selectDigitalArtRoute,
  photographyBwItems: selectPhotographyBwItems,
  photographyBwRoute: selectPhotographyBwRoute,
  photographyColorItems: selectPhotographyColorItems,
  photographyColorRoute: selectPhotographyColorRoute,
  websiteItems: selectWebsiteItems,
  websiteRoute: selectWebsiteRoute,
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(Portfolio);
