import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import VisualArtGrid from "../visual-art-grid/visual-art-grid.component";
import "./about-skil-visual-art.styles.scss";

const VisualArtSkill = ({ skill }) => {
  const {
    itemsPoint: { digitalArt, photography },
  } = skill;
  return (
    <div className="visual-art-skill-container">
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={850}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <div className="visual-art-content-container">
          <VisualArtGrid visualSkill={digitalArt} />
        </div>
        <div className="visual-art-content-container">
          <VisualArtGrid visualSkill={photography} />
        </div>
      </CSSTransitionGroup>
    </div>
  );
};

export default VisualArtSkill;
