import { Power1 } from 'gsap';
import gsap from 'gsap/all';
import React, { useLayoutEffect, useRef } from 'react';
import { ImageWebsiteGsapTransition } from './portfolio-website-item.utils.transition.styles';

export const ImageWebsiteGsap = ({ children, addAnimation, index }) => {
  const el = useRef();

  useLayoutEffect(() => {
    let animation = gsap.from(el.current, {
      display: 'none',
      autoAlpha: 0,
      y: -50,
      duration: 2,
      delay: 0.5,
      ease: Power1.easeIn,
    });

    addAnimation(animation, index);

    return () => animation.progress(0).kill;
  }, [addAnimation, index]);

  return (
    <ImageWebsiteGsapTransition ref={el}>{children}</ImageWebsiteGsapTransition>
  );
};

export default ImageWebsiteGsap;
