import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import { selectArtService } from '../../../../redux/service/service.selectors';
import ServiceGeneralContent from '../../service-commons/service-general-content/service-general-content.component';
import ServiceIconContent from '../../service-commons/service-icon-content/service-icon-content.component';
import {
  RightServiceContainerGd,
  RightServiceContentGd,
} from './service-graphic-design.styles';

export const ServiceGraphicDesign = ({
  isSideBarActive,
  art: { title, description, items },
}) => {
  return (
    <RightServiceContainerGd $issidebaractive={isSideBarActive}>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={'slide-out'}
      >
        <RightServiceContentGd>
          <ServiceGeneralContent title={title} description={description} />
          <ServiceIconContent items={items} />
        </RightServiceContentGd>
      </CSSTransitionGroup>
    </RightServiceContainerGd>
  );
};
const mapStateToProps = createStructuredSelector({
  art: selectArtService,
  isSideBarActive: selectIsSideBarActive,
});
export default connect(mapStateToProps)(ServiceGraphicDesign);
