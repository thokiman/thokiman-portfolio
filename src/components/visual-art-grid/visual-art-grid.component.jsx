import React from "react";

import "./visual-art-grid.styles.scss";

const VisualArtGrid = ({ visualSkill: { name, itemsPoint } }) => {
  return (
    <div className="visual-art-grid-container">
      <div className="visual-art-title">{name}</div>
      <div className="visual-art-grid">
        {itemsPoint.map(({ id, field, iconPath }) => {
          return (
            <div key={id} className="visual-art-grid-item">
              <img src={iconPath} alt={field} className="visual-art-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisualArtGrid;
