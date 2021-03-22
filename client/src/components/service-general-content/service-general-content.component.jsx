import React from "react";

import {
  ServiceDescription,
  ServiceDescriptionContainer,
  ServiceDescriptionItem,
  ServiceDescriptionTitle,
  ServiceGeneralContentContainer,
  ServiceTitle,
} from "./service-general-content.styles";

const ServiceGeneralContent = ({ title, description }) => {
  return (
    <ServiceGeneralContentContainer>
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
    </ServiceGeneralContentContainer>
  );
};

export default ServiceGeneralContent;
