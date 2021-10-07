import {
  hasScreenSize1,
  hasScreenSize2,
  hasScreenSize3_1,
  hasScreenSize3_2,
  hasScreenSize3_3,
  hasScreenSize3_4,
  hasScreenSize4,
  hasScreenSize5,
} from 'utils/common.component.utils';

export const measureHomepageIsNotActivated = (viewWidth, viewHeight) => {
  let homeepageIsNotActivatedProps;

  if (hasScreenSize1(viewWidth)) {
    console.log(1);
    homeepageIsNotActivatedProps = {
      top: 10.5,
      left: -14,
      fontSize: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log(2);
    homeepageIsNotActivatedProps = {
      top: 13,
      left: -15,
      fontSize: 5,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log(3);
    homeepageIsNotActivatedProps = {
      top: 12,
      left: -12,
      fontSize: 8,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log(4);
    homeepageIsNotActivatedProps = {
      top: 12.5,
      left: -10,
      fontSize: 9,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log(5);
    homeepageIsNotActivatedProps = {
      top: 12.5,
      left: -13,
      fontSize: 7,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log(6);
    homeepageIsNotActivatedProps = {
      top: 14,
      left: -12,
      fontSize: 6,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log(7);
    homeepageIsNotActivatedProps = {
      top: 15,
      left: -14,
      fontSize: 5,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log(8);
    homeepageIsNotActivatedProps = {
      top: 13,
      left: -8,
      fontSize: 12,
    };
  } else {
    console.log(9);
    homeepageIsNotActivatedProps = {
      top: 10.5,
      left: -10,
      fontSize: 10,
    };
  }
  return homeepageIsNotActivatedProps;
};
