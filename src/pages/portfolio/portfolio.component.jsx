import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PageShell from "../../components/page-shell/page-shell.component";
import PortfolioContentContainer from "../../components/portfolio-content/portfolio-content-container";
import PortfolioHeader from "../../components/portfolio-header/portfolio-header.component";
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
import { PortfolioContainer } from "./portfolio.styles";

const Portfolio = ({
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
        render={() => <PortfolioContentContainer items={photographyBwItems} />}
      />
      <Route
        path={photographyColorRoute}
        render={() => (
          <PortfolioContentContainer items={photographyColorItems} />
        )}
      />
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
