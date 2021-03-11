import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../../components/page-shell/page-shell.component";
import PortfolioContainer from "../../components/portfolio-container/portfolio-container.component";
import PortfolioHeader from "../../components/portfolio-header/portfolio-header.component";

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
import "./portfolio.styles.scss";

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
}) => {
  return (
    <div className="collections-container">
      <PortfolioHeader />
      <Route
        exact
        path={portfolioRoute}
        render={() => <PortfolioContainer items={allItems} />}
      />
      <Route
        path={brandRoute}
        render={() => <PortfolioContainer items={brandItems} />}
      />
      <Route
        path={digitalArtRoute}
        render={() => <PortfolioContainer items={digitalArtItems} />}
      />
      <Route
        path={photographyBwRoute}
        render={() => <PortfolioContainer items={photographyBwItems} />}
      />
      <Route
        path={photographyColorRoute}
        render={() => <PortfolioContainer items={photographyColorItems} />}
      />
    </div>
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
});

export default connect(mapStateToProps)(PageShell(Portfolio));
