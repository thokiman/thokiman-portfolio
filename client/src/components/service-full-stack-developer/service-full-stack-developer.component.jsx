import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransitionGroup } from "react-transition-group";

import {
  RightServiceContainerFS,
  RightServiceContentFS,
} from "./service-full-stack-developer.styles";
import ServiceGeneralContent from "../service-general-content/service-general-content.component";
import ServiceIconContent from "../service-icon-content/service-icon-content.component";
import { selectFullstackService } from "../../redux/service/service.selectors";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

const ServiceFullStackDeveloper = ({
  isSideBarHidden,
  fullstack: { title, description, items },
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
          <ServiceIconContent items={items} />
        </RightServiceContentFS>
      </CSSTransitionGroup>
    </RightServiceContainerFS>
  );
};
const mapStateToProps = createStructuredSelector({
  fullstack: selectFullstackService,
  isSideBarHidden: selectIsSideBarHidden,
});
export default connect(mapStateToProps)(ServiceFullStackDeveloper);
