import React from "react";

import {
  TechnologyGridContent,
  TechnologyGridContainer,
  TechnologyGridItem,
  TechnologyImage,
  TechnologyTitle,
} from "./technology-grid.styles";

const TechnologyGrid = ({ technologySkill: { name, itemsPoint } }) => {
  return (
    <TechnologyGridContainer>
      <TechnologyTitle>{name}</TechnologyTitle>
      <TechnologyGridContent>
        {itemsPoint.map(({ id, field, iconPath }) => {
          return (
            <TechnologyGridItem key={id}>
              <TechnologyImage src={iconPath} alt={field} />
            </TechnologyGridItem>
          );
        })}
      </TechnologyGridContent>
    </TechnologyGridContainer>
  );
};

export default TechnologyGrid;
