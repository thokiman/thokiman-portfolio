import {
  hasScreenSize1,
  hasScreenSize2,
  hasScreenSize3_1,
  hasScreenSize3_2,
  hasScreenSize3_3,
  hasScreenSize3_4,
  hasScreenSize3_5,
  hasScreenSize3_6,
  hasScreenSize4,
  hasScreenSize5,
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

  switch (pathname) {
    case aboutRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 140;
      } else if (hasScreenSize2(viewWidth)) {
        height = 140;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 140;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 150;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 140;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 140;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 140;
      } else if (hasScreenSize5(viewWidth)) {
        height = 140;
      } else {
        height = 140;
      }
      return height;
    case skillRoute:
    case aboutVisualArtSkillRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 300;
      } else if (hasScreenSize2(viewWidth)) {
        height = 330;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 300;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 270;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 320;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 350;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 400;
      } else if (hasScreenSize5(viewWidth)) {
        height = 320;
      } else {
        height = 330;
      }
      return height;
    case aboutEngineerSkillRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 110;
      } else if (hasScreenSize2(viewWidth)) {
        height = 120;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 95;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 100;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 100;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 105;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 110;
      } else if (hasScreenSize5(viewWidth)) {
        height = 100;
      } else {
        height = 105;
      }
      return height;
    case aboutTechnologySkillRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 485;
      } else if (hasScreenSize2(viewWidth)) {
        height = 600;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 555;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 565;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 595;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 650;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 710;
      } else if (hasScreenSize5(viewWidth)) {
        height = 565;
      } else {
        height = 607.5;
      }
      return height;
    case educationRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 1210;
      } else if (hasScreenSize2(viewWidth)) {
        height = 1260;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 880;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 800;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 985;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 1000;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 1030;
      } else if (hasScreenSize5(viewWidth)) {
        height = 810;
      } else {
        height = 996.9;
      }
      return height;
    case projectRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 1320;
      } else if (hasScreenSize2(viewWidth)) {
        height = 1380;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 970;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 920;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 1085;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 1110;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 1140;
      } else if (hasScreenSize5(viewWidth)) {
        height = 910;
      } else {
        height = 1107.5;
      }
      return height;
    case summaryRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 300;
      } else if (hasScreenSize2(viewWidth)) {
        height = 305;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 230;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 215;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 250;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 245;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 245;
      } else if (hasScreenSize5(viewWidth)) {
        height = 205;
      } else {
        height = 249.4;
      }
      return height;
    case aboutRoute.concat('', timelineCareerRoute):
      if (hasScreenSize1(viewWidth)) {
        height = 290;
      } else if (hasScreenSize2(viewWidth)) {
        height = 400;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 390;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        height = 430;
      } else if (hasScreenSize3_6(viewWidth, viewHeight)) {
        height = 505;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 600;
      } else if (hasScreenSize5(viewWidth)) {
        height = 530;
      } else {
        height = 458.3;
      }

      return height;
    default:
      return 800;
  }
};
