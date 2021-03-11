import React from "react";

import "./education-grid.styles.scss";

const EducationGrid = ({ imagePath }) => {
  return (
    <div className="education-image-container">
      {imagePath.map(({ id, field, iconPath }) => {
        return (
          <div key={id} className="education-image-items">
            <img
              className="education-image"
              src={`${iconPath}`}
              alt={`${field}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EducationGrid;
