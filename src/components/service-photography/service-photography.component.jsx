import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import ServiceUrlGeneralContent from "../service-url-general-content/service-url-general-content.component";
import ServiceUrlIconContent from "../service-url-icon-content/service-url-icon-content.component";
import "./service-photography.styles.scss";

const ServicePhotography = ({ photo: { title, description, items } }) => {
  return (
    <div className="right-service-container-pg">
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <div className="right-service-content-pg">
          <ServiceUrlGeneralContent title={title} description={description} />
          <ServiceUrlIconContent items={items} />
        </div>
      </CSSTransitionGroup>
    </div>
  );
};

export default ServicePhotography;
