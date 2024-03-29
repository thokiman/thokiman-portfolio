import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { selectIsSideBarActive } from 'redux/header/header.selectors';
import { createStructuredSelector } from 'reselect';
import { selectPhotoService } from '../../../../redux/service/service.selectors';
import ServiceIconContent from '../../service-commons/service-icon-content/service-icon-content.component';
import ServiceUrlGeneralContent from '../../service-commons/service-url-general-content/service-url-general-content.component';
import ServiceUrlIconContent from '../../service-commons/service-url-icon-content/service-url-icon-content.component';
import {
  RightServiceContainerPg,
  RightServiceContentPg,
  ServiceStockPhotos,
} from './service-photography.styles';
import { measureRightPageContainerPgProps } from './service-photography.utils.style';

export const ServicePhotography = ({
  photo: { title, description, photoStockItems, photographyIconItems },
  isSideBarActive,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <RightServiceContainerPg
      $measureRightPageContainerPg={measureRightPageContainerPgProps(
        viewWidth,
        viewHeight
      )}
      className='right-service-container'
      $issidebaractive={isSideBarActive}
    >
      <RightServiceContentPg>
        <ServiceUrlGeneralContent title={title} description={description} />
        <ServiceIconContent items={photographyIconItems} />
        <ServiceStockPhotos className='service-stock-photos-title'>
          Stock Photos
        </ServiceStockPhotos>
        <ServiceUrlIconContent items={photoStockItems} />
      </RightServiceContentPg>
    </RightServiceContainerPg>
  );
};
const mapStateToProps = createStructuredSelector({
  photo: selectPhotoService,
  isSideBarActive: selectIsSideBarActive,
});
export default connect(mapStateToProps)(ServicePhotography);
