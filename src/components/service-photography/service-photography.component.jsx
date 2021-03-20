import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransitionGroup } from "react-transition-group";

import ServiceUrlGeneralContent from "../service-url-general-content/service-url-general-content.component";
import ServiceUrlIconContent from "../service-url-icon-content/service-url-icon-content.component";
import {
  RightServiceContainerPg,
  RightServiceContentPg,
} from "./service-photography.styles";
import { selectPhotoService } from "../../redux/service/service.selectors";

const ServicePhotography = ({ photo: { title, description, items } }) => {
  return (
    <RightServiceContainerPg>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <RightServiceContentPg>
          <ServiceUrlGeneralContent title={title} description={description} />
          <ServiceUrlIconContent items={items} />
        </RightServiceContentPg>
      </CSSTransitionGroup>
    </RightServiceContainerPg>
  );
};
const mapStateToProps = createStructuredSelector({
  photo: selectPhotoService,
});
export default connect(mapStateToProps)(ServicePhotography);
