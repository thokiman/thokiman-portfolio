import React from "react";
import EngineerGrid from "../../about-commons/skill-parts/engineer-skill-parts/engineer-grid/engineer-grid.component";
import { AboutEngineerSkillContainer } from "./about-skill-engineer.styles";


export const EngineerSkill = ({ skill: { itemsPoint } }) => {
  return (
    <AboutEngineerSkillContainer>
      <EngineerGrid engineerSkill={itemsPoint} />
    </AboutEngineerSkillContainer>
  );
};

export default EngineerSkill;
