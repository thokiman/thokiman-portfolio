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

export const measureServiceIsNotActivated = (viewWidth, viewHeight) => {
  let serviceIsNotActivatedProps;

  if (hasScreenSize1(viewWidth)) {
    console.log(1);
    serviceIsNotActivatedProps = {
      top: 30,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log(2);
    serviceIsNotActivatedProps = {
      top: 41,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log(3);
    serviceIsNotActivatedProps = {
      top: 36.5,
      left: 6,
      fontSize: 8,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log(4);
    serviceIsNotActivatedProps = {
      top: 37,
      left: 6,
      fontSize: 9,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log(5);
    serviceIsNotActivatedProps = {
      top: 40,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log(6);
    serviceIsNotActivatedProps = {
      top: 44,
      left: 6,
      fontSize: 6,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log(7);
    serviceIsNotActivatedProps = {
      top: 50,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log(8);
    serviceIsNotActivatedProps = {
      top: 43.5,
      left: 6,
      fontSize: 12,
    };
  } else {
    console.log(9);
    serviceIsNotActivatedProps = {
      top: 36,
      left: 6,
      fontSize: 10,
    };
  }
  return serviceIsNotActivatedProps;
};

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
