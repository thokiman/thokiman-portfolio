import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../page-shell/page-shell.component";
import { selectContactRoute } from "../../redux/contact/contact.selectors";
import FooterContact from "../footer-contact/footer-contact.component";
import FooterGeneral from "../footer-general/footer-general.component";
import { selectPortfolioRoute } from "../../redux/collection/collection.selectors";
import {
  selectAboutRoute,
  selectTimelineCareerRoute,
} from "../../redux/about/about.selectors";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

export const Footer = ({
  location: { pathname },
  contactRoute,
  portfolioRoute,
  isSideBarHidden,
}) => {
  if (pathname.match(`^${contactRoute}+`)) {
    return <FooterContact $isssidebarhidden={isSideBarHidden} />;
  } else if (pathname.match(`^${portfolioRoute}+`)) {
    return null;
  } else {
    return <FooterGeneral />;
  }
};

const mapStateToProps = createStructuredSelector({
  contactRoute: selectContactRoute,
  portfolioRoute: selectPortfolioRoute,
  aboutRoute: selectAboutRoute,
  timelineRoute: selectTimelineCareerRoute,
  isSideBarHidden: selectIsSideBarHidden,
});
export default withRouter(connect(mapStateToProps)(PageShell(Footer)));
