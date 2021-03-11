import React from "react";

import ServiceGeneralContent from "../service-general-content/service-general-content.component";
import ServiceIconContent from "../service-icon-content/service-icon-content.component";
import "./service-graphic-design.styles.scss";

const ServiceGraphicDesign = ({ art: { title, description, items } }) => {
  return (
    <div className="right-service-container-gd">
      <div className="right-service-content-gd">
        <ServiceGeneralContent title={title} description={description} />
        <ServiceIconContent items={items} />
      </div>
    </div>
  );
};

export default ServiceGraphicDesign;
