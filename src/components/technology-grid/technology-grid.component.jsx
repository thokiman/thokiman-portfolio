import React from "react";

import "./technology-grid.styles.scss";

const TechnologyGrid = ({ technologySkill: { name, itemsPoint } }) => {
  return (
    <div className="technology-grid-container">
      <div className="technology-title">{name}</div>
      <div className="technology-grid">
        {itemsPoint.map(({ id, field, iconPath }) => {
          return (
            <div key={id} className="technology-grid-item">
              <img src={iconPath} alt={field} className="technology-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologyGrid;
