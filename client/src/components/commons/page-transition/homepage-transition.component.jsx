import gsap, { Power1 } from 'gsap';

export const getInHomepageTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  const homepageAboutContentContainerRef = node.querySelector(
    '.homepage-about-content-container'
  );
  console.log('homepage-enter called', node);
  console.log(
    'homepage-about-content-container-enter',
    homepageAboutContentContainerRef
  );
  timeline
    .from(node, {
      display: 'none', // must be applied
      autoAlpha: 0.5,
      yPercent: -10,
      delay,
      ease: Power1.easeIn,
      duration: 1,
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

export const getOutHomeTimeline = (node, delay) => {
  console.log('homepage-exit called', node);
  const timeline = gsap.timeline({ paused: true });

  timeline.to(node, {
    display: 'none',
    autoAlpha: 0,
    yPercent: 10,
    ease: Power1.easeOut,
    duration: 3,
  });

  return timeline;
};
