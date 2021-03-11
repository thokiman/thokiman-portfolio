import React from "react";
import { Link } from "react-router-dom";

import "./service-url-icon-content.styles.scss";

const ServiceUrlIconContent = ({ items }) => {
  return (
    <div className="service-url-icon">
      {items.map(({ id, linkUrl, iconPath: { field, iconPath } }) => {
        return (
          <Link
            key={id}
            to={{ pathname: `${linkUrl}` }}
            target="_blank"
            className="service-url-icon-container"
          >
            <img src={iconPath} alt={field} className="service-url-icon-item" />
          </Link>
        );
      })}
    </div>
  );
};

export default ServiceUrlIconContent;
