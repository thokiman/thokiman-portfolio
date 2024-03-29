import gsap, { Power1 } from 'gsap';

export const getInPortfolioTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });

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
      scaleY: 7,
      autoAlpha: 0,
      yoyo: true,
      yoyoEase: true,
      repeat: 1,
      repeatDelay: 0.5,
      duration: 4,
    });

  return timeline;
};
export const getOutPortfolioTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  timeline.to(node, {
    display: 'none',
    autoAlpha: 0,
    yPercent: 25,
    scaleY: 1.5,
    ease: Power1.easeOut,
    duration: 1,
  });
  return timeline;
};
