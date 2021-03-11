import React from "react";

import "./portfolio-item.styles.scss";

const PortfolioItem = ({ items }) => {
  return (
    <div className="image-collections-container">
      {items.map((item) => {
        return (
          <div key={item.id} className="image-collection">
            <img className="image-item" src={item.iconPath} alt={item.field} />
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioItem;
