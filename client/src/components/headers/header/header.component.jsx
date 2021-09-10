import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectAboutRoute } from '../../../redux/about/about.selectors';
import { selectPortfolioRoute } from '../../../redux/collection/collection.selectors';
import { selectContactRoute } from '../../../redux/contact/contact.selectors';
import { selectIsSideBarActive } from '../../../redux/header/header.selectors';
import { selectServiceRoute } from '../../../redux/service/service.selectors';
import PageShell from '../../commons/page-shell/page-shell.component';
import SideBarIcon from '../sidebar-icon/sidebar-icon.component';
import {
  HeaderContainer,
  HeaderLink,
  HeaderPILogo,
  HeaderPILogoContainer,
  HeaderTextContainer,
} from './header.styles';

export const Header = ({
  location: { pathname },
  aboutRoute,
  portfolioRoute,
  serviceRoute,
  contactRoute,
  isSideBarActive,
}) => {
  return (
    <>
      <SideBarIcon />
      <HeaderContainer
        $issidebaractive={isSideBarActive}
        $matchpath={!!pathname.match(RegExp(`${portfolioRoute}+`))}
      >
        <HeaderPILogoContainer to='/' $issidebaractive={isSideBarActive}>
          <HeaderPILogo />
        </HeaderPILogoContainer>
        <HeaderTextContainer>
          <HeaderLink $matchpath={!!pathname.match(RegExp(/^\/$/))} to='/'>
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
  isSideBarActive: selectIsSideBarActive,
});

export default withRouter(connect(mapStateToProps)(PageShell(Header)));
