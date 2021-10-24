import gsap from 'gsap';
import React, {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import SpinnerLoading from '../../../../../commons/spinner-loading/spinner-loading.component';
import {
  VisualArtGridContainer,
  VisualArtGridContent,
  VisualArtGridItem,
  VisualArtImage,
  VisualArtTitle,
} from './visual-art-grid.styles';

export const VisualArtGrid = ({ visualSkill: { name, itemsPoint } }) => {
  const timeline = gsap.timeline();
  const visualArtGridContainerRef = useRef();
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
  useLayoutEffect(() => {
    let image = visualArtGridContainerRef.current.querySelectorAll('img');
    let visualArtGridContentRef =
      visualArtGridContainerRef.current.querySelector(
        '.visual-art-grid-content'
      );
    timeline.from(image, {
      autoAlpha: 0,
      y: -20,
      duration: 0.75,
      stagger: {
        grid: 'auto',
        from: 'random',
        ease: 'power2.in',
        amount: 0.2,
      },
    });
    timeline.play();
    return () => {
      timeline.from(visualArtGridContentRef, {
        autoAlpha: 1,

        duration: 0.5,
      });
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
      <VisualArtGridContainer ref={visualArtGridContainerRef}>
        <VisualArtTitle className='visual-art-grid-title'>
          {name}
        </VisualArtTitle>

        <VisualArtGridContent className='visual-art-grid-content'>
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
