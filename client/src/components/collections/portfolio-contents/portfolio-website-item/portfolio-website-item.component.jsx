import gsap from 'gsap';
import React, { useCallback, useState } from 'react';
import PortfolioItemsSlider from '../../portfolio-commons/portfolio-items-slider/portfolio-items-slider.component';
import {
  PortfolioWebsiteItemContainer,
  PortfolioWebsiteItemLink,
} from './portfolio-website-item.styles';
import ImageWebsiteGsap from './portfolio-website-item.utils.transition';

export const PortfolioWebsiteItem = ({
  isSideBarActive,
  items: { title, linkUrl, webItems },
}) => {
  const [timeline, setTimeline] = useState(() => gsap.timeline());
  const addAnimation = useCallback(
    (animation, index) => {
      timeline.add(animation, index * 0.1);
    },
    [timeline]
  );

  return (
    <ImageWebsiteGsap addAnimation={addAnimation} index={1}>
      <PortfolioWebsiteItemContainer $issidebaractive={isSideBarActive}>
        <PortfolioWebsiteItemLink
          to={{ pathname: `${linkUrl}` }}
          target='_blank'
        >
          {title} Demo
        </PortfolioWebsiteItemLink>
        <PortfolioItemsSlider items={webItems} />
      </PortfolioWebsiteItemContainer>
    </ImageWebsiteGsap>
  );
};

export default PortfolioWebsiteItem;
