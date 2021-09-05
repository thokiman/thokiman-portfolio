import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectAboutRoute,
  selectTimelineCareerRoute
} from "../../../redux/about/about.selectors";
import { selectPortfolioRoute } from "../../../redux/collection/collection.selectors";
import { selectContactRoute } from "../../../redux/contact/contact.selectors";
import { selectIsSideBarHidden } from "../../../redux/header/header.selectors";
import PageShell from "../../commons/page-shell/page-shell.component";
import FooterContact from "../footer-contact/footer-contact.component";
import FooterGeneral from "../footer-general/footer-general.component";


export const Footer = ({
  location: { pathname },
  contactRoute,
  portfolioRoute,
  isSideBarHidden,
}) => {
  if (pathname.match(`^${ contactRoute }+`)) {
    return <FooterContact $isssidebarhidden={isSideBarHidden} />;
  } else if (pathname.match(`^${ portfolioRoute }+`)) {
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
