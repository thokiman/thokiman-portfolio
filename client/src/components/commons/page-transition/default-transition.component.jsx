import gsap, { Power1 } from 'gsap';
export const getInDefaultTimeline = (node, delay, pathname, routes) => {
  const timeline = gsap.timeline({ paused: true });
  const aboutPageRef = node.querySelector('.about-page');
  const skillContainerRef = node.querySelector('.skill-container');
  const educationContainerRef = node.querySelector('.education-container');
  const projectContainerRef = node.querySelector('.project-container');
  const summaryContainerRef = node.querySelector('.summary-container');
  const skillHeaderRef = node.querySelectorAll('.about-text-box');
  const visualArtGridTitleRef = node.querySelectorAll('.visual-art-grid-title');
  const visualArtGridContentRef = node.querySelectorAll(
    '.visual-art-grid-content'
  );
  const nameEngineerSkillRef = node.querySelectorAll('.name-engineer-skill');
  const descriptionEngineerSkillRef = node.querySelectorAll(
    '.description-engineer-skill'
  );
  const engineerContentContainerRef = node.querySelectorAll(
    '.engineer-content-container'
  );
  const technologyTitleRef = node.querySelectorAll('.technology-title');
  const technologyImageRef = node.querySelectorAll('.technology-image');
  const aboutEducationBachelorContentRef = node.querySelector(
    '.about-education-bachelor-content'
  );
  const aboutEducationBachelorTitleRef = node.querySelector(
    '.about-education-bachelor-title'
  );
  const aboutEducationBachelorAttributesRef = node.querySelectorAll(
    '.about-education-bachelor-attributes'
  );
  const aboutEducationBachelorRef = node.querySelectorAll(
    '.about-education-bachelor'
  );
  const aboutEducationCourseContentRef = node.querySelector(
    '.about-education-course-content'
  );
  const aboutEducationExperienceContentRef = node.querySelector(
    '.about-education-experience-content'
  );
  const educationImageItemsRef = node.querySelectorAll(
    '.education-image-items'
  );
  const aboutPersonalityContentRef = node.querySelector(
    '.about-personality-content'
  );
  const aboutPersonalityBoxRef = node.querySelectorAll(
    '.about-personality-box'
  );
  const aboutThesisProjectContentRef = node.querySelector(
    '.about-thesis-project-content'
  );
  const aboutThesisProjectTitleRef = node.querySelector(
    '.about-thesis-project-title'
  );
  const aboutThesisProjectAttributesRef = node.querySelectorAll(
    '.about-thesis-project-attributes'
  );
  const aboutThesisProjectRef = node.querySelectorAll('.about-thesis-project');
  const aboutExperienceProjectRef = node.querySelector(
    '.about-experience-project-content'
  );
  const aboutCourseProjectRef = node.querySelector(
    '.about-course-project-content'
  );
  const aboutProjectAchievementContentRef = node.querySelector(
    '.about-project-achievement-content'
  );
  const aboutSummaryTitleRef = node.querySelectorAll('.about-summary-title');
  const aboutSummaryRef = node.querySelectorAll('.about-summary');
  const aboutDropdownContainerRef = node.querySelector(
    '.about-dropdown-container'
  );
  const aboutDropdownContentRef = node.querySelectorAll(
    '.about-dropdown-content'
  );
  const aboutDropdownOptionContainerRef = node.querySelectorAll(
    '.about-dropdown-option-container'
  );
  const aboutDropdownOptionRef = node.querySelectorAll(
    '.about-dropdown-option'
  );
  const aboutThokimanHeadColorContainerUpper = node.querySelector(
    '.about-thokiman-head-color-container-upper'
  );
  const aboutThokimanHeadColorContainerBelow = node.querySelector(
    '.about-thokiman-head-color-container-below'
  );
  const careerTimelineHeaderContainerRef = node.querySelector(
    '.timeline-header-container'
  );
  const careerTimelineHeaderSeparatorRef = node.querySelector(
    '.timeline-header-separator'
  );
  const careerTimelineHeaderUpperLinkRef = node.querySelector(
    '.timeline-header-upper'
  );
  const careerTimelineHeaderBelowLinkRef = node.querySelector(
    '.timeline-header-below'
  );
  const aboutCareerTimelineTitleRef = node.querySelectorAll(
    '.about-timeline-career-title'
  );
  const careerTimelineTextContainerRef = node.querySelector(
    '.timeline-text-container'
  );
  const aboutCareerTimelineElementRef = node.querySelectorAll(
    'about-timeline-career-element'
  );
  const aboutCareerTimelineRef = node.querySelectorAll(
    '.about-timeline-career'
  );
  const rightServiceContainerRef = node.querySelector(
    '.right-service-container'
  );
  const serviceGeneralContentTitleRef = node.querySelector(
    '.service-general-content-title'
  );
  const serviceGeneralContentDescriptionRef = node.querySelectorAll(
    '.service-general-content-description'
  );
  const serviceUrlGeneralContentTitleRef = node.querySelector(
    '.service-url-general-content-title'
  );
  const serviceUrlGeneralContentDescriptionRef = node.querySelectorAll(
    '.service-url-general-content-description'
  );
  const serviceStockPhotosTitleRef = node.querySelector(
    '.service-stock-photos-title'
  );
  const serviceJobDetailRef = node.querySelectorAll('.service-icon-job-detail');
  const serviceIconRef = node.querySelectorAll('.service-icon');
  const serviceUrlIconRef = node.querySelectorAll('.service-url-icon');

  const footerGeneralIconRef = node.querySelectorAll('.footer-general-icon');
  const footerTextRef = node.querySelector('.footer-text');
  const socialFooterContainerRef = node.querySelectorAll(
    '.social-footer-container'
  );
  const footerSocialIconRef = node.querySelectorAll('.footer-social-icon');

  const {
    aboutRoute,
    serviceRoute,
    portfolioDefaultRoute,
    portfolioAllRoute,
    brandRoute,
    digitalArtRoute,
    photographyBwRoute,
    photographyColorRoute,
    websiteRoute,
    skillRoute,
    skillEngineerRoute,
    skillVisualArtRoute,
    skillTechnologyRoute,
    educationRoute,
    projectRoute,
    summaryRoute,
    careerTimelineRoute,
    artServiceRoute,
    engineerServiceRoute,
    devServiceRoute,
    photoServiceRoute,
  } = routes;

  timeline
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
    });
  if (pathname.match(`^${aboutRoute}+`)) {
    if (!!pathname.match(`${skillRoute}$|${skillVisualArtRoute}$`)) {
      timeline
        .from(skillContainerRef, {
          display: 'none',
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })

        .from(skillHeaderRef, {
          autoAlpha: 0,
          x: -100,
          duration: 2,
          stagger: {
            axis: 'x',
            amount: 0.5,
          },
        })
        .from(visualArtGridTitleRef, {
          autoAlpha: 0,
          y: -100,
          duration: 3,
        })
        .from(visualArtGridContentRef, {
          autoAlpha: 0,
          y: -100,
          duration: 3,
        });
    } else if (!!pathname.match(`${skillEngineerRoute}$`)) {
      timeline
        .from(skillContainerRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(skillHeaderRef, {
          autoAlpha: 0,
          x: -100,
          duration: 2,
          stagger: {
            axis: 'x',
            amount: 0.5,
          },
        })
        .from(engineerContentContainerRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(nameEngineerSkillRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1,
          stagger: {
            axis: 'x',
            amount: 0.125,
          },
        })
        .from(descriptionEngineerSkillRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1,
          stagger: {
            axis: 'x',
            amount: 0.125,
          },
        });
    } else if (!!pathname.match(`${skillTechnologyRoute}$`)) {
      timeline
        .from(skillContainerRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(skillHeaderRef, {
          autoAlpha: 0,
          x: -100,
          duration: 2,
          stagger: {
            axis: 'x',
            amount: 0.5,
          },
        })
        .staggerFrom(
          technologyTitleRef,
          0.375,
          { autoAlpha: 0, x: -25, ease: Power1.easeOut },
          0.125
        )
        .staggerFrom(
          technologyImageRef,
          0.375,
          { autoAlpha: 0, x: -25, ease: Power1.easeOut },
          0.125
        );
    } else if (!!pathname.match(`${educationRoute}$`)) {
      timeline
        .from(educationContainerRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(aboutEducationBachelorContentRef, {
          autoAlpha: 0,
          x: -100,
          duration: 0.5,
        })
        .from(aboutEducationBachelorTitleRef, {
          autoAlpha: 0,
          x: -50,
          duration: 0.5,
        })
        .from(aboutEducationBachelorAttributesRef, {
          autoAlpha: 0,
          x: -50,
          duration: 0.5,
          stagger: {
            axis: 'x',
            amount: 0.125,
          },
        })
        .from(aboutEducationBachelorRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1,
          stagger: {
            axis: 'x',
            amount: 0.25,
          },
        })
        .from(aboutEducationExperienceContentRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1,
        })
        .from(aboutEducationCourseContentRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1,
        })
        .from(educationImageItemsRef, {
          autoAlpha: 0,
          x: -50,
          duration: 1,
          stagger: {
            axis: 'y',
            amount: 0.5,
          },
        })
        .from(aboutPersonalityContentRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1,
        })
        .staggerFrom(
          aboutPersonalityBoxRef,
          0.5,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        );
    } else if (!!pathname.match(`${projectRoute}$`)) {
      timeline
        .from(projectContainerRef, {
          delay,
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 0.5,
        })
        .from(aboutThesisProjectContentRef, {
          autoAlpha: 0,
          x: -100,
          duration: 0.25,
        })
        .from(aboutThesisProjectTitleRef, {
          autoAlpha: 0,
          x: -50,
          duration: 0.25,
        })
        .from(aboutThesisProjectAttributesRef, {
          autoAlpha: 0,
          x: -50,
          duration: 1,
          stagger: {
            axis: 'x',
            amount: 0.25,
          },
        })
        .from(aboutThesisProjectRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1,
          stagger: {
            axis: 'x',
            amount: 0.5,
          },
        })
        .from(aboutCourseProjectRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1,
        })
        .from(aboutExperienceProjectRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1.5,
        })
        .from(aboutProjectAchievementContentRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1.5,
        });
    } else if (!!pathname.match(`${summaryRoute}$`)) {
      timeline
        .from(summaryContainerRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(aboutSummaryTitleRef, {
          autoAlpha: 0,
          x: -50,
          duration: 1,
          stagger: {
            axis: 'x',
            amount: 0.5,
          },
        })
        .from(aboutSummaryRef, {
          autoAlpha: 0,
          x: -100,
          duration: 1,
          stagger: {
            amount: 0.75,
          },
        });
    } else if (
      !!pathname.match(RegExp(`${aboutRoute}${careerTimelineRoute}$`))
    ) {
      timeline
        .from(aboutPageRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(aboutDropdownContainerRef, {
          yPercent: -40,
          autoAlpha: 0,
          duration: 0.5,
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
          duration: 0.5,
        })
        .from(aboutThokimanHeadColorContainerBelow, {
          autoAlpha: 0,
          display: 'block',
          duration: 0.5,
        })
        .from(careerTimelineHeaderContainerRef, {
          autoAlpha: 0,
          y: -100,
          duration: 0.5,
        })
        .from(careerTimelineHeaderSeparatorRef, {
          autoAlpha: 0,
          y: -100,
          duration: 0.5,
        })
        .staggerFrom(
          careerTimelineHeaderUpperLinkRef,
          2,
          { autoAlpha: 0, y: -25, ease: Power1.easeOut },
          0.125
        )
        .staggerFrom(
          careerTimelineHeaderBelowLinkRef,
          2,
          { autoAlpha: 0, y: -25, ease: Power1.easeOut },
          0.125
        )
        .from(aboutCareerTimelineTitleRef, {
          autoAlpha: 0,
          x: -100,
          duration: 0.6,
        })
        .from(careerTimelineTextContainerRef, {
          autoAlpha: 0,
          x: -50,
          duration: 1,
        })
        .from(aboutCareerTimelineElementRef, {
          autoAlpha: 0,
          x: -50,
          duration: 1,
          stagger: {
            axis: 'x',
            amount: 0.5,
          },
        })
        .from(aboutCareerTimelineRef, {
          autoAlpha: 0,
          x: -100,
          duration: 2.5,
          stagger: {
            amount: 1,
          },
        });
    }
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
    if (!!pathname.match(RegExp(`${engineerServiceRoute}$`))) {
      timeline
        .from(rightServiceContainerRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(serviceGeneralContentTitleRef, {
          yPercent: 20,
          autoAlpha: 0,
          ease: 'power4.out',
          skewY: -6,
          duration: 1.5,
        })
        .staggerFrom(
          serviceGeneralContentDescriptionRef,
          0.75,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        )
        .from(serviceJobDetailRef, {
          x: -100,
          autoAlpha: 0,
          duration: 0.5,
        })
        .staggerFrom(
          serviceIconRef,
          0.75,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        );
    } else if (!!pathname.match(RegExp(`${devServiceRoute}$`))) {
      timeline
        .from(rightServiceContainerRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(serviceGeneralContentTitleRef, {
          yPercent: 20,
          autoAlpha: 0,
          ease: 'power4.out',
          skewY: -6,
          duration: 1.5,
        })
        .staggerFrom(
          serviceGeneralContentDescriptionRef,
          0.75,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        )
        .staggerFrom(
          serviceJobDetailRef,
          1,
          {
            yPercent: 20,
            autoAlpha: 0,
            ease: 'power4.out',
            skewY: -6,
          },
          0.125
        )
        .staggerFrom(
          serviceIconRef,
          0.75,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        );
    } else if (!!pathname.match(RegExp(`${photoServiceRoute}$`))) {
      timeline
        .from(rightServiceContainerRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(serviceUrlGeneralContentTitleRef, {
          yPercent: 20,
          autoAlpha: 0,
          ease: 'power4.out',
          skewY: -6,
          duration: 1.5,
        })
        .staggerFrom(
          serviceUrlGeneralContentDescriptionRef,
          0.75,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        )
        .staggerFrom(
          serviceIconRef,
          0.75,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        )
        .from(serviceStockPhotosTitleRef, {
          yPercent: 20,
          autoAlpha: 0,
          ease: 'power4.out',
          skewY: -6,
          duration: 1.5,
        })
        .staggerFrom(
          serviceUrlIconRef,
          0.75,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        );
    } else if (!!pathname.match(RegExp(`${artServiceRoute}$`))) {
      timeline
        .from(rightServiceContainerRef, {
          rotateY: 100,
          autoAlpha: 0,
          transformOrigin: 'left',
          duration: 1,
        })
        .from(serviceGeneralContentTitleRef, {
          yPercent: 20,
          autoAlpha: 0,
          ease: 'power4.out',
          skewY: -6,
          duration: 1.5,
        })
        .staggerFrom(
          serviceGeneralContentDescriptionRef,
          0.75,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        )
        .staggerFrom(
          serviceIconRef,
          0.75,
          { autoAlpha: 0, x: -50, ease: Power1.easeOut },
          0.125
        );
    }
  }

  return timeline;
};

export const getOutDefaultTimeline = (
  node,
  delay,
  pathname,
  routes,
  isHeaderMorphingActive
) => {
  const timeline = gsap.timeline({ paused: true });
  const footerGeneralRef = node.querySelector('.footer-general');

  timeline.to(footerGeneralRef, {
    display: 'none',
    yPercent: 10,
    autoAlpha: 0,
    ease: Power1.easeOut,
    duration: 1.5,
  });

  return timeline;
};
