import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransitionGroup } from "react-transition-group";

import {
  RightServiceContainerGd,
  RightServiceContentGd,
} from "./service-graphic-design.styles";
import ServiceGeneralContent from "../service-general-content/service-general-content.component";
import ServiceIconContent from "../service-icon-content/service-icon-content.component";
import { selectArtService } from "../../redux/service/service.selectors";

const ServiceGraphicDesign = ({ art: { title, description, items } }) => {
  return (
    <RightServiceContainerGd>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
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
});
export default connect(mapStateToProps)(ServiceGraphicDesign);
