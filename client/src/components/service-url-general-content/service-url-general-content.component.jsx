import React from "react";

import {
  ServiceDescription,
  ServiceDescriptionContainer,
  ServiceDescriptionIconContainer,
  ServiceDescriptionIconItem,
  ServiceDescriptionItem,
  ServiceDescriptionTitle,
  ServiceGeneralContent,
  ServiceTitle,
} from "./service-url-general-content.styles";

export const ServiceUrlGeneralContent = ({ title, description }) => {
  return (
    <ServiceGeneralContent>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>
        {description.map(({ id, title, description, items }) => {
          return (
            <ServiceDescriptionContainer key={id}>
              <ServiceDescriptionTitle>{title}</ServiceDescriptionTitle>
              <ServiceDescriptionItem>{description}</ServiceDescriptionItem>
              <ServiceDescriptionIconContainer>
                {items.map(({ id, name, iconPath }) => {
                  return (
                    <ServiceDescriptionIconItem
                      key={id}
                      src={iconPath}
                      alt={name}
                    />
                  );
                })}
              </ServiceDescriptionIconContainer>
            </ServiceDescriptionContainer>
          );
        })}
      </ServiceDescription>
    </ServiceGeneralContent>
  );
};

export default ServiceUrlGeneralContent;
