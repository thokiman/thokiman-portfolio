import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectBrandRoute,
  selectBrandTitle,
  selectDigitalArtRoute,
  selectDigitalArtTitle,
  selectPhotographyBwRoute,
  selectPhotographyBwTitle,
  selectPhotographyColorRoute,
  selectPhotographyColorTitle,
  selectPortfolioRoute,
} from "../../redux/collection/collection.selectors";
import "./portfolio-header.styles.scss";

const PortfolioHeader = ({
  location: { pathname },
  match: { url },
  portfolioRoute,
  brandRoute,
  brandTitle,
  digitalArtRoute,
  digitalArtTitle,
  photographyBwTitle,
  photographyBwRoute,
  photographyColorTitle,
  photographyColorRoute,
}) => {
  return (
    <div className="options">
      <Link
        to={portfolioRoute}
        className={
          pathname.match(`${portfolioRoute}$`) ? "option-active" : "option"
        }
      >
        All
      </Link>
      <Link
        to={brandRoute}
        className={pathname.match(brandRoute) ? "option-active" : "option"}
      >
        {`${brandTitle}`}
      </Link>
      <Link
        to={digitalArtRoute}
        className={pathname.match(digitalArtRoute) ? "option-active" : "option"}
      >
        {`${digitalArtTitle}`}
      </Link>
      <Link
        to={photographyBwRoute}
        className={
          pathname.match(photographyBwRoute) ? "option-active" : "option"
        }
      >
        {photographyBwTitle}
      </Link>
      <Link
        to={photographyColorRoute}
        className={
          pathname.match(photographyColorRoute) ? "option-active" : "option"
        }
      >
        {`${photographyColorTitle}`}
      </Link>
    </div>
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
});

export default withRouter(connect(mapStateToProps)(PortfolioHeader));
