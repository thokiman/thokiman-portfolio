import React from "react";

import EngineerGrid from "../engineer-grid/engineer-grid.component";
import "./about-skill-engineer.styles.scss";

const EngineerSkill = ({ skill: { itemsPoint } }) => {
  return (
    <div className="engineer-skill-container">
      <EngineerGrid engineerSkill={itemsPoint} />
    </div>
  );
};

export default EngineerSkill;
