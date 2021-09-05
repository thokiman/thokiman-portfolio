import React from "react";
import {
  ServiceIcon,
  ServiceIconContainer, ServiceIconItem, ServiceJobTitle
} from "./service-icon.styles";


export const ServiceIconContent = ({ items, jobDetail }) => {
  return (
    <>
      {jobDetail ? <ServiceJobTitle>{jobDetail}</ServiceJobTitle> : ""}
      <ServiceIcon>
        {items.map(({ id, field, iconPath }) => {
          return (
            <ServiceIconContainer key={id}>
              <ServiceIconItem src={iconPath} alt={field} />
            </ServiceIconContainer>
          );
        })}
      </ServiceIcon>
    </>
  );
};

export default ServiceIconContent;
