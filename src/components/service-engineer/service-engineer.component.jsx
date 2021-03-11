import React from "react";

import ServiceGeneralContent from "../service-general-content/service-general-content.component";
import ServiceIconContent from "../service-icon-content/service-icon-content.component";
import "./service-engineer.styles.scss";

const ServiceEngineer = ({ engineer: { title, description, items } }) => {
  return (
    <div className="right-service-container-eng">
      <div className="right-service-content-eng">
        <ServiceGeneralContent title={title} description={description} />
        <ServiceIconContent items={items} />
      </div>
    </div>
  );
};

export default ServiceEngineer;
