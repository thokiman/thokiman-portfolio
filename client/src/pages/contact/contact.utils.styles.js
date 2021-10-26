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

export const measureContactHeight = (
  pathname,
  viewWidth,
  viewHeight,
  contactRoute
) => {
  let height;
  const contactOffset = 100;
  switch (pathname) {
    case contactRoute:
      if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
        console.log('contact', 1);
        height = 360 + contactOffset;
      } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
        console.log('contact', 2);
        height = 360 + contactOffset;
      } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
        console.log('contact', 3);
        height = 360 + contactOffset;
      } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
        console.log('contact', 4);
        height = 360 + contactOffset;
      } else if (hasScreenSize1(viewWidth)) {
        console.log('contact', 5);
        height = 360 + contactOffset;
      } else if (hasScreenSize2(viewWidth)) {
        console.log('contact', 6);
        height = 350 + contactOffset;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log('contact', 7);
        height = 340 + contactOffset;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log('contact', 8);
        height = 350 + contactOffset;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log('contact', 9);
        height = 36 + contactOffset;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log('contact', 10);
        height = 400 + contactOffset;
      } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
        console.log('contact', 11);
        height = 400 + contactOffset;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log('contact', 12);
        height = 420 + contactOffset;
      } else if (hasScreenSize5(viewWidth)) {
        console.log('contact', 13);
        height = 350 + contactOffset;
      } else {
        console.log('contact', 14);
        height = 350; // need adjust
      }
      return height;

    default:
      return 420;
  }
};

export const measureContactIsNotActivated = (viewWidth, viewHeight) => {
  let contactIsNotActivatedProps;

  if (hasScreenSize1(viewWidth)) {
    contactIsNotActivatedProps = {
      top: 37,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    contactIsNotActivatedProps = {
      top: 49,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    contactIsNotActivatedProps = {
      top: 45,
      left: 6,
      fontSize: 8,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    contactIsNotActivatedProps = {
      top: 45,
      left: 6,
      fontSize: 9,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    contactIsNotActivatedProps = {
      top: 49,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    contactIsNotActivatedProps = {
      top: 52,
      left: 6,
      fontSize: 6,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    contactIsNotActivatedProps = {
      top: 60,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize5(viewWidth)) {
    contactIsNotActivatedProps = {
      top: 38,
      left: 6,
      fontSize: 10,
    };
  } else {
    contactIsNotActivatedProps = {
      top: 38,
      left: 6,
      fontSize: 10,
    };
  }
  return contactIsNotActivatedProps;
};
