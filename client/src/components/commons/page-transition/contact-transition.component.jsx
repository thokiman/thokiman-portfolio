import gsap, { Power1 } from 'gsap';
export const getInContactTimeline = (node, delay) => {
  console.log('contact-enter called', node);
  const timeline = gsap.timeline({ paused: true });
  const footerContactRef = node.querySelector('.footer-contact');
  console.log('contact-footer-enter', footerContactRef);
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
export const getOutContactTimeline = (node, delay) => {
  console.log('contact-exit called', node);
  const timeline = gsap.timeline({ paused: true });
  const footerContactRef = node.querySelector('.footer-contact');
  console.log('contact-footer-exit', footerContactRef);

  timeline

    .to(node, {
      display: 'none',
      autoAlpha: 0,
      yPercent: 10,
      ease: Power1.easeOut,
      duration: 1,
    })
    .to(footerContactRef, {
      display: 'none',
      autoAlpha: 0,
      yPercent: 20,
      ease: Power1.easeOut,
      duration: 1,
    });
  return timeline;
};
