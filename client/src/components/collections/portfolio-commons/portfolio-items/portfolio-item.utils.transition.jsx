import { Power2 } from 'gsap';
import gsap from 'gsap/all';
import React, { useLayoutEffect, useRef } from 'react';
import { ImageGsapTransition } from './portfolio-item.utils.transition.styles.jsx';

export const ImageGsap = ({
  children,
  addAnimation,
  index,
  pathname,
  portfolioDefaultRoute,
  portfolioOptionsRoute: {
    portfolioAllRoute,
    brandRoute,
    digitalArtRoute,
    photographyBwRoute,
    photographyColorRoute,
  },
}) => {
  const el = useRef();

  useLayoutEffect(() => {
    let animation;
    if (
      !!pathname.match(`^${portfolioDefaultRoute}$`) ||
      !!pathname.match(`^${portfolioDefaultRoute}[/]$`)
    ) {
      animation = gsap.from(el.current, {
        display: 'none',
        autoAlpha: 0,
        y: -100,
        duration: 4,
        delay: 8,
        ease: Power2.easeOut,
      });
    } else if (!!pathname.match(`${portfolioAllRoute}$`)) {
      animation = gsap.from(el.current, {
        display: 'none',
        autoAlpha: 0,
        y: -100,
        duration: 4,
        delay: 1,
        ease: Power2.easeOut,
      });
    } else if (!!pathname.match(`${brandRoute}$`)) {
      animation = gsap.from(el.current, {
        display: 'none',
        autoAlpha: 0,
        y: -100,
        duration: 4,
        delay: 1,
        ease: Power2.easeOut,
      });
    } else if (!!pathname.match(`${digitalArtRoute}$`)) {
      animation = gsap.from(el.current, {
        display: 'none',
        autoAlpha: 0,
        y: -100,
        duration: 4,
        delay: 1,
        ease: Power2.easeOut,
      });
    } else if (!!pathname.match(`${photographyBwRoute}$`)) {
      animation = gsap.from(el.current, {
        display: 'none',
        autoAlpha: 0,
        y: -100,
        duration: 4,
        delay: 1,
        ease: Power2.easeOut,
      });
    } else if (!!pathname.match(`${photographyColorRoute}$`)) {
      animation = gsap.from(el.current, {
        display: 'none',
        autoAlpha: 0,
        y: -100,
        duration: 4,
        delay: 1,
        ease: Power2.easeOut,
      });
    }

    addAnimation(animation, index);

    return () => animation.progress(0).kill;
  }, [addAnimation, index]);

  return <ImageGsapTransition ref={el}>{children}</ImageGsapTransition>;
};

export default ImageGsap;
