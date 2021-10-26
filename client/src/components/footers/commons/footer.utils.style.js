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
  hasScreenSize3_6,
  hasScreenSize4,
  hasScreenSize5,
  hasScreenSizeWindow,
} from '../../../utils/common.component.utils';

export const measureProfileFooterIconStyles = (viewWidth, viewHeight) => {
  let profileFooterIconProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize1(viewWidth)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize2(viewWidth)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_6(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize5(viewWidth)) {
    profileFooterIconProps = {
      width: 35,
    };
  } else {
    profileFooterIconProps = {
      width: 35,
    };
  }
  return profileFooterIconProps;
};
export const measureFooterGeneralIconStyles = (viewWidth, viewHeight) => {
  let footerGeneralIconProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 15,
      height: 7.5,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 10,
      height: 7,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 5,
      height: 7,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 5,
      height: 7,
    };
  } else if (hasScreenSize1(viewWidth)) {
    footerGeneralIconProps = {
      width: 13,
      height: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    footerGeneralIconProps = {
      width: 12,
      height: 7,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 15,
      height: 7,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 16,
      height: 7,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 14,
      height: 7,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 14,
      height: 7,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 14,
      height: 7,
    };
  } else if (hasScreenSize3_6(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 14,
      height: 7,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    footerGeneralIconProps = {
      width: 5,
      height: 7,
    };
  } else if (hasScreenSize5(viewWidth)) {
    footerGeneralIconProps = {
      width: 5,
      height: 7,
    };
  } else {
    footerGeneralIconProps = {
      width: 11,
      height: 6.5,
    };
  }
  return footerGeneralIconProps;
};
