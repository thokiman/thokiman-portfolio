import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import { selectDevService } from '../../../../redux/service/service.selectors';
import ServiceGeneralContent from '../../service-commons/service-general-content/service-general-content.component';
import ServiceIconContent from '../../service-commons/service-icon-content/service-icon-content.component';
import {
  RightServiceContainerFS,
  RightServiceContentFS,
} from './service-dev.styles';
import { measureRightPageContainerFSProps } from './service-dev.utils.style';

export const ServiceDev = ({
  isSideBarActive,
  dev: {
    title,
    description,
    items: { backend, dataengineer, frontend },
  },
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <RightServiceContainerFS
      className='right-service-container'
      $issidebaractive={isSideBarActive}
      $measurerightpagecontainerfs={measureRightPageContainerFSProps(
        viewWidth,
        viewHeight
      )}
    >
      <RightServiceContentFS>
        <ServiceGeneralContent title={title} description={description} />
        <ServiceIconContent jobDetail='Front End Developer' items={frontend} />
        <ServiceIconContent jobDetail='Back End Developer' items={backend} />
        <ServiceIconContent jobDetail='Data Engineer' items={dataengineer} />
      </RightServiceContentFS>
    </RightServiceContainerFS>
  );
};
const mapStateToProps = createStructuredSelector({
  dev: selectDevService,
  isSideBarActive: selectIsSideBarActive,
});
export default connect(mapStateToProps)(ServiceDev);
