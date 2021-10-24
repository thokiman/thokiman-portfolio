import gsap from 'gsap/all';
import React, { useLayoutEffect, useRef } from 'react';

export const CartoonGsap = ({
  children,
  addAnimation,
  index,
  xPosition,
  yPosition,
}) => {
  const el = useRef();
  useLayoutEffect(() => {
    const animation = gsap.from(el.current, {
      autoAlpha: 0,
      delay: 1,
      x: xPosition,
      y: yPosition,
      duration: 4,
    });
    addAnimation(animation, index);

    return () => animation.progress(0).kill;
  }, [addAnimation, index, xPosition, yPosition]);

  return <div ref={el}>{children}</div>;
};

export default CartoonGsap;
