import React from "react";

import {
  ServiceIcon,
  ServiceIconContainer,
  ServiceIconItem,
} from "./service-icon.styles";

const ServiceIconContent = ({ items }) => {
  return (
    <ServiceIcon>
      {items.map(({ id, field, iconPath }) => {
        return (
          <ServiceIconContainer key={id}>
            <ServiceIconItem src={iconPath} alt={field} />
          </ServiceIconContainer>
        );
      })}
    </ServiceIcon>
  );
};

export default ServiceIconContent;
