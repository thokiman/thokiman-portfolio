import React from "react";

import "./service-icon-content.styles.scss";

const ServiceIconContent = ({ items }) => {
  return (
    <div className="service-icon">
      {items.map(({ id, field, iconPath }) => {
        return (
          <div key={id} className="service-icon-container">
            <img src={iconPath} alt={field} className="service-icon-item" />
          </div>
        );
      })}
    </div>
  );
};

export default ServiceIconContent;
