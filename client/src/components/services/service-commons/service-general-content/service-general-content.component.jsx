import React from 'react';
import {
  ServiceDescription,
  ServiceDescriptionContainer,
  ServiceDescriptionItem,
  ServiceDescriptionTitle,
  ServiceGeneralContentContainer,
  ServiceTitle,
} from './service-general-content.styles';

export const ServiceGeneralContent = ({ title, description }) => {
  return (
    <ServiceGeneralContentContainer>
      <ServiceTitle className='service-general-content-title'>
        {title}
      </ServiceTitle>
      <ServiceDescription>
        {description.map(({ id, title, description }) => {
          return (
            <ServiceDescriptionContainer key={id}>
              <ServiceDescriptionTitle className='service-general-content-description'>
                {title}
              </ServiceDescriptionTitle>
              <ServiceDescriptionItem className='service-general-content-description'>
                {description}
              </ServiceDescriptionItem>
            </ServiceDescriptionContainer>
          );
        })}
      </ServiceDescription>
    </ServiceGeneralContentContainer>
  );
};

export default ServiceGeneralContent;
