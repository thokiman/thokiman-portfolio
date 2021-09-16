import React, { memo, useEffect, useState } from 'react';
import SpinnerLoading from '../../../../../commons/spinner-loading/spinner-loading.component';
import {
  VisualArtGridContainer,
  VisualArtGridContent,
  VisualArtGridItem,
  VisualArtImage,
  VisualArtTitle,
} from './visual-art-grid.styles';

export const VisualArtGrid = ({ visualSkill: { name, itemsPoint } }) => {
  // 6 items
  const numDisplayItems = 5;
  const millisecondInterval = 10000;
  const [selectedImages, setSelectedImages] = useState([
    ...itemsPoint.slice(0, numDisplayItems + 1),
  ]);
  const [isLoadingSelectedImages, setLoadingSelectedImages] = useState(false);

  useEffect(() => {
    const timeId = setInterval(() => {
      if (selectedImages === 0) {
        setLoadingSelectedImages(true);
      }
      setSelectedImages(handleSelectedImages(itemsPoint, numDisplayItems));
      setLoadingSelectedImages(false);
    }, millisecondInterval);

    return () => {
      clearInterval(timeId);
    };
  });

  const handleSelectedImages = (items, numItems) => {
    let array = [];

    let allItems = [...items];

    for (let i = 0; i <= numItems; i++) {
      const item = allItems[Math.floor(Math.random() * allItems.length)];
      array[i] = item;

      allItems = allItems.filter((el) => {
        return el.field !== item.field;
      });
    }

    return array;
  };

  if (selectedImages === 0 || isLoadingSelectedImages) {
    return <SpinnerLoading />;
  } else {
    return (
      <VisualArtGridContainer>
        <VisualArtTitle>{name}</VisualArtTitle>
        <VisualArtGridContent>
          {selectedImages.map(({ id, field, iconPath }) => {
            return (
              <VisualArtGridItem key={id}>
                <VisualArtImage src={iconPath} alt={field} />
              </VisualArtGridItem>
            );
          })}
        </VisualArtGridContent>
      </VisualArtGridContainer>
    );
  }
};

export default memo(VisualArtGrid);
