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
} from "../../redux/collection/collection.selectors";
import "./portfolio.styles.scss";

const Portfolio = ({
  match: { url },
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
        path={`${url}`}
        render={() => <PortfolioContainer items={allItems} />}
      />
      <Route
        path={`${url}${brandRoute}`}
        render={() => <PortfolioContainer items={brandItems} />}
      />
      <Route
        path={`${url}${digitalArtRoute}`}
        render={() => <PortfolioContainer items={digitalArtItems} />}
      />
      <Route
        path={`${url}${photographyBwRoute}`}
        render={() => <PortfolioContainer items={photographyBwItems} />}
      />
      <Route
        path={`${url}${photographyColorRoute}`}
        render={() => <PortfolioContainer items={photographyColorItems} />}
      />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
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

export default PageShell(connect(mapStateToProps)(Portfolio));
