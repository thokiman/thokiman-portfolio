import React, { memo } from 'react';
import {
  VisualArtGridContainer,
  VisualArtGridContent,
  VisualArtGridItem,
  VisualArtImage,
  VisualArtTitle,
} from './visual-art-grid.styles';

export const VisualArtGrid = ({ visualSkill: { name, itemsPoint } }) => {
  return (
    <VisualArtGridContainer>
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
    </VisualArtGridContainer>
  );
};

export default memo(VisualArtGrid);
