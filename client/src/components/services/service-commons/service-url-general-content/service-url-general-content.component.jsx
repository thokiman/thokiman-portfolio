import React from 'react';
import {
  ServiceDescription,
  ServiceDescriptionContainer,
  ServiceDescriptionItem,
  ServiceDescriptionTitle,
  ServiceTitle,
  ServiceUrlGeneralContainer,
} from './service-url-general-content.styles';

export const ServiceUrlGeneralContent = ({ title, description }) => {
  return (
    <ServiceUrlGeneralContainer>
      <ServiceTitle className='service-url-general-content-title'>
        {title}
      </ServiceTitle>
      <ServiceDescription>
        {description.map(({ id, title, description }) => {
          return (
            <ServiceDescriptionContainer key={id}>
              <ServiceDescriptionTitle className='service-url-general-content-description'>
                {title}
              </ServiceDescriptionTitle>
              <ServiceDescriptionItem className='service-url-general-content-description'>
                {description}
              </ServiceDescriptionItem>
            </ServiceDescriptionContainer>
          );
        })}
      </ServiceDescription>
    </ServiceUrlGeneralContainer>
  );
};

export default ServiceUrlGeneralContent;
