import gsap, { Power1 } from 'gsap';
export const getInContactTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  const contactInformationContainerRef = node.querySelector(
    '.contact-information-container'
  );
  const contactInformationTitleRef = node.querySelector(
    '.contact-information-title'
  );
  const contactInformationContentRef = node.querySelector(
    '.contact-information-content'
  );
  const whiteThokimanContactIconRef = node.querySelectorAll(
    '.white-thokiman-contact-icon'
  );
  const socialContactLinkIconRef = node.querySelectorAll(
    '.social-contact-link-icon'
  );

  const contactFormContainerRef = node.querySelector('.contact-form-container');
  const contactFormGroupRef = node.querySelectorAll('.contact-form-group');
  const contactFormElementRef = node.querySelectorAll('.contact-form-element');

  const contactLocationContainerRef = node.querySelector(
    '.contact-location-container'
  );
  const contactLocationInfoRef = node.querySelector('.contact-location-info');
  const contactLocationInfoElementRef = node.querySelectorAll(
    '.contact-info-location-element'
  );

  const mapContainerRef = node.querySelector('.map-container');
  const footerGeneralIconRef = node.querySelectorAll('.footer-general-icon');
  const footerTextRef = node.querySelector('.footer-text');

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
    })
    .from(contactInformationContainerRef, {
      rotateX: 70,
      autoAlpha: 0,
      transformOrigin: 'top',
      duration: 0.75,
    })

    .from(contactInformationTitleRef, {
      y: -20,
      autoAlpha: 0,
      ease: 'power4.out',
      skewY: -10,
      duration: 0.75,
    })

    .from(contactInformationContentRef, {
      yPercent: -40,
      autoAlpha: 0,
      duration: 0.75,
    })
    .from(whiteThokimanContactIconRef, {
      y: -40,
      skewY: -6,
      autoAlpha: 0,
      duration: 1,
      stagger: {
        from: 'random',
        amount: 0.5,
      },
    })
    .from(socialContactLinkIconRef, {
      x: -25,
      skewX: -10,
      autoAlpha: 0,
      duration: 1,
      stagger: {
        from: 'center',
        amount: 0.5,
      },
    })
    .from(contactFormContainerRef, {
      rotateY: 100,
      autoAlpha: 0,
      transformOrigin: 'left',
      duration: 0.7,
    })
    .from(contactFormGroupRef, {
      y: -20,
      skewY: -6,
      autoAlpha: 0,
      duration: 1,
      stagger: {
        from: 'start',
        amount: 0.25,
      },
    })
    .staggerFrom(
      contactFormElementRef,
      0.65,
      { autoAlpha: 0, y: -25, ease: Power1.easeOut },
      0.25
    )
    .from(contactLocationContainerRef, {
      rotateX: 100,
      autoAlpha: 0,
      transformOrigin: 'bottom',
      duration: 0.7,
    })
    .from(mapContainerRef, {
      rotateY: 100,
      autoAlpha: 0,
      transformOrigin: 'left',
      duration: 1,
    })
    .from(contactLocationInfoRef, {
      rotateX: -100,
      autoAlpha: 0,
      transformOrigin: 'top',
      duration: 0.75,
    })
    .from(contactLocationInfoElementRef, {
      y: -20,
      skewY: -6,
      autoAlpha: 0,
      duration: 1,
      stagger: {
        from: 'start',
        amount: 0.25,
      },
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
    });
  return timeline;
};
export const getOutContactTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  const footerContactRef = node.querySelector('.footer-contact');

  timeline

    .to(node, {
      display: 'none',
      autoAlpha: 0,
      yPercent: 10,
      scaleY: 1.5,
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
