import React from "react";
import { withRouter } from "react-router-dom";
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
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";
import {
  PortfolioHeaderOptions,
  PortfolioHeaderOption,
} from "./portfolio-header.styles";

export const PortfolioHeader = ({
  location: { pathname },
  portfolioRoute,
  brandRoute,
  brandTitle,
  digitalArtRoute,
  digitalArtTitle,
  photographyBwTitle,
  photographyBwRoute,
  photographyColorTitle,
  photographyColorRoute,
  isSideBarHidden,
}) => {
  return (
    <PortfolioHeaderOptions
      className="options"
      $issidebarhidden={isSideBarHidden}
    >
      <PortfolioHeaderOption
        to={portfolioRoute}
        $matchpath={!!pathname.match(`${portfolioRoute}$`)}
      >
        All
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        to={brandRoute}
        $matchpath={!!pathname.match(brandRoute)}
      >
        {`${brandTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        to={digitalArtRoute}
        $matchpath={!!pathname.match(digitalArtRoute)}
      >
        {`${digitalArtTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        to={photographyColorRoute}
        $matchpath={!!pathname.match(photographyColorRoute)}
      >
        {`${photographyColorTitle}`}
      </PortfolioHeaderOption>
      <PortfolioHeaderOption
        to={photographyBwRoute}
        $matchpath={!!pathname.match(photographyBwRoute)}
      >
        {photographyBwTitle}
      </PortfolioHeaderOption>
    </PortfolioHeaderOptions>
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
  isSideBarHidden: selectIsSideBarHidden,
});

export default withRouter(connect(mapStateToProps)(PortfolioHeader));
