import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PageShell from '../../components/commons/page-shell/page-shell.component';
import SpinnerLoading from '../../components/commons/spinner-loading/spinner-loading.component';
import { selectIsSideBarActive } from '../../redux/header/header.selectors.js';
import {
  selectArtService,
  selectBigWaveImage,
  selectDevService,
  selectEngineerService,
  selectPhotoService,
  selectServiceRoute,
} from '../../redux/service/service.selectors';
import { ServiceContainer, ServiceIsNotActivated } from './service.styles';

const ServiceHomeContent = lazy(() =>
  import(
    '../../components/services/service-contents/service-content/service-content.component'
  )
);

const ServiceGraphicDesign = lazy(() =>
  import(
    '../../components/services/service-contents/service-graphic-design/service-graphic-design.component'
  )
);
const ServiceHeader = lazy(() =>
  import('../../components/services/service-header/service-header.component')
);
const ServiceEngineer = lazy(() =>
  import(
    '../../components/services/service-contents/service-engineer/service-engineer.component'
  )
);
const ServicePhotography = lazy(() =>
  import(
    '../../components/services/service-contents/service-photography/service-photography.component'
  )
);
const ServiceDev = lazy(() =>
  import(
    '../../components/services/service-contents/service-dev/service-dev.component'
  )
);

export const Service = ({
  art,
  photo,
  engineer,
  dev,
  serviceRoute,
  isSideBarActive,
  bigWaveImage,
}) => {
  return (
    <ServiceContainer
      $issidebaractive={isSideBarActive}
      $bigWaveImage={bigWaveImage}
    >
      {isSideBarActive ? (
        <ServiceIsNotActivated>
          Serv
          <br />
          ice
        </ServiceIsNotActivated>
      ) : null}
      <ServiceHeader />
      <Switch>
        <Suspense fallback={<SpinnerLoading />}>
          <Route exact path={serviceRoute} component={ServiceHomeContent} />
          <Route path={engineer.routeName} component={ServiceEngineer} />
          <Route path={dev.routeName} component={ServiceDev} />
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
  dev: selectDevService,
  serviceRoute: selectServiceRoute,
  isSideBarActive: selectIsSideBarActive,
  bigWaveImage: selectBigWaveImage,
});

export default connect(mapStateToProps)(PageShell(Service));
