import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import VisualArtGrid from "../visual-art-grid/visual-art-grid.component";
import "./about-skil-visual-art.styles.scss";

const VisualArtSkill = ({ skill }) => {
  const {
    itemsPoint: { digitalArt, photography },
  } = skill;
  return (
    <div className="visual-art-skill-container">
      <div className="visual-art-content-container">
        <VisualArtGrid visualSkill={digitalArt} />
      </div>
      <div className="visual-art-content-container">
        <VisualArtGrid visualSkill={photography} />
      </div>
    </div>
  );
};

export default VisualArtSkill;
