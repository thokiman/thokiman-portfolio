import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import { selectArtService } from '../../../../redux/service/service.selectors';
import ServiceGeneralContent from '../../service-commons/service-general-content/service-general-content.component';
import ServiceIconContent from '../../service-commons/service-icon-content/service-icon-content.component';
import {
  RightServiceContainerGd,
  RightServiceContentGd,
} from './service-graphic-design.styles';
import { measureRightPageContainerGdProps } from './service-graphic-design.utils.style';

export const ServiceGraphicDesign = ({
  isSideBarActive,
  art: { title, description, items },
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <RightServiceContainerGd
      $measurerightpagecontainergd={measureRightPageContainerGdProps(
        viewWidth,
        viewHeight
      )}
      className='right-service-container'
      $issidebaractive={isSideBarActive}
    >
      <RightServiceContentGd>
        <ServiceGeneralContent title={title} description={description} />
        <ServiceIconContent items={items} />
      </RightServiceContentGd>
    </RightServiceContainerGd>
  );
};
const mapStateToProps = createStructuredSelector({
  art: selectArtService,
  isSideBarActive: selectIsSideBarActive,
});
export default connect(mapStateToProps)(ServiceGraphicDesign);
