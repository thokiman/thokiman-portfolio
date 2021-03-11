import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import ServiceGeneralContent from "../service-general-content/service-general-content.component";
import ServiceIconContent from "../service-icon-content/service-icon-content.component";
import "./service-graphic-design.styles.scss";

const ServiceGraphicDesign = ({ art: { title, description, items } }) => {
  return (
    <div className="right-service-container-gd">
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <div className="right-service-content-gd">
          <ServiceGeneralContent title={title} description={description} />
          <ServiceIconContent items={items} />
        </div>
      </CSSTransitionGroup>
    </div>
  );
};

export default ServiceGraphicDesign;
