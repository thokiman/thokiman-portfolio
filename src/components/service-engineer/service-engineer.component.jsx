import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransitionGroup } from "react-transition-group";

import {
  RightServiceContainerEng,
  RightServiceContentEng,
} from "./service-enginner.styles";
import ServiceGeneralContent from "../service-general-content/service-general-content.component";
import ServiceIconContent from "../service-icon-content/service-icon-content.component";
import { selectEngineerService } from "../../redux/service/service.selectors";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

const ServiceEngineer = ({
  isSideBarHidden,
  engineer: { title, description, items },
}) => {
  return (
    <RightServiceContainerEng $issidebarhidden={isSideBarHidden}>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
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
  isSideBarHidden: selectIsSideBarHidden,
});
export default connect(mapStateToProps)(ServiceEngineer);
