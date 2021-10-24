import gsap from 'gsap/all';
import React, { useEffect, useRef } from 'react';

export const VisualArtGridTransition = ({
  children,
  addAnimation,
  index,
  isLoadingSelectedImages,
}) => {
  const el = useRef();
  useEffect(() => {
    const animation = gsap.from(el.current, {
      autoAlpha: 0,
      delay: 1,
      y: -100,
      duration: 4,
    });

    addAnimation(animation, index);

    return () => animation.progress(0).kill;
  }, [addAnimation, index, isLoadingSelectedImages]);

  return <div ref={el}>{children}</div>;
};

export default VisualArtGridTransition;
