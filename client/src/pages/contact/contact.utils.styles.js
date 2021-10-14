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

export const measureContactIsNotActivated = (viewWidth, viewHeight) => {
  let contactIsNotActivatedProps;

  if (hasScreenSize1(viewWidth)) {
    console.log(1);
    contactIsNotActivatedProps = {
      top: 37,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log(2);
    contactIsNotActivatedProps = {
      top: 49,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log(3);
    contactIsNotActivatedProps = {
      top: 45,
      left: 6,
      fontSize: 8,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log(4);
    contactIsNotActivatedProps = {
      top: 45,
      left: 6,
      fontSize: 9,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log(5);
    contactIsNotActivatedProps = {
      top: 49,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log(6);
    contactIsNotActivatedProps = {
      top: 52,
      left: 6,
      fontSize: 6,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log(7);
    contactIsNotActivatedProps = {
      top: 60,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log(8);
    contactIsNotActivatedProps = {
      top: 38,
      left: 6,
      fontSize: 10,
    };
  } else {
    console.log(9);
    contactIsNotActivatedProps = {
      top: 38,
      left: 6,
      fontSize: 10,
    };
  }
  return contactIsNotActivatedProps;
};
