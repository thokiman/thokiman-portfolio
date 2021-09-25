import {
  hasScreenSize1,
  hasScreenSize2,
  hasScreenSize3_1,
  hasScreenSize3_2,
  hasScreenSize3_3,
  hasScreenSize3_4,
  hasScreenSize4,
  hasScreenSize5,
} from '../../../utils/common.component.utils.js';

export const measureSizeSpinnerLoading = (viewWidth, viewHeight) => {
  let height;
  let width;

  if (hasScreenSize1(viewWidth)) {
    height = 300;
    width = 300;
  } else if (hasScreenSize2(viewWidth)) {
    height = 150;
    width = 150;
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    height = 140;
    width = 140;
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    height = 150;
    width = 150;
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    height = 130;
    width = 130;
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    height = 120;
    width = 120;
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    height = 100;
    width = 100;
  } else if (hasScreenSize5(viewWidth)) {
    height = 100;
    width = 100;
  } else {
    height = 200;
    width = 200;
  }
  return {
    widthSpinner: width,
    heightSpinner: height,
  };
};
