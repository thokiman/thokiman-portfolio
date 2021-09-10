import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import { selectEngineerService } from '../../../../redux/service/service.selectors';
import ServiceGeneralContent from '../../service-commons/service-general-content/service-general-content.component';
import ServiceIconContent from '../../service-commons/service-icon-content/service-icon-content.component';
import {
  RightServiceContainerEng,
  RightServiceContentEng,
} from './service-enginner.styles';

export const ServiceEngineer = ({
  isSideBarActive,
  engineer: { title, description, items },
}) => {
  return (
    <RightServiceContainerEng $issidebaractive={isSideBarActive}>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={'slide-out'}
      >
        <RightServiceContentEng>
          <ServiceGeneralContent title={title} description={description} />
          <ServiceIconContent items={items} />
        </RightServiceContentEng>
      </CSSTransitionGroup>
    </RightServiceContainerEng>
  );
};

const mapStateToProps = createStructuredSelector({
  engineer: selectEngineerService,
  isSideBarActive: selectIsSideBarActive,
});
export default connect(mapStateToProps)(ServiceEngineer);
