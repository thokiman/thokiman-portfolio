import React from "react";
import {
  ServiceDescription,
  ServiceDescriptionContainer, ServiceDescriptionItem,
  ServiceDescriptionTitle,
  ServiceGeneralContent,
  ServiceTitle
} from "./service-url-general-content.styles";


export const ServiceUrlGeneralContent = ({ title, description }) => {
  return (
    <ServiceGeneralContent>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>
        {description.map(({ id, title, description }) => {
          return (
            <ServiceDescriptionContainer key={id}>
              <ServiceDescriptionTitle>{title}</ServiceDescriptionTitle>
              <ServiceDescriptionItem>{description}</ServiceDescriptionItem>
            </ServiceDescriptionContainer>
          );
        })}
      </ServiceDescription>
    </ServiceGeneralContent >
  );
};

export default ServiceUrlGeneralContent;
