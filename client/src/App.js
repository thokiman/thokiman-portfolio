import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";
import { selectAboutRoute } from "./redux/about/about.selectors";
import { selectServiceRoute } from "./redux/service/service.selectors";
import { selectPortfolioRoute } from "./redux/collection/collection.selectors";
import { selectContactRoute } from "./redux/contact/contact.selectors";
import SpinnerLoading from "./components/spinner-loading/spinner-loading.component.jsx";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component.jsx";
import SideBarHeader from "./components/sidebar-header/sidebar-header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const About = lazy(() => import("./pages/about/about.component"));
const Portfolio = lazy(() => import("./pages/portfolio/portfolio.component"));
const Service = lazy(() => import("./pages/service/service.component"));
const Contact = lazy(() => import("./pages/contact/contact.component"));

const App = ({ aboutRoute, serviceRoute, portfolioRoute, contactRoute }) => {
  return (
    <div>
      <GlobalStyle />
      <SideBarHeader />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<SpinnerLoading />}>
            <Route exact path="/" component={HomePage} />
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
};

const mapStateToProps = createStructuredSelector({
  aboutRoute: selectAboutRoute,
  serviceRoute: selectServiceRoute,
  portfolioRoute: selectPortfolioRoute,
  contactRoute: selectContactRoute,
});

export default connect(mapStateToProps)(App);
