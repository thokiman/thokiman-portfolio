import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import PageShell from '../../components/commons/page-shell/page-shell.component';
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
  selectPortfolioRoute
} from "../../redux/collection/collection.selectors";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";
import { PortfolioContainer, PortfolioSideBarHide } from "./portfolio.styles";

const PortfolioContentContainer = lazy(() =>
  import("../../components/collections/portfolio-contents/portfolio-content/portfolio-content-container")
);
const PortfolioHeader = lazy(() =>
  import("../../components/collections/portfolio-header/portfolio-header.component")
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
  isSideBarHidden,
}) => {
  return (
    <PortfolioContainer $issidebarhidden={isSideBarHidden}>
      <Suspense fallback={<SpinnerLoading />}>
        {isSideBarHidden ? (
          <PortfolioSideBarHide>
            Port
            <br />
            folio
          </PortfolioSideBarHide>
        ) : null}
        <PortfolioHeader />
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
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(PageShell(Portfolio));
