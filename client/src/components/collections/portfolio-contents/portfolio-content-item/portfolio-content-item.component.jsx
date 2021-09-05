import React from "react";

import {
  PortfolioLoadingState,
  PortfolioContent,
} from "./portfolio-content-item.styles";
import PorfolioItem from "../portfolio-item/portfolio-item.component";

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
          type="Puff"
          color="#e3e1e4"
          height={100}
          width={100}
          visible={isLoading}
        />
      )}
    </PortfolioContent>
  );
};

export default PortfolioContentItem;
