import gsap, { Power1 } from 'gsap';

export const getInAboutTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  const footerGeneralRef = node.querySelector('.footer-general');
  console.log('about-enter called', node);
  console.log('about-element-enter called', footerGeneralRef);

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
      autoAlpha: 1,
      yoyo: true,
      yoyoEase: true,
      repeat: 1,
      repeatDelay: 0.5,
      duration: 3,
    })
    .from(footerGeneralRef, {
      display: 'none',
      autoAlpha: 0,
      yPercent: 10,
      ease: Power1.easeIn,
      duration: 0.5,
    });

  return timeline;
};
export const getOutAboutTimeline = (node, delay) => {
  console.log('about-exit called', node);
  const timeline = gsap.timeline({ paused: true });
  const footerGeneralRef = node.querySelector('.footer-general');
  console.log('footer-general-exit', footerGeneralRef);
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
