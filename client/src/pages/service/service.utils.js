import {
  hasScreenSize1,
  hasScreenSize2,
  hasScreenSize3_1,
  hasScreenSize3_2,
  hasScreenSize3_3,
  hasScreenSize3_4,
  hasScreenSize4,
  hasScreenSize5,
} from '../../utils/common.component.utils';

export const measureServiceHeight = (
  pathname,
  viewWidth,
  viewHeight,
  serviceRoute,
  engineerRoute,
  artRoute,
  devRoute,
  photoRoute
) => {
  let height;
  console.log('--', viewWidth);
  console.log(viewHeight);
  console.log('**', pathname);
  console.log('##', serviceRoute);
  console.log('##', engineerRoute);
  console.log('##', artRoute);
  console.log('##', devRoute);
  console.log('##', photoRoute);
  switch (pathname) {
    case serviceRoute:
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

    case engineerRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 295;
      } else if (hasScreenSize2(viewWidth)) {
        height = 295;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 225;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 223;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 255;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 255;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 269;
      } else if (hasScreenSize5(viewWidth)) {
        height = 253;
      } else {
        height = 255;
      }

      return height;
    case artRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 265;
      } else if (hasScreenSize2(viewWidth)) {
        height = 250;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 195;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 195;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 210;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 220;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 230;
      } else if (hasScreenSize5(viewWidth)) {
        height = 215;
      } else {
        height = 222.5;
      }
      return height;
    case devRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 400;
      } else if (hasScreenSize2(viewWidth)) {
        height = 373;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 263;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 260;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 315;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 318;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 318;
      } else if (hasScreenSize5(viewWidth)) {
        height = 353;
      } else {
        height = 309.4;
      }
      return height;
    case photoRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 370;
      } else if (hasScreenSize2(viewWidth)) {
        height = 360;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 265;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 260;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 305;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 305;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 320;
      } else if (hasScreenSize5(viewWidth)) {
        height = 310;
      } else {
        height = 311.9;
      }
      return height;

    default:
      return 800;
  }
};
