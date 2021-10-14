import gsap, { Power1 } from 'gsap';
export const getInDefaultTimeline = (node, delay, pathname, routes) => {
  const timeline = gsap.timeline({ paused: true });
  const {
    aboutRoute,
    serviceRoute,
    portfolioDefaultRoute,
    contactRoute,
    portfolioAllRoute,
    brandRoute,
    digitalArtRoute,
    photographyBwRoute,
    photographyColorRoute,
    websiteRoute,
  } = routes;
  console.log('default-transition-enter');
  if (pathname.match(`^${aboutRoute}+`)) {
    console.log('default-about-enter');
    timeline.from(node, {
      delay,
      display: 'none',
      autoAlpha: 0,
      xPercent: 50,
      ease: Power1.easeIn,
      duration: 2,
    });
  } else if (
    pathname.match(`^${portfolioDefaultRoute}$`) ||
    pathname.match(`^${portfolioDefaultRoute}[/]$`) ||
    pathname.match(`^${portfolioAllRoute}$`) ||
    pathname.match(`^${brandRoute}$`) ||
    pathname.match(`^${digitalArtRoute}$`) ||
    pathname.match(`^${photographyBwRoute}$`) ||
    pathname.match(`^${photographyColorRoute}$`) ||
    pathname.match(`^${websiteRoute}$`)
  ) {
  } else if (pathname.match(`^${serviceRoute}+`)) {
    console.log('default-service-enter');
    timeline.from(node, {
      delay,
      display: 'none',
      autoAlpha: 0,
      xPercent: 50,
      ease: Power1.easeIn,
      duration: 2,
    });
  } else if (pathname.match(`^${contactRoute}+`)) {
    console.log('default-contact-enter');
    timeline.from(node, {
      delay,
      display: 'none',
      autoAlpha: 0,
      xPercent: 50,
      ease: Power1.easeIn,
      duration: 2,
    });
  }

  return timeline;
};
export const getOutDefaultTimeline = (node, delay, pathname, routes) => {
  const timeline = gsap.timeline({ paused: true });
  console.log('default-transition-exit called');

  const {
    aboutRoute,
    serviceRoute,
    portfolioDefaultRoute,
    contactRoute,
    portfolioAllRoute,
    brandRoute,
    digitalArtRoute,
    photographyBwRoute,
    photographyColorRoute,
    websiteRoute,
  } = routes;

  if (pathname.match(`^${aboutRoute}+`)) {
    console.log('default-about-exit');
    timeline.to(node, {
      display: 'none',
      autoAlpha: 0,
      xPercent: -30,
      ease: Power1.easeOut,
      duration: 2,
    });
  } else if (
    pathname.match(`^${portfolioDefaultRoute}$`) ||
    pathname.match(`^${portfolioDefaultRoute}[/]$`) ||
    pathname.match(`^${portfolioAllRoute}$`) ||
    pathname.match(`^${brandRoute}$`) ||
    pathname.match(`^${digitalArtRoute}$`) ||
    pathname.match(`^${photographyBwRoute}$`) ||
    pathname.match(`^${photographyColorRoute}$`) ||
    pathname.match(`^${websiteRoute}$`)
  ) {
  } else if (pathname.match(`^${serviceRoute}+`)) {
    console.log('default-service-exit');
    timeline.to(node, {
      display: 'none',
      autoAlpha: 0,
      xPercent: -30,
      ease: Power1.easeOut,
      duration: 2,
    });
  } else if (pathname.match(`^${contactRoute}+`)) {
    console.log('default-contact-exit');
    timeline.to(node, {
      display: 'none',
      autoAlpha: 0,
      xPercent: -30,
      ease: Power1.easeOut,
      duration: 2,
    });
  } else {
    timeline.to(node, {
      display: 'none',
      autoAlpha: 0,
      xPercent: -30,
      ease: Power1.easeOut,
      duration: 2,
    });
  }

  return timeline;
};
