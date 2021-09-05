import React from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import { createStructuredSelector } from "reselect";
import { selectIsSideBarHidden } from "../../../../redux/header/header.selectors";
import { selectDevService } from "../../../../redux/service/service.selectors";
import ServiceGeneralContent from "../../service-commons/service-general-content/service-general-content.component";
import ServiceIconContent from "../../service-commons/service-icon-content/service-icon-content.component";
import {
  RightServiceContainerFS,
  RightServiceContentFS
} from "./service-dev.styles";


export const ServiceDev = ({
  isSideBarHidden,
  dev: { title, description, items: {
    backend, dataengineer, frontend
  } },
}) => {

  return (
    <RightServiceContainerFS $issidebarhidden={isSideBarHidden}>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <RightServiceContentFS>
          <ServiceGeneralContent title={title} description={description} />
          <ServiceIconContent jobDetail="Front End Developer" items={frontend} />
          <ServiceIconContent jobDetail="Back End Developer" items={backend} />
          <ServiceIconContent jobDetail="Data Engineer" items={dataengineer} />
        </RightServiceContentFS>
      </CSSTransitionGroup>
    </RightServiceContainerFS>
  );
};
const mapStateToProps = createStructuredSelector({
  dev: selectDevService,
  isSideBarHidden: selectIsSideBarHidden,
});
export default connect(mapStateToProps)(ServiceDev);
