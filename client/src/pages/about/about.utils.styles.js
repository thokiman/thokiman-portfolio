import {
  hasScreenSize1,
  hasScreenSize1_1,
  hasScreenSize1_2,
  hasScreenSize1_3,
  hasScreenSize2,
  hasScreenSize3_1,
  hasScreenSize3_2,
  hasScreenSize3_3,
  hasScreenSize3_4,
  hasScreenSize3_5,
  hasScreenSize4,
  hasScreenSize5,
  hasScreenSizeWindow_1,
} from '../../utils/common.component.utils';

export const measureAbouteHeight = (
  pathname,
  viewWidth,
  viewHeight,
  aboutRoute,
  skillRoute,
  aboutVisualArtSkillRoute,
  aboutEngineerSkillRoute,
  aboutTechnologySkillRoute,
  educationRoute,
  projectRoute,
  summaryRoute,
  timelineCareerRoute
) => {
  let height;
  const aboutOffset = 100;

  const aboutVisualArtSkillOffset = 100;
  const aboutEngineerSkillOffset = 100;
  const aboutTechnologySkillOffset = 100;
  const aboutEducationOffset = 100;
  const aboutProjectOffset = 100;
  const aboutSummaryOffset = 100;
  const aboutCareerTimelineOffset = 100;
  switch (pathname) {
    case aboutRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('about-route', 1);
        height = 140 + aboutOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('about-route', 2);
        height = 140 + aboutOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('about-route', 3);
        height = 140 + aboutOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('about-route', 4);
        height = 140 + aboutOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('about-route', 5);
        height = 160 + aboutOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('about-route', 6);
        height = 160 + aboutOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('about-route', 7);
        height = 160 + aboutOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('about-route', 8);
        height = 160 + aboutOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('about-route', 9);
        height = 160 + aboutOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('about-route', 10);
        height = 160 + aboutOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('about-route', 11);
        height = 140 + aboutOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('about-route', 12);
        height = 160 + aboutOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('about-route', 13);
        height = 160 + aboutOffset;
      } else {
        console.log('about-route', 14);
        height = 250;
      }
      return height;
    case skillRoute:
    case aboutVisualArtSkillRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 1);
        height = 300 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 2);
        height = 300 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 3);
        height = 300 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 4);
        height = 300 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('skill-route, visual-art-skill-route', 5);
        height = 1000 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('skill-route, visual-art-skill-route', 6);
        height = 1000 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 7);
        height = 650 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 8);
        height = 600 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 9);
        height = 750 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 10);
        height = 750 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 11);
        height = 320 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('skill-route, visual-art-skill-route', 12);
        height = 720 + aboutVisualArtSkillOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('skill-route, visual-art-skill-route', 13);
        height = 550 + aboutVisualArtSkillOffset;
      } else {
        console.log('skill-route, visual-art-skill-route', 14);
        height = 1400;
      }
      return height;
    case aboutEngineerSkillRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 1);
        height = 110 + aboutEngineerSkillOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 2);
        height = 110 + aboutEngineerSkillOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 3);
        height = 110 + aboutEngineerSkillOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 4);
        height = 110 + aboutEngineerSkillOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('engineer-skill-route', 5);
        height = 110 + aboutEngineerSkillOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('engineer-skill-route', 6);
        height = 120 + aboutEngineerSkillOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 7);
        height = 95 + aboutEngineerSkillOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 8);
        height = 100 + aboutEngineerSkillOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 9);
        height = 100 + aboutEngineerSkillOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 10);
        height = 105 + aboutEngineerSkillOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 11);
        height = 105 + aboutEngineerSkillOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('engineer-skill-route', 12);
        height = 110 + aboutEngineerSkillOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('engineer-skill-route', 13);
        height = 140 + aboutEngineerSkillOffset;
      } else {
        console.log('engineer-skill-route', 14);
        height = 240;
      }
      return height;
    case aboutTechnologySkillRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('technology-route', 1);
        height = 585 + aboutTechnologySkillOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('technology-route', 2);
        height = 585 + aboutTechnologySkillOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('technology-route', 3);
        height = 585 + aboutTechnologySkillOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('technology-route', 4);
        height = 585 + aboutTechnologySkillOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('technology-route', 5);
        height = 585 + aboutTechnologySkillOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('technology-route', 6);
        height = 700 + aboutTechnologySkillOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('technology-route', 7);
        height = 655 + aboutTechnologySkillOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('technology-route', 8);
        height = 665;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('technology-route', 9);
        height = 695 + aboutTechnologySkillOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('technology-route', 10);
        height = 750 + aboutTechnologySkillOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('technology-route', 11);
        height = 750 + aboutTechnologySkillOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('technology-route', 12);
        height = 710 + aboutTechnologySkillOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('technology-route', 13);
        height = 665 + aboutTechnologySkillOffset;
      } else {
        console.log('technology-route', 14);
        height = 900;
      }
      return height;
    case educationRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('education-route', 1);
        height = 1210 + aboutEducationOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('education-route', 2);
        height = 1210 + aboutEducationOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('education-route', 3);
        height = 1210 + aboutEducationOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('education-route', 4);
        height = 1210 + aboutEducationOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('education-route', 5);
        height = 1210 + aboutEducationOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('education-route', 6);
        height = 1260;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('education-route', 7);
        height = 880 + aboutEducationOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('education-route', 8);
        height = 800 + aboutEducationOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('education-route', 9);
        height = 985 + aboutEducationOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('education-route', 10);
        height = 1000 + aboutEducationOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('education-route', 11);
        height = 1000 + aboutEducationOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('education-route', 12);
        height = 1030 + aboutEducationOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('education-route', 13);
        height = 810 + aboutEducationOffset;
      } else {
        console.log('education-route', 14);
        height = 1650;
      }
      return height;
    case projectRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('project-route', 1);
        height = 1320 + aboutProjectOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('project-route', 2);
        height = 1320 + aboutProjectOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('project-route', 3);
        height = 1320 + aboutProjectOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('project-route', 4);
        height = 1320 + aboutProjectOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('project-route', 5);
        height = 1320 + aboutProjectOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('project-route', 6);
        height = 1380 + aboutProjectOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('project-route', 7);
        height = 970 + aboutProjectOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('project-route', 8);
        height = 920 + aboutProjectOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('project-route', 9);
        height = 1085 + aboutProjectOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('project-route', 10);
        height = 1110 + aboutProjectOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('project-route', 11);
        height = 1110 + aboutProjectOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('project-route', 12);
        height = 1140 + aboutProjectOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('project-route', 13);
        height = 910 + aboutProjectOffset;
      } else {
        console.log('project-route', 14);
        height = 1800;
      }
      return height;
    case summaryRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('sumarry-route', 1);
        height = 290 + aboutSummaryOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('sumarry-route', 2);
        height = 290 + aboutSummaryOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('sumarry-route', 3);
        height = 290 + aboutSummaryOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('sumarry-route', 4);
        height = 290 + aboutSummaryOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('sumarry-route', 5);
        height = 290 + aboutSummaryOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('sumarry-route', 6);
        height = 305 + aboutSummaryOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('sumarry-route', 7);
        height = 230 + aboutSummaryOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('sumarry-route', 8);
        height = 215 + aboutSummaryOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('sumarry-route', 9);
        height = 250 + aboutSummaryOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('sumarry-route', 10);
        height = 245 + aboutSummaryOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('sumarry-route', 11);
        height = 245 + aboutSummaryOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('sumarry-route', 12);
        height = 245 + aboutSummaryOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('sumarry-route', 13);
        height = 205 + aboutSummaryOffset;
      } else {
        console.log('sumarry-route', 14);
        height = 400;
      }
      return height;
    case aboutRoute.concat('', timelineCareerRoute):
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('timeline-route', 1);
        height = 290 + aboutCareerTimelineOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('timeline-route', 2);
        height = 290 + aboutCareerTimelineOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('timeline-route', 3);
        height = 290 + aboutCareerTimelineOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('timeline-route', 4);
        height = 290 + aboutCareerTimelineOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('timeline-route', 5);
        height = 290 + aboutCareerTimelineOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('timeline-route', 6);
        height = 400 + aboutCareerTimelineOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('timeline-route', 7);
        height = 390 + aboutCareerTimelineOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('timeline-route', 8);
        height = 215 + aboutCareerTimelineOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('timeline-route', 9);
        height = 215 + aboutCareerTimelineOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('timeline-route', 10);
        height = 215 + aboutCareerTimelineOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('timeline-route', 11);
        height = 430 + aboutCareerTimelineOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('timeline-route', 12);
        height = 600 + aboutCareerTimelineOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('timeline-route', 13);
        height = 530 + aboutCareerTimelineOffset;
      } else {
        console.log('timeline-route', 14);
        height = 650;
      }

      return height;
    default:
      return 1800;
  }
};

export const measureAboutIsNotActivated = (viewWidth, viewHeight) => {
  let aboutIsNotActivatedProps;

  if (hasScreenSize1(viewWidth)) {
    aboutIsNotActivatedProps = {
      top: 18,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    aboutIsNotActivatedProps = {
      top: 22,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    aboutIsNotActivatedProps = {
      top: 20.5,
      left: 6,
      fontSize: 8,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    aboutIsNotActivatedProps = {
      top: 20,
      left: 6,
      fontSize: 9,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    aboutIsNotActivatedProps = {
      top: 23,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    aboutIsNotActivatedProps = {
      top: 23,
      left: 6,
      fontSize: 6,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    aboutIsNotActivatedProps = {
      top: 27,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize5(viewWidth)) {
    aboutIsNotActivatedProps = {
      top: 23,
      left: 6,
      fontSize: 12,
    };
  } else {
    aboutIsNotActivatedProps = {
      top: 19.5,
      left: 6,
      fontSize: 10,
    };
  }
  return aboutIsNotActivatedProps;
};
