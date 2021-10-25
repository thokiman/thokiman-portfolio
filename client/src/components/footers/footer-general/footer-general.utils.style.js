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
    console.log('profile-footer', 1);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('profile-footer', 2);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('profile-footer', 3);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('profile-footer', 4);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('profile-footer', 5);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('profile-footer', 6);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('profile-footer', 7);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('profile-footer', 8);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('profile-footer', 9);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('profile-footer', 10);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('profile-footer', 11);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize3_6(viewWidth, viewHeight)) {
    console.log('profile-footer', 12);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('profile-footer', 13);
    profileFooterIconProps = {
      width: 35,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('profile-footer', 14);
    profileFooterIconProps = {
      width: 35,
    };
  } else {
    console.log('profile-footer', 15);
    profileFooterIconProps = {
      width: 35,
    };
  }
  return profileFooterIconProps;
};
export const measureFooterGeneralIconStyles = (viewWidth, viewHeight) => {
  let footerGeneralIconProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 1);
    footerGeneralIconProps = {
      width: 15,
      height: 5,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 2);
    footerGeneralIconProps = {
      width: 10,
      height: 6,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 3);
    footerGeneralIconProps = {
      width: 5,
      height: 7,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 4);
    footerGeneralIconProps = {
      width: 5,
      height: 7,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('footer-general-icon', 5);
    footerGeneralIconProps = {
      width: 11,
      height: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('footer-general-icon', 6);
    footerGeneralIconProps = {
      width: 12,
      height: 7,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 7);
    footerGeneralIconProps = {
      width: 15,
      height: 6,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 8);
    footerGeneralIconProps = {
      width: 16,
      height: 6,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 9);
    footerGeneralIconProps = {
      width: 14,
      height: 6,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 10);
    footerGeneralIconProps = {
      width: 14,
      height: 6,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 11);
    footerGeneralIconProps = {
      width: 15,
      height: 5,
    };
  } else if (hasScreenSize3_6(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 12);
    footerGeneralIconProps = {
      width: 15,
      height: 5,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('footer-general-icon', 13);
    footerGeneralIconProps = {
      width: 5,
      height: 7,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('footer-general-icon', 14);
    footerGeneralIconProps = {
      width: 5,
      height: 7,
    };
  } else {
    console.log('footer-general-icon', 15);
    footerGeneralIconProps = {
      width: 15,
      height: 5,
    };
  }
  return footerGeneralIconProps;
};
