import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import About from "./pages/about/about.component";
import Portfolio from "./pages/portfolio/portfolio.component";
import Service from "./pages/service/service.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component.jsx";
import "./App.styles.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
