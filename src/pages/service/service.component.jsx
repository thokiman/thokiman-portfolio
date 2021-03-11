import React from "react";
import { Switch, Route } from "react-router-dom";

import PageShell from "../../components/page-shell/page-shell.component";
import ServiceHomeContent from "../../components/service-content/service-content.component";
import ServiceHeader from "../../components/service-header/service-header.component";
import ServiceEngineer from "../../components/service-engineer/service-engineer.component";
import ServicePhotography from "../../components/service-photography/service-photography.component";
import ServiceFullStackDeveloper from "../../components/service-full-stack-developer/service-full-stack-developer.component";
import { service } from "../../data.object/service.data";
import "./service.styles.scss";
import ServiceGraphicDesign from "../../components/service-graphic-design/service-graphic-design.component";

const Service = ({ match: { url } }) => {
  const { art, photo, engineer, fullstack } = service;
  return (
    <div className="service-container">
      <ServiceHeader />
      <Switch>
        <Route exact path={`${url}`} render={() => <ServiceHomeContent />} />
        <Route
          path={`${url}/engineer`}
          render={() => <ServiceEngineer engineer={engineer} />}
        />
        <Route
          path={`${url}/fullstack`}
          render={() => <ServiceFullStackDeveloper fullstack={fullstack} />}
        />
        <Route
          path={`${url}/visualart`}
          render={() => <ServiceGraphicDesign art={art} />}
        />
        <Route
          path={`${url}/photo`}
          render={() => <ServicePhotography photo={photo} />}
        />
      </Switch>
    </div>
  );
};

export default PageShell(Service);
