import gsap, { Power1 } from 'gsap';

export const getInServiceTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  const leftServiceContainerRef = node.querySelector('.left-service-container');
  const directoryServiceContainerRef = node.querySelectorAll(
    '.directory-service-header'
  );
  const rightServiceContainerRef = node.querySelector(
    '.right-service-container'
  );

  const thokimanHeadRef = node.querySelectorAll('.thokiman-head-service');

  const footerGeneralIconRef = node.querySelectorAll('.footer-general-icon');
  const footerTextRef = node.querySelector('.footer-text');
  const socialFooterContainerRef = node.querySelectorAll(
    '.social-footer-container'
  );
  const footerSocialIconRef = node.querySelectorAll('.footer-social-icon');

  timeline
    .from(node, {
      display: 'none', // must be applied
      autoAlpha: 0.5,
      yPercent: -10,
      delay,
      ease: Power1.easeIn,
      duration: 0.25,
    })
    .to(node, {
      yPercent: 30,
      autoAlpha: 0,
      scaleY: 7,
      yoyo: true,
      yoyoEase: true,
      repeat: 1,
      repeatDelay: 0.5,
      duration: 4,
    })
    .from(leftServiceContainerRef, {
      yPercent: -40,
      autoAlpha: 0,
      duration: 0.5,
    })
    .from(directoryServiceContainerRef, {
      yPercent: -20,
      autoAlpha: 0,
      duration: 0.375,
      stagger: {
        grid: 'auto',
        axis: 'y',
        amount: 0.25,
      },
    })
    .from(rightServiceContainerRef, {
      rotateY: 100,
      autoAlpha: 0,
      transformOrigin: 'left',
      duration: 1,
    })
    .staggerFrom(
      thokimanHeadRef,
      0.75,
      { autoAlpha: 0, x: -50, ease: Power1.easeOut },
      0.125
    )
    .from(footerGeneralIconRef, {
      x: 20,
      autoAlpha: 0,
      duration: 0.5,
      stagger: {
        from: 'end',
        axis: 'x',
        amount: 0.25,
      },
    })
    .from(footerTextRef, {
      y: 20,
      autoAlpha: 0,
      duration: 0.5,
    })
    .from(socialFooterContainerRef, {
      x: 20,
      autoAlpha: 0,
      duration: 0.5,
    })
    .from(footerSocialIconRef, {
      y: 20,
      autoAlpha: 0,
      duration: 0.5,
      stagger: {
        from: 'start',
        axis: 'x',
        amount: 0.25,
      },
    });

  return timeline;
};
export const getOutServiceTimeline = (node, delay, pathname, routes) => {
  const timeline = gsap.timeline({ paused: true });

  const footerGeneralRef = node.querySelector('.footer-general');
  timeline
    .to(node, {
      display: 'none',
      autoAlpha: 0,
      yPercent: 10,

      ease: Power1.easeOut,
      duration: 1,
    })
    .to(footerGeneralRef, {
      display: 'none',
      autoAlpha: 0,
      yPercent: 20,
      ease: Power1.easeOut,
      duration: 1,
    });
  return timeline;
};
