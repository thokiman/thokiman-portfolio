import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import SpinnerLoading from '../../components/commons/spinner-loading/spinner-loading.component';
import {
  selectAllItems,
  selectBrandItems,
  selectBrandRoute,
  selectDigitalArtItems,
  selectDigitalArtRoute,
  selectPhotographyBwItems,
  selectPhotographyBwRoute,
  selectPhotographyColorItems,
  selectPhotographyColorRoute,
  selectPortfolioRoute,
  selectWebsiteItems,
  selectWebsiteRoute,
} from '../../redux/collection/collection.selectors';
import { selectIsSideBarActive } from '../../redux/header/header.selectors';
import {
  PortfolioContainer,
  PortfolioIsNotActivated,
} from './portfolio.styles';

const PortfolioWebsite = lazy(() =>
  import(
    '../../components/collections/portfolio-contents/portfolio-website/portfolio-website.component'
  )
);
const PortfolioContentContainer = lazy(() =>
  import(
    '../../components/collections/portfolio-contents/portfolio-content/portfolio-content-container.component'
  )
);
const PortfolioContentHeader = lazy(() =>
  import(
    '../../components/collections/portfolio-content-header/portfolio-header.component'
  )
);

export const Portfolio = ({
  portfolioRoute,
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
  return (
    <PortfolioContainer $issidebaractive={isSideBarActive}>
      <Suspense fallback={<SpinnerLoading />}>
        {isSideBarActive ? (
          <PortfolioIsNotActivated>
            Port
            <br />
            folio
          </PortfolioIsNotActivated>
        ) : null}
        <PortfolioContentHeader />

        <Route
          exact
          path={portfolioRoute}
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
      </Suspense>
    </PortfolioContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  portfolioRoute: selectPortfolioRoute,
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
