import React from "react";

import "./service-general-content.styles.scss";

const ServiceGeneralContent = ({ title, description }) => {
  return (
    <div className="service-general-content">
      <div className="service-title">{title}</div>
      <div className="service-description">
        {description.map(({ id, title, description }) => {
          return (
            <div key={id} className="service-description-container">
              <div className="service-description-title">{title}</div>
              <div className="service-description-item">{description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceGeneralContent;
