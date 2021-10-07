import gsap, { Power1 } from 'gsap';
export const getInDefaultTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });

  timeline.from(node, {
    delay,
    display: 'none',
    autoAlpha: 0,
    xPercent: 50,
    ease: Power1.easeIn,
    duration: 2,
  });
  return timeline;
};
export const getOutDefaultTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });

  timeline.to(node, {
    display: 'none',
    autoAlpha: 0,
    xPercent: -30,
    ease: Power1.easeOut,
    duration: 2,
  });
  return timeline;
};
