import React from 'react';
import PorfolioItem from '../../portfolio-commons/portfolio-items/portfolio-items.component';
import {
  PortfolioContent,
  PortfolioLoadingState,
} from './portfolio-content-item.styles';

export const PortfolioContentItem = ({
  collectionList,
  handleScroll,
  isLoading,
}) => {
  return (
    <PortfolioContent onScroll={handleScroll}>
      <PorfolioItem items={collectionList} />
      {isLoading && (
        <PortfolioLoadingState
          type='Puff'
          color='#e3e1e4'
          height={100}
          width={100}
          visible={isLoading}
        />
      )}
    </PortfolioContent>
  );
};

export default PortfolioContentItem;
