import gsap, { Power1 } from 'gsap';

export const getInServiceTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });

  console.log('service-enter called', node);

  const footerGeneralRef = node.querySelector('.footer-general');
  console.log('footer-enter called', node);
  console.log('service-footer-general-enter called', footerGeneralRef);

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
    });
  return timeline;
};
export const getOutServiceTimeline = (node, delay) => {
  console.log('service-exit called', node);
  const timeline = gsap.timeline({ paused: true });

  const footerGeneralRef = node.querySelector('.footer-general');
  console.log('footer-enter called', node);
  console.log('service-footer-general-enter called', footerGeneralRef);
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
