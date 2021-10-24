import React from 'react';
import {
  ServiceIcon,
  ServiceIconContainer,
  ServiceIconItem,
  ServiceJobTitle,
} from './service-icon.styles';

export const ServiceIconContent = ({ items, jobDetail }) => {
  return (
    <>
      {jobDetail ? (
        <ServiceJobTitle className='service-icon-job-detail'>
          {jobDetail}
        </ServiceJobTitle>
      ) : (
        ''
      )}
      <ServiceIcon>
        {items.map(({ id, field, iconPath }) => {
          return (
            <ServiceIconContainer className='service-icon' key={id}>
              <ServiceIconItem src={iconPath} alt={field} />
            </ServiceIconContainer>
          );
        })}
      </ServiceIcon>
    </>
  );
};

export default ServiceIconContent;
