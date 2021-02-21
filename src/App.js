import React from "react";
import { Switch, Route } from "react-router-dom";

import { contact } from "./data.object/contacts.data";
import { services } from "./data.object/services.data";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import About from "./pages/about/about.component";
import Portfolio from "./pages/portfolio/portfolio.component";
import Service from "./pages/service/service.component";
import Contact from "./pages/contact/contact.component";
import PageShell from "./components/page-shell/page-shell.component";
import SmoothScroller from "./components/scroller/scroller.component";
import Footer from "./components/footer/footer.component.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contact,
      services,
    };
  }
  render() {
    return (
      <SmoothScroller>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={PageShell(HomePage)} />
            <Route path="/about" component={PageShell(About)} />
            <Route path="/portfolio" component={PageShell(Portfolio)} />
            <Route path="/service" component={PageShell(Service)} />
            <Route path="/contact" component={PageShell(Contact)} />
          </Switch>
          <Footer socialIcon={contact.items.socialIcon} />
        </div>
      </SmoothScroller>
    );
  }
}

export default App;
