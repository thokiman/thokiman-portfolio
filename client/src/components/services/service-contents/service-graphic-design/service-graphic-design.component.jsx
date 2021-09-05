import React from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import { createStructuredSelector } from "reselect";
import { selectIsSideBarHidden } from "../../../../redux/header/header.selectors";
import { selectArtService } from "../../../../redux/service/service.selectors";
import ServiceGeneralContent from "../../service-commons/service-general-content/service-general-content.component";
import ServiceIconContent from "../../service-commons/service-icon-content/service-icon-content.component";
import {
  RightServiceContainerGd,
  RightServiceContentGd
} from "./service-graphic-design.styles";


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
