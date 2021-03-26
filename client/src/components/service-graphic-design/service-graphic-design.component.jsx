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
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

export const ServiceGraphicDesign = ({
  isSideBarHidden,
  art: { title, description, items },
}) => {
  return (
    <RightServiceContainerGd $issidebarhidden={isSideBarHidden}>
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
  isSideBarHidden: selectIsSideBarHidden,
});
export default connect(mapStateToProps)(ServiceGraphicDesign);
