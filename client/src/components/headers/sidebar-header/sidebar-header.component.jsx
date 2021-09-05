import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectAboutRoute } from "../../../redux/about/about.selectors";
import { selectPortfolioRoute } from "../../../redux/collection/collection.selectors";
import { selectContactRoute } from "../../../redux/contact/contact.selectors";
import { selectIsSideBarHidden } from "../../../redux/header/header.selectors";
import { selectServiceRoute } from "../../../redux/service/service.selectors";
import {
  SideBarHeaderContainer, SideBarHeaderLink, SideBarHeaderTextContainer
} from "./sidebar-header.styles";


export const SideBarHeader = ({
  isSideBarHidden,
  location: { pathname },
  aboutRoute,
  portfolioRoute,
  serviceRoute,
  contactRoute,
}) => {
  const homeText = "Home";
  const AboutText = "About";
  const portfolioText = "Portfolio";
  const serviceText = "Service";
  const contactText = "Contact";
  return (
    <SideBarHeaderContainer $issidebarhidden={isSideBarHidden}>
      <SideBarHeaderTextContainer>
        <SideBarHeaderLink $matchpath={!!pathname.match(RegExp(/^\/$/))} to="/">
          {homeText}
        </SideBarHeaderLink>
        <SideBarHeaderLink
          to={aboutRoute}
          $matchpath={!!pathname.match(RegExp(`${ aboutRoute }+`))}
        >
          {AboutText}
        </SideBarHeaderLink>

        <SideBarHeaderLink
          to={portfolioRoute}
          $matchpath={!!pathname.match(RegExp(`${ portfolioRoute }+`))}
        >
          {portfolioText}
        </SideBarHeaderLink>
        <SideBarHeaderLink
          to={serviceRoute}
          $matchpath={!!pathname.match(RegExp(`${ serviceRoute }+`))}
        >
          {serviceText}
        </SideBarHeaderLink>
        <SideBarHeaderLink
          to={contactRoute}
          $matchpath={pathname.match(RegExp(`${ contactRoute }+`))}
        >
          {contactText}
        </SideBarHeaderLink>
      </SideBarHeaderTextContainer>
    </SideBarHeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarHidden,
  aboutRoute: selectAboutRoute,
  portfolioRoute: selectPortfolioRoute,
  serviceRoute: selectServiceRoute,
  contactRoute: selectContactRoute,
});

export default withRouter(connect(mapStateToProps)(SideBarHeader));
