import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import ServiceGeneralContent from "../service-general-content/service-general-content.component";
import ServiceIconContent from "../service-icon-content/service-icon-content.component";
import "./service-engineer.styles.scss";

const ServiceEngineer = ({ engineer: { title, description, items } }) => {
  return (
    <div className="right-service-container-eng">
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <div className="right-service-content-eng">
          <ServiceGeneralContent title={title} description={description} />
          <ServiceIconContent items={items} />
        </div>
      </CSSTransitionGroup>
    </div>
  );
};

export default ServiceEngineer;
