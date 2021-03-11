import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import "./engineer-grid.styles.scss";

const EngineerGrid = ({ engineerSkill }) => {
  return engineerSkill.map(({ id, name, itemsPoint }) => {
    return (
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
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
      </CSSTransitionGroup>
    );
  });
};

export default EngineerGrid;
