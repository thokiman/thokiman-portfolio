import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PageShell from "../../components/page-shell/page-shell.component";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";
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
} from "../../redux/collection/collection.selectors";
import { PortfolioContainer, PortfolioSideBarHide } from "./portfolio.styles";
import SpinnerLoading from "../../components/spinner-loading/spinner-loading.component";
const PortfolioContentContainer = lazy(() =>
  import("../../components/portfolio-content/portfolio-content-container")
);
const PortfolioHeader = lazy(() =>
  import("../../components/portfolio-header/portfolio-header.component")
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
