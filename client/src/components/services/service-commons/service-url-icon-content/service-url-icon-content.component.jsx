import React from 'react';
import {
  ServiceUrlIcon,
  ServiceUrlIconContainer,
  ServiceUrlIconItem,
} from './service-url-icon-content.styles';

export const ServiceUrlIconContent = ({ items }) => {
  return (
    <ServiceUrlIcon>
      {items.map(({ id, linkUrl, iconPath: { field, iconPath } }) => {
        return (
          <ServiceUrlIconContainer
            key={id}
            to={{ pathname: `${linkUrl}` }}
            target='_blank'
          >
            <ServiceUrlIconItem src={iconPath} alt={field} />
          </ServiceUrlIconContainer>
        );
      })}
    </ServiceUrlIcon>
  );
};

export default ServiceUrlIconContent;
