import React from "react";

import EngineerGrid from "../engineer-grid/engineer-grid.component";
import "./about-skill-engineer.styles.scss";

const EngineerSkill = ({ skill }) => {
  return (
    <div className="engineer-skill-container">
      <EngineerGrid engineerSkill={skill} />
    </div>
  );
};

export default EngineerSkill;
