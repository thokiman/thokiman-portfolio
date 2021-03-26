import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import VisualArtGrid from "../visual-art-grid/visual-art-grid.component";
import {
  AboutVisualArtContentContainer,
  AboutVisualArtSkillContainer,
} from "./about-skill-visual-art.styles";

export const VisualArtSkill = ({ skill }) => {
  const {
    itemsPoint: { digitalArt, photography },
  } = skill;
  return (
    <AboutVisualArtSkillContainer>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={850}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <AboutVisualArtContentContainer>
          <VisualArtGrid visualSkill={digitalArt} />
        </AboutVisualArtContentContainer>
        <AboutVisualArtContentContainer>
          <VisualArtGrid visualSkill={photography} />
        </AboutVisualArtContentContainer>
      </CSSTransitionGroup>
    </AboutVisualArtSkillContainer>
  );
};

export default VisualArtSkill;
