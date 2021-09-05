import React from 'react';
import {
  TechnologyGridContainer,
  TechnologyGridContent,
  TechnologyImage,
  TechnologyTitle,
} from './technology-grid.styles';

export const TechnologyGrid = ({ technologySkill: { name, itemsPoint } }) => {
  return (
    <TechnologyGridContainer>
      <TechnologyTitle>{name}</TechnologyTitle>
      <TechnologyGridContent>
        {itemsPoint.map(({ id, field, iconPath }) => {
          return <TechnologyImage key={id} src={iconPath} alt={field} />;
        })}
      </TechnologyGridContent>
    </TechnologyGridContainer>
  );
};

export default TechnologyGrid;
