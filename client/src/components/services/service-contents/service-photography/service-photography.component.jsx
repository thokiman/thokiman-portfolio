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
} from './service-photography.styles';

export const ServicePhotography = ({
  photo: { title, description, photoStockItems, photographyIconItems },
  isSideBarActive,
}) => {
  return (
    <RightServiceContainerPg $issidebaractive={isSideBarActive}>
      <RightServiceContentPg>
        <ServiceUrlGeneralContent title={title} description={description} />
        <ServiceIconContent items={photographyIconItems} />
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
