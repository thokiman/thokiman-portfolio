import {
  exit,
  play,
} from 'components/commons/page-transition/page-transition.component';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { selectHomepageRoute } from 'redux/homepage/homepage.selectors';
import { createStructuredSelector } from 'reselect';
import Header from './components/headers/header/header.component';
import SideBarHeader from './components/headers/sidebar-header/sidebar-header.component';
import { AppContainer, Ball, GlobalStyle } from './global.styles';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import Homepage from './pages/homepage/homepage.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Service from './pages/service/service.component';
import { selectAboutRoute } from './redux/about/about.selectors';
import {
  selectAllPortfolioRoute,
  selectBrandRoute,
  selectDefaultPortfolioRoute,
  selectDigitalArtRoute,
  selectPhotographyBwRoute,
  selectPhotographyColorRoute,
  selectWebsiteRoute,
} from './redux/collection/collection.selectors';
import { selectContactRoute } from './redux/contact/contact.selectors';
import { selectServiceRoute } from './redux/service/service.selectors';

const App = ({
  aboutRoute,
  serviceRoute,
  portfolioDefaultRoute,
  contactRoute,
  homepageRoute,
  portfolioAllRoute,
  brandRoute,
  digitalArtRoute,
  photographyColorRoute,
  photographyBwRoute,
  websiteRoute,
  location: { pathname },
}) => {
  return (
    <Route
      render={({ location }) => {
        const pathStacker = {
          aboutRoute,
          serviceRoute,
          portfolioDefaultRoute,
          contactRoute,
          homepageRoute,
          portfolioAllRoute,
          brandRoute,
          digitalArtRoute,
          photographyColorRoute,
          photographyBwRoute,
          websiteRoute,
        };
        const { key, pathname } = location;

        const timeout = { enter: 10000, exit: 10000 };

        return (
          <AppContainer>
            <Ball />
            <GlobalStyle />
            <SideBarHeader />
            <Header />
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                enter={true}
                exit={true}
                onEnter={(node, appears) =>
                  play(pathname, node, appears, pathStacker)
                }
                onExit={(node, appears) =>
                  exit(pathname, node, appears, pathStacker)
                }
                timeout={timeout}
              >
                <Switch location={location}>
                  <Route exact path={homepageRoute} component={Homepage} />
                  <Route path={aboutRoute} component={About} />
                  <Route path={serviceRoute} component={Service} />
                  <Route path={portfolioDefaultRoute} component={Portfolio} />
                  <Route path={contactRoute} component={Contact} />
                </Switch>
              </Transition>
            </TransitionGroup>
          </AppContainer>
        );
      }}
    />
  );
};
const mapStateToProps = createStructuredSelector({
  aboutRoute: selectAboutRoute,
  serviceRoute: selectServiceRoute,
  portfolioDefaultRoute: selectDefaultPortfolioRoute,
  contactRoute: selectContactRoute,
  homepageRoute: selectHomepageRoute,
  portfolioAllRoute: selectAllPortfolioRoute,
  brandRoute: selectBrandRoute,
  digitalArtRoute: selectDigitalArtRoute,
  photographyColorRoute: selectPhotographyColorRoute,
  photographyBwRoute: selectPhotographyBwRoute,
  websiteRoute: selectWebsiteRoute,
});

export default withRouter(connect(mapStateToProps)(App));
