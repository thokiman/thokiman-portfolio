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

export const measureContactHeight = (
  pathname,
  viewWidth,
  viewHeight,
  contactRoute
) => {
  let height;

  switch (pathname) {
    case contactRoute:
      if (hasScreenSize1(viewWidth)) {
        height = 360;
      } else if (hasScreenSize2(viewWidth)) {
        height = 350;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        height = 340;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        height = 350;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        height = 360;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        height = 400;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        height = 420;
      } else if (hasScreenSize5(viewWidth)) {
        height = 350;
      } else {
        height = 350;
      }
      return height;

    default:
      return 420;
  }
};
