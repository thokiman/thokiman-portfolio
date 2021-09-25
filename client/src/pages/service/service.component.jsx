import useWindowDimensions from 'components/commons/window-dimensions/window-dimensions.component';
import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import SpinnerLoading from '../../components/commons/spinner-loading/spinner-loading.component';
import { selectIsSideBarActive } from '../../redux/header/header.selectors.js';
import {
  selectArtService,
  selectArtServiceRoute,
  selectBigWaveImage,
  selectDevService,
  selectDevServiceRoute,
  selectEngineerRoute,
  selectEngineerService,
  selectPhotoService,
  selectPhotoServiceRoute,
  selectServiceRoute,
} from '../../redux/service/service.selectors';
import { ServiceContainer, ServiceIsNotActivated } from './service.styles';
import { measureServiceHeight } from './service.utils';

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
  location: { pathname },
  art,
  photo,
  engineer,
  dev,
  serviceRoute,
  engineerRoute,
  artRoute,
  devRoute,
  photoRoute,
  isSideBarActive,
  bigWaveImage,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <ServiceContainer
      $serviceHeight={measureServiceHeight(
        pathname,
        viewWidth,
        viewHeight,
        serviceRoute,
        engineerRoute,
        artRoute,
        devRoute,
        photoRoute
      )}
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
  engineerRoute: selectEngineerRoute,
  artRoute: selectArtServiceRoute,
  devRoute: selectDevServiceRoute,
  photoRoute: selectPhotoServiceRoute,
  isSideBarActive: selectIsSideBarActive,
  bigWaveImage: selectBigWaveImage,
});

export default connect(mapStateToProps)(Service);
