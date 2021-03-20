import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import {
  VisualArtGridContent,
  VisualArtGridContainer,
  VisualArtGridItem,
  VisualArtImage,
  VisualArtTitle,
} from "./visual-art-grid.styles";

const VisualArtGrid = ({ visualSkill: { name, itemsPoint } }) => {
  return (
    <VisualArtGridContainer>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <VisualArtTitle>{name}</VisualArtTitle>
        <VisualArtGridContent>
          {itemsPoint.map(({ id, field, iconPath }) => {
            return (
              <VisualArtGridItem key={id}>
                <VisualArtImage src={iconPath} alt={field} />
              </VisualArtGridItem>
            );
          })}
        </VisualArtGridContent>
      </CSSTransitionGroup>
    </VisualArtGridContainer>
  );
};

export default VisualArtGrid;
