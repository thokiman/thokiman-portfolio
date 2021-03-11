import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import "./visual-art-grid.styles.scss";

const VisualArtGrid = ({ visualSkill: { name, itemsPoint } }) => {
  return (
    <div className="visual-art-grid-container">
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
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
      </CSSTransitionGroup>
    </div>
  );
};

export default VisualArtGrid;
