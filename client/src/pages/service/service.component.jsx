import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Footer from '../../components/footers/footer/footer.component';
import ServiceHomeContent from '../../components/services/service-contents/service-content/service-content.component';
import ServiceDev from '../../components/services/service-contents/service-dev/service-dev.component';
import ServiceEngineer from '../../components/services/service-contents/service-engineer/service-engineer.component';
import ServiceGraphicDesign from '../../components/services/service-contents/service-graphic-design/service-graphic-design.component';
import ServicePhotography from '../../components/services/service-contents/service-photography/service-photography.component';
import ServiceHeader from '../../components/services/service-header/service-header.component';
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
import {
  ServiceContainer,
  ServiceElement,
  ServiceIsNotActivated,
} from './service.styles';
import {
  measureServiceHeight,
  measureServiceIsNotActivated,
} from './service.utils.styles';

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
    <ServiceElement>
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
          <ServiceIsNotActivated
            $serviceisnotactivatedprops={measureServiceIsNotActivated(
              viewWidth,
              viewHeight
            )}
          >
            Serv
            <br />
            ice
          </ServiceIsNotActivated>
        ) : null}
        <ServiceHeader />
        <Switch>
          <Route exact path={serviceRoute} component={ServiceHomeContent} />
          <Route path={engineer.routeName} component={ServiceEngineer} />
          <Route path={dev.routeName} component={ServiceDev} />
          <Route path={art.routeName} component={ServiceGraphicDesign} />
          <Route path={photo.routeName} component={ServicePhotography} />
        </Switch>
      </ServiceContainer>
      <Footer />
    </ServiceElement>
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

export default withRouter(connect(mapStateToProps)(Service));
