import React from "react";

import "./engineer-grid.styles.scss";

const EngineerGrid = ({ engineerSkill }) => {
  return engineerSkill.map(({ id, name, itemsPoint }) => {
    return (
      <div key={id} className="engineer-content-container">
        <div className="name-engineer-skill">{name}</div>

        {itemsPoint.map(({ id, description }) => {
          return (
            <div key={id} className="description-engineer-skill">
              {description}
            </div>
          );
        })}
      </div>
    );
  });
};

export default EngineerGrid;
