import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import SpinnerLoading from './components/commons/spinner-loading/spinner-loading.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Footer from './components/footers/footer/footer.component';
import Header from './components/headers/header/header.component';
import SideBarHeader from './components/headers/sidebar-header/sidebar-header.component';
import { GlobalStyle } from './global.styles';
import { selectAboutRoute } from './redux/about/about.selectors';
import { selectPortfolioRoute } from './redux/collection/collection.selectors';
import { selectContactRoute } from './redux/contact/contact.selectors';
import { selectServiceRoute } from './redux/service/service.selectors';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const About = lazy(() => import('./pages/about/about.component'));
const Portfolio = lazy(() => import('./pages/portfolio/portfolio.component'));
const Service = lazy(() => import('./pages/service/service.component'));
const Contact = lazy(() => import('./pages/contact/contact.component'));

const App = ({ aboutRoute, serviceRoute, portfolioRoute, contactRoute }) => (
  <div>
    <GlobalStyle />
    <SideBarHeader />
    <Header />
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<SpinnerLoading />}>
          <Route exact path='/' component={HomePage} />
          <Route path={aboutRoute} component={About} />
          <Route path={serviceRoute} component={Service} />
          <Route path={portfolioRoute} component={Portfolio} />
          <Route path={contactRoute} component={Contact} />
        </Suspense>
      </ErrorBoundary>
    </Switch>
    <Footer />
  </div>
);

const mapStateToProps = createStructuredSelector({
  aboutRoute: selectAboutRoute,
  serviceRoute: selectServiceRoute,
  portfolioRoute: selectPortfolioRoute,
  contactRoute: selectContactRoute,
});

export default connect(mapStateToProps)(App);
