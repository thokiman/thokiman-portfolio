import React from "react";

import {
  PortfolioImageCollection,
  PortfolioImageCollectionsContainer,
  PortfolioImageItem,
} from "./portfolio-item.styles";

const PortfolioItem = ({ items }) => {
  return (
    <PortfolioImageCollectionsContainer>
      {items.map((item) => {
        return (
          <PortfolioImageCollection key={item.id}>
            <PortfolioImageItem src={item.iconPath} alt={item.field} />
          </PortfolioImageCollection>
        );
      })}
    </PortfolioImageCollectionsContainer>
  );
};

export default PortfolioItem;
