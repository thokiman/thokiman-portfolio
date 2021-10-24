import gsap, { Power1 } from 'gsap';

export const getInAboutTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });

  const rightPageContainerRef = node.querySelector('.right-page-container');

  const aboutDropdownContentRef = node.querySelectorAll(
    '.about-dropdown-content'
  );
  const aboutDropdownOptionContainerRef = node.querySelectorAll(
    '.about-dropdown-option-container'
  );
  const aboutDropdownOptionRef = node.querySelectorAll(
    '.about-dropdown-option'
  );
  const thokimanSkeletonRef = node.querySelectorAll('.about-thokiman-skeleton');
  const aboutThokimanHeadColorContainerUpper = node.querySelector(
    '.about-thokiman-head-color-container-upper'
  );
  const aboutThokimanHeadColorContainerBelow = node.querySelector(
    '.about-thokiman-head-color-container-below'
  );

  const footerGeneralIconRef = node.querySelectorAll('.footer-general-icon');
  const footerTextRef = node.querySelector('.footer-text');
  const socialFooterContainerRef = node.querySelectorAll(
    '.social-footer-container'
  );
  const footerSocialIconRef = node.querySelectorAll('.footer-social-icon');

  timeline
    .set(aboutThokimanHeadColorContainerBelow, { display: 'none' })
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
      scaleY: 7,

      autoAlpha: 0,
      yoyo: true,
      yoyoEase: true,
      repeat: 1,
      repeatDelay: 0.5,
      duration: 4,
    })

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
    })
    .from(aboutDropdownContentRef, {
      yPercent: -40,
      autoAlpha: 0,
      duration: 1,
      stagger: {
        grid: 'auto',
        from: 'end',
        axis: 'y',
        amount: 0.25,
      },
    })
    .from(aboutDropdownOptionContainerRef, {
      yPercent: -40,
      autoAlpha: 0,
      duration: 0.5,
    })
    .from(aboutDropdownOptionRef, {
      yPercent: -20,
      autoAlpha: 0,
      duration: 0.375,
      stagger: {
        grid: 'auto',

        axis: 'y',
        amount: 0.25,
      },
    })
    .from(aboutThokimanHeadColorContainerUpper, {
      autoAlpha: 0,
      display: 'block',
      duration: 2,
    })
    .from(aboutThokimanHeadColorContainerBelow, {
      autoAlpha: 0,
      display: 'block',
      duration: 2,
    })
    .from(rightPageContainerRef, {
      rotateY: 100,
      autoAlpha: 0,
      transformOrigin: 'left',
      duration: 1,
    })
    .from(thokimanSkeletonRef, {
      yPercent: -20,
      autoAlpha: 0,
      duration: 2,
      stagger: {
        grid: 'auto',
        from: 'center',
        axis: 'y',
        amount: 0.5,
      },
    });

  return timeline;
};
export const getOutAboutTimeline = (node, delay, pathname) => {
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
