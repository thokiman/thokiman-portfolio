import React from "react";

import ServiceUrlGeneralContent from "../service-url-general-content/service-url-general-content.component";
import ServiceUrlIconContent from "../service-url-icon-content/service-url-icon-content.component";
import "./service-photography.styles.scss";

const ServicePhotography = ({ photo: { title, description, items } }) => {
  return (
    <div className="right-service-container-pg">
      <div className="right-service-content-pg">
        <ServiceUrlGeneralContent title={title} description={description} />
        <ServiceUrlIconContent items={items} />
      </div>
    </div>
  );
};

export default ServicePhotography;
