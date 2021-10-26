import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import { selectEngineerService } from '../../../../redux/service/service.selectors';
import ServiceGeneralContent from '../../service-commons/service-general-content/service-general-content.component';
import ServiceIconContent from '../../service-commons/service-icon-content/service-icon-content.component';
import { measureRightPageContainerEngProps } from './service-engineer.utils.style';
import {
  RightServiceContainerEng,
  RightServiceContentEng,
} from './service-enginner.styles';

export const ServiceEngineer = ({
  isSideBarActive,
  engineer: { title, description, items },
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <RightServiceContainerEng
      className='right-service-container'
      $issidebaractive={isSideBarActive}
      $measurerightpagecontainereng={measureRightPageContainerEngProps(
        viewWidth,
        viewHeight
      )}
    >
      <RightServiceContentEng>
        <ServiceGeneralContent title={title} description={description} />
        <ServiceIconContent items={items} />
      </RightServiceContentEng>
    </RightServiceContainerEng>
  );
};

const mapStateToProps = createStructuredSelector({
  engineer: selectEngineerService,
  isSideBarActive: selectIsSideBarActive,
});
export default connect(mapStateToProps)(ServiceEngineer);
