import React from "react";

import "./service-url-general-content.styles.scss";

const ServiceUrlGeneralContent = ({ title, description }) => {
  return (
    <div className="service-general-content">
      <div className="service-title">{title}</div>
      <div className="service-description">
        {description.map(({ id, title, description, items }) => {
          return (
            <div key={id} className="service-description-container">
              <div className="service-description-title">{title}</div>
              <div className="service-description-item">{description}</div>
              <div className="service-description-icon-container">
                {items.map(({ id, name, iconPath }) => {
                  return (
                    <img
                      className="service-description-icon-item"
                      key={id}
                      src={iconPath}
                      alt={name}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceUrlGeneralContent;
