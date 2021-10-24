import React from 'react';
import VisualArtGrid from '../../about-commons/skill-parts/visual-art-skill-parts/visual-art-grid/visual-art-grid.component';
import {
  AboutVisualArtContentContainer,
  AboutVisualArtSkillContainer,
} from './about-skill-visual-art.styles';

export const VisualArtSkill = ({ skill }) => {
  const {
    itemsPoint: { digitalArt, photography },
  } = skill;

  return (
    <AboutVisualArtSkillContainer>
      <AboutVisualArtContentContainer>
        <VisualArtGrid visualSkill={digitalArt} />
      </AboutVisualArtContentContainer>
      <AboutVisualArtContentContainer>
        <VisualArtGrid visualSkill={photography} />
      </AboutVisualArtContentContainer>
    </AboutVisualArtSkillContainer>
  );
};

export default VisualArtSkill;
