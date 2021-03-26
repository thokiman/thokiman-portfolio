import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../../components/page-shell/page-shell.component";
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
import SpinnerLoading from "../../components/spinner-loading/spinner-loading.component";
const ServiceHomeContent = lazy(() =>
  import("../../components/service-content/service-content.component")
);
const ServiceHeader = lazy(() =>
  import("../../components/service-header/service-header.component")
);
const ServiceEngineer = lazy(() =>
  import("../../components/service-engineer/service-engineer.component")
);
const ServicePhotography = lazy(() =>
  import("../../components/service-photography/service-photography.component")
);
const ServiceFullStackDeveloper = lazy(() =>
  import(
    "../../components/service-full-stack-developer/service-full-stack-developer.component"
  )
);

export const Service = ({
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
        <ServiceSideBarHide>
          Serv
          <br />
          ice
        </ServiceSideBarHide>
      ) : null}
      <ServiceHeader />
      <Switch>
        <Suspense fallback={<SpinnerLoading />}>
          <Route exact path={serviceRoute} component={ServiceHomeContent} />
          <Route path={engineer.routeName} component={ServiceEngineer} />
          <Route
            path={fullstack.routeName}
            component={ServiceFullStackDeveloper}
          />
          <Route path={art.routeName} component={ServiceGraphicDesign} />
          <Route path={photo.routeName} component={ServicePhotography} />
        </Suspense>
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
