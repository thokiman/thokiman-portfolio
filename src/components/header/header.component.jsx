import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  HeaderPILogoContainer,
  HeaderPILogo,
  HeaderTextContainer,
  HeaderLink,
} from "./header.styles";
import PageShell from "../page-shell/page-shell.component";
import { selectAboutRoute } from "../../redux/about/about.selectors";
import { selectPortfolioRoute } from "../../redux/collection/collection.selectors";
import { selectServiceRoute } from "../../redux/service/service.selectors";
import { selectContactRoute } from "../../redux/contact/contact.selectors";
import SideBarIcon from "../sidebar-icon/sidebar-icon.component";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

const Header = ({
  location: { pathname },
  aboutRoute,
  portfolioRoute,
  serviceRoute,
  contactRoute,
  isSideBarHidden,
}) => {
  return (
    <>
      <SideBarIcon />
      <HeaderContainer $issidebarhidden={isSideBarHidden}>
        <HeaderPILogoContainer to="/" $issidebarhidden={isSideBarHidden}>
          <HeaderPILogo />
        </HeaderPILogoContainer>
        <HeaderTextContainer>
          <HeaderLink $matchpath={!!pathname.match(RegExp(/^\/$/))} to="/">
            Home
          </HeaderLink>

          <HeaderLink
            to={aboutRoute}
            $matchpath={!!pathname.match(RegExp(`${aboutRoute}+`))}
          >
            About
          </HeaderLink>

          <HeaderLink
            to={portfolioRoute}
            $matchpath={!!pathname.match(RegExp(`${portfolioRoute}+`))}
          >
            Portfolio
          </HeaderLink>

          <HeaderLink
            to={serviceRoute}
            $matchpath={!!pathname.match(RegExp(`${serviceRoute}+`))}
          >
            Service
          </HeaderLink>

          <HeaderLink
            to={contactRoute}
            $matchpath={pathname.match(RegExp(`${contactRoute}+`))}
          >
            Contact
          </HeaderLink>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  aboutRoute: selectAboutRoute,
  portfolioRoute: selectPortfolioRoute,
  serviceRoute: selectServiceRoute,
  contactRoute: selectContactRoute,
  isSideBarHidden: selectIsSideBarHidden,
});

export default withRouter(connect(mapStateToProps)(PageShell(Header)));
