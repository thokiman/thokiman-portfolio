import React from 'react';
import PortfolioItemsSlider from '../../portfolio-commons/portfolio-items-slider/portfolio-items-slider.component';
import {
  PortfolioWebsiteItemContainer,
  PortfolioWebsiteItemLink,
} from './portfolio-website-item.styles';

export const PortfolioWebsiteItem = ({
  items: { title, linkUrl, webItems },
}) => {
  return (
    <PortfolioWebsiteItemContainer>
      <PortfolioWebsiteItemLink to={{ pathname: `${linkUrl}` }} target='_blank'>
        {title} Demo
      </PortfolioWebsiteItemLink>
      <PortfolioItemsSlider items={webItems} />
    </PortfolioWebsiteItemContainer>
  );
};

export default PortfolioWebsiteItem;
