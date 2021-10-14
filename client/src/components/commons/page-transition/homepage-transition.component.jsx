import gsap, { Power1 } from 'gsap';

export const getInHomepageTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  const homepageAboutContentContainerRef = node.querySelector(
    '.homepage-about-content-container'
  );
  const homepageProfileImageContainerRef = node.querySelector(
    '.homepage-profile-image-container'
  );
  const homepageTextRef = node.querySelectorAll('.homepage-text');

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
    })
    .from(homepageAboutContentContainerRef, {
      display: 'none',
      autoAlpha: 0,
      yPercent: 0,
      duration: 0.5,
      onStart: () => {
        timeline
          .from(homepageProfileImageContainerRef, {
            display: 'none',
            autoAlpha: 0,
            yPercent: -10,
            duration: 4,
          })

          .from(homepageTextRef, {
            yPercent: 50,
            autoAlpha: 0,
            ease: 'power4.out',
            delay: 1,
            skewY: -6,
            duration: 4,
            stagger: {
              amount: 0.3,
            },
          });
      },
    });

  return timeline;
};

export const getOutHomeTimeline = (node, delay) => {
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
