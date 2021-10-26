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

export const measureServiceIsNotActivated = (viewWidth, viewHeight) => {
  let serviceIsNotActivatedProps;

  if (hasScreenSize1(viewWidth)) {
    serviceIsNotActivatedProps = {
      top: 30,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    serviceIsNotActivatedProps = {
      top: 41,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    serviceIsNotActivatedProps = {
      top: 36.5,
      left: 6,
      fontSize: 8,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    serviceIsNotActivatedProps = {
      top: 37,
      left: 6,
      fontSize: 9,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    serviceIsNotActivatedProps = {
      top: 40,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    serviceIsNotActivatedProps = {
      top: 44,
      left: 6,
      fontSize: 6,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    serviceIsNotActivatedProps = {
      top: 50,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize5(viewWidth)) {
    serviceIsNotActivatedProps = {
      top: 43.5,
      left: 6,
      fontSize: 12,
    };
  } else {
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
  const serviceOffset = 100;
  const engineerOffset = 50;
  const artOffset = 50;
  const devOffset = 50;
  const photoOffset = 50;

  switch (pathname) {
    case serviceRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('service route', 1);
        height = 140 + serviceOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('service route', 2);
        height = 140 + serviceOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('service route', 3);
        height = 140 + serviceOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('service route', 4);
        height = 140 + serviceOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('service route', 5);
        height = 140 + serviceOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('service route', 6);
        height = 140 + serviceOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('service route', 7);
        height = 140 + serviceOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('service route', 8);
        height = 100 + serviceOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('service route', 9);
        height = 120 + serviceOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('service route', 10);
        height = 140 + serviceOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('service route', 11);
        height = 140 + serviceOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('service route', 12);
        height = 160 + serviceOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('service route', 13);
        height = 80 + serviceOffset;
      } else {
        console.log('service route', 14);
        height = 300;
      }
      return height;

    case engineerRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('engineer route', 1);
        height = 295 + engineerOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('engineer route', 2);
        height = 295 + engineerOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('engineer route', 3);
        height = 295 + engineerOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('engineer route', 4);
        height = 295 + engineerOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('engineer route', 5);
        height = 340 + engineerOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('engineer route', 6);
        height = 320 + engineerOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('engineer route', 7);
        height = 240 + engineerOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('engineer route', 8);
        height = 223 + engineerOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('engineer route', 9);
        height = 270 + engineerOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('engineer route', 10);
        height = 280 + engineerOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('engineer route', 11);
        height = 255 + engineerOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('engineer route', 12);
        height = 290 + engineerOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('engineer route', 13);
        height = 280 + engineerOffset;
      } else {
        console.log('engineer route', 14);
        height = 450;
      }

      return height;
    case artRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('art route', 1);
        height = 265 + artOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('art route', 2);
        height = 265 + artOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('art route', 3);
        height = 265 + artOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('art route', 4);
        height = 265 + artOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('art route', 5);
        height = 310 + artOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('art route', 6);
        height = 280 + artOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('art route', 7);
        height = 195 + artOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('art route', 8);
        height = 195 + artOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('art route', 9);
        height = 225 + artOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('art route', 10);
        height = 240 + artOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('art route', 11);
        height = 220 + artOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('art route', 12);
        height = 250 + artOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('art route', 13);
        height = 215 + artOffset;
      } else {
        console.log('art route', 14);
        height = 410; // need adjust
      }
      return height;
    case devRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('dev route', 1);
        height = 400 + devOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('dev route', 2);
        height = 400 + devOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('dev route', 3);
        height = 400 + devOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('dev route', 4);
        height = 400 + devOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('dev route', 5);
        height = 450 + devOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('dev route', 6);
        height = 400 + devOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('dev route', 7);
        height = 300 + devOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('dev route', 8);
        height = 250 + devOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('dev route', 9);
        height = 330 + devOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('dev route', 10);
        height = 330 + devOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('dev route', 11);
        height = 318 + devOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('dev route', 12);
        height = 330 + devOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('dev route', 13);
        height = 350 + devOffset;
      } else {
        console.log('dev route', 14);
        height = 500;
      }
      return height;
    case photoRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log(' photoroute', 1);
        height = 370 + photoOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log(' photoroute', 2);
        height = 370 + photoOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log(' photoroute', 3);
        height = 370 + photoOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log(' photoroute', 4);
        height = 370 + photoOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log(' photoroute', 5);
        height = 410 + photoOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log(' photoroute', 6);
        height = 400 + photoOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log(' photoroute', 7);
        height = 265 + photoOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log(' photoroute', 8);
        height = 260 + photoOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log(' photoroute', 9);
        height = 370;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log(' photoroute', 10);
        height = 330 + photoOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log(' photoroute', 11);
        height = 305 + photoOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log(' photoroute', 12);
        height = 335 + photoOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log(' photoroute', 13);
        height = 310 + photoOffset;
      } else {
        console.log(' photo route', 14);
        height = 535;
      }
      return height;

    default:
      return 800;
  }
};
