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
import { ServiceContainer, ServiceSideBarHide } from "./service.styles";
import ServiceGraphicDesign from "../../components/service-graphic-design/service-graphic-design.component";
import {
  selectArtService,
  selectEngineerService,
  selectFullstackService,
  selectPhotoService,
  selectServiceRoute,
} from "../../redux/service/service.selectors";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors.js";
const Service = ({
  art,
  photo,
  engineer,
  fullstack,
  serviceRoute,
  isSideBarHidden,
}) => {
  return (
    <ServiceContainer $issidebarhidden={isSideBarHidden}>
      {isSideBarHidden ? (
        <ServiceSideBarHide>Serv ice</ServiceSideBarHide>
      ) : null}
      <ServiceHeader />
      <Switch>
        <Route exact path={serviceRoute} component={ServiceHomeContent} />
        <Route path={engineer.routeName} component={ServiceEngineer} />
        <Route
          path={fullstack.routeName}
          component={ServiceFullStackDeveloper}
        />
        <Route path={art.routeName} component={ServiceGraphicDesign} />
        <Route path={photo.routeName} component={ServicePhotography} />
      </Switch>
    </ServiceContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  art: selectArtService,
  photo: selectPhotoService,
  engineer: selectEngineerService,
  fullstack: selectFullstackService,
  serviceRoute: selectServiceRoute,
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(PageShell(Service));
