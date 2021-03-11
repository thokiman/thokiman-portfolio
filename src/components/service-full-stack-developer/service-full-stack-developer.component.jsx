import React from "react";

import ServiceGeneralContent from "../service-general-content/service-general-content.component";
import ServiceIconContent from "../service-icon-content/service-icon-content.component";
import "./service-full-stack-developer.styles.scss";

const ServiceFullStackDeveloper = ({
  fullstack: { title, description, items },
}) => {
  return (
    <div className="right-service-container-fs">
      <div className="right-service-content-fs">
        <ServiceGeneralContent title={title} description={description} />
        <ServiceIconContent items={items} />
      </div>
    </div>
  );
};

export default ServiceFullStackDeveloper;
