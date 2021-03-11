import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../../components/page-shell/page-shell.component";
import ServiceHomeContent from "../../components/service-content/service-content.component";
import ServiceHeader from "../../components/service-header/service-header.component";
import ServiceEngineer from "../../components/service-engineer/service-engineer.component";
import ServicePhotography from "../../components/service-photography/service-photography.component";
import ServiceFullStackDeveloper from "../../components/service-full-stack-developer/service-full-stack-developer.component";
import "./service.styles.scss";
import ServiceGraphicDesign from "../../components/service-graphic-design/service-graphic-design.component";
import {
  selectArtService,
  selectEngineerService,
  selectFullstackService,
  selectPhotoService,
  selectServiceRoute,
} from "../../redux/service/service.selectors";

const Service = ({ art, photo, engineer, fullstack, serviceRoute }) => {
  return (
    <div className="service-container">
      <ServiceHeader />
      <Switch>
        <Route
          exact
          path={serviceRoute}
          render={() => <ServiceHomeContent />}
        />
        <Route
          path={engineer.routeName}
          render={() => <ServiceEngineer engineer={engineer} />}
        />
        <Route
          path={fullstack.routeName}
          render={() => <ServiceFullStackDeveloper fullstack={fullstack} />}
        />
        <Route
          path={art.routeName}
          render={() => <ServiceGraphicDesign art={art} />}
        />
        <Route
          path={photo.routeName}
          render={() => <ServicePhotography photo={photo} />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  art: selectArtService,
  photo: selectPhotoService,
  engineer: selectEngineerService,
  fullstack: selectFullstackService,
  serviceRoute: selectServiceRoute,
});

export default connect(mapStateToProps)(PageShell(Service));
