import {
  hasScreenSize1,
  hasScreenSize2,
  hasScreenSize3_1,
  hasScreenSize3_2,
  hasScreenSize3_3,
  hasScreenSize3_4,
  hasScreenSize4,
  hasScreenSize5,
} from '../../../utils/common.component.utils';

export const measureSideBarOneStyles = (viewWidth, viewHeight) => {
  let sideBarOneProps;
  //left

  if (hasScreenSize1(viewWidth)) {
    sideBarOneProps = {
      top: 2.1,
      left: -2.5,
    };
  } else if (hasScreenSize2(viewWidth)) {
    sideBarOneProps = {
      top: 0.1,
      left: -1.4,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    sideBarOneProps = {
      top: 0.1,
      left: -1.4,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    sideBarOneProps = {
      top: 0.1,
      left: -1.4,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    sideBarOneProps = {
      top: 0.1,
      left: -1.4,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    sideBarOneProps = {
      top: 0.1,
      left: -1.4,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    sideBarOneProps = {
      top: 0.1,
      left: -1.4,
    };
  } else if (hasScreenSize5(viewWidth)) {
    sideBarOneProps = {
      top: 1,
      left: 1,
    };
  } else {
    sideBarOneProps = {
      top: 0.1,
      left: -1.4,
    };
  }
  return sideBarOneProps;
};

export const measureSideBarThreeStyles = (viewWidth, viewHeight) => {
  // right
  let sideBarThreeProps;

  if (hasScreenSize1(viewWidth)) {
    sideBarThreeProps = {
      top: 1.75,
      left: -1.6,
    };
  } else if (hasScreenSize2(viewWidth)) {
    sideBarThreeProps = {
      top: -0.3,
      left: -0.6,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    sideBarThreeProps = {
      top: -0.3,
      left: -0.6,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    sideBarThreeProps = {
      top: -0.3,
      left: -0.6,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    sideBarThreeProps = {
      top: -0.3,
      left: -0.6,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    sideBarThreeProps = {
      top: -0.3,
      left: -0.6,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    sideBarThreeProps = {
      top: -0.3,
      left: -0.6,
    };
  } else if (hasScreenSize5(viewWidth)) {
    sideBarThreeProps = {
      top: 0.7,
      left: 1.9,
    };
  } else {
    sideBarThreeProps = {
      top: -0.2,
      left: -0.4,
    };
  }
  return sideBarThreeProps;
};
