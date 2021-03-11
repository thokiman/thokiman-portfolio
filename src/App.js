import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import About from "./pages/about/about.component";
import Portfolio from "./pages/portfolio/portfolio.component";
import Service from "./pages/service/service.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component.jsx";
import "./App.styles.scss";
import { selectAboutRoute } from "./redux/about/about.selectors";
import { selectServiceRoute } from "./redux/service/service.selectors";
import { selectPortfolioRoute } from "./redux/collection/collection.selectors";
import { selectContactRoute } from "./redux/contact/contact.selectors";

const App = ({ aboutRoute, serviceRoute, portfolioRoute, contactRoute }) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={aboutRoute} component={About} />
        <Route path={serviceRoute} component={Service} />
        <Route path={portfolioRoute} component={Portfolio} />
        <Route path={contactRoute} component={Contact} />
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
