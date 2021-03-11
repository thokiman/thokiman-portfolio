import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../page-shell/page-shell.component";
import { ReactComponent as BluePrickInklaimIcon } from "../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_blue.svg";
import "./header.styles.scss";
import { selectAboutRoute } from "../../redux/about/about.selectors";
import { selectPortfolioRoute } from "../../redux/collection/collection.selectors";
import { selectServiceRoute } from "../../redux/service/service.selectors";
import { selectContactRoute } from "../../redux/contact/contact.selectors";

const Header = ({
  location: { pathname },
  aboutRoute,
  portfolioRoute,
  serviceRoute,
  contactRoute,
}) => {
  return (
    <div className="header-container">
      <div className="header-pi-container">
        <Link to="/" className="header-pi-logo">
          <BluePrickInklaimIcon className="blue-pi-svg" />
        </Link>
      </div>
      <div className="header-text-container">
        <div className="header-link-container">
          <Link
            to="/"
            className={
              pathname.match(RegExp(/^\/$/))
                ? "header-link-active"
                : "header-link"
            }
          >
            Home
          </Link>
        </div>
        <div className="header-link-container">
          <Link
            to={aboutRoute}
            className={
              pathname.match(RegExp(`${aboutRoute}+`))
                ? "header-link-active"
                : "header-link"
            }
          >
            About
          </Link>
        </div>
        <div className="header-link-container">
          <Link
            to={portfolioRoute}
            className={
              pathname.match(RegExp(`${portfolioRoute}+`))
                ? "header-link-active"
                : "header-link"
            }
          >
            Portfolio
          </Link>
        </div>
        <div className="header-link-container">
          <Link
            to={serviceRoute}
            className={
              pathname.match(RegExp(`${serviceRoute}+`))
                ? "header-link-active"
                : "header-link"
            }
          >
            Service
          </Link>
        </div>
        <div className="header-link-container">
          <Link
            to={contactRoute}
            className={
              pathname.match(RegExp(`${contactRoute}+`))
                ? "header-link-active"
                : "header-link"
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  aboutRoute: selectAboutRoute,
  portfolioRoute: selectPortfolioRoute,
  serviceRoute: selectServiceRoute,
  contactRoute: selectContactRoute,
});

export default withRouter(connect(mapStateToProps)(PageShell(Header)));
