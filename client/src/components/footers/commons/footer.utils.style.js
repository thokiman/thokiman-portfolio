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
    console.log(1);
    footerGeneralIconProps = {
      width: 15,
      height: 7.5,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log(2);
    footerGeneralIconProps = {
      width: 10,
      height: 6,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log(3);
    footerGeneralIconProps = {
      width: 6,
      height: 7,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log(4);
    footerGeneralIconProps = {
      width: 6,
      height: 7,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log(5);
    footerGeneralIconProps = {
      width: 13,
      height: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log(6);
    footerGeneralIconProps = {
      width: 14,
      height: 7,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log(7);
    footerGeneralIconProps = {
      width: 17,
      height: 6,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log(8);
    footerGeneralIconProps = {
      width: 18,
      height: 6,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log(9);
    footerGeneralIconProps = {
      width: 17,
      height: 6,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log(10);
    footerGeneralIconProps = {
      width: 17,
      height: 6,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log(11);
    footerGeneralIconProps = {
      width: 14,
      height: 7,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log(12);
    footerGeneralIconProps = {
      width: 6,
      height: 7,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log(13);
    footerGeneralIconProps = {
      width: 6,
      height: 7,
    };
  } else {
    console.log(14);
    footerGeneralIconProps = {
      width: 12.5,
      height: 6.5,
    };
  }
  return footerGeneralIconProps;
};
