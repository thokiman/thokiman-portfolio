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
} from "../../redux/collection/collection.selectors";
import "./portfolio-header.styles.scss";

const PortfolioHeader = ({
  location: { pathname },
  match: { url },
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
        to={`${url}`}
        className={pathname.match(`${url}$`) ? "option-active" : "option"}
      >
        All
      </Link>
      <Link
        to={`${url}${brandRoute}`}
        className={
          pathname.match(`${url}${brandRoute}`) ? "option-active" : "option"
        }
      >
        {`${brandTitle}`}
      </Link>
      <Link
        to={`${url}${digitalArtRoute}`}
        className={
          pathname.match(`${url}${digitalArtRoute}`)
            ? "option-active"
            : "option"
        }
      >
        {`${digitalArtTitle}`}
      </Link>
      <Link
        to={`${url}${photographyBwRoute}`}
        className={
          pathname.match(`${url}${photographyBwRoute}`)
            ? "option-active"
            : "option"
        }
      >
        {`${photographyBwTitle}`}
      </Link>
      <Link
        to={`${url}${photographyColorRoute}`}
        className={
          pathname.match(`${url}${photographyColorRoute}`)
            ? "option-active"
            : "option"
        }
      >
        {`${photographyColorTitle}`}
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
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
