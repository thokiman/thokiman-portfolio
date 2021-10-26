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
} from 'utils/common.component.utils';

export const measureHomepageContainerProps = (viewWidth, viewHeight) => {
  const homepageOffset = 100;
  let homepageContainerProps;
  if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('homepage', 1);
    homepageContainerProps = {
      height: 500 + homepageOffset,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('homepage', 2);
    homepageContainerProps = {
      height: 400 + homepageOffset,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('homepage', 3);
    homepageContainerProps = {
      height: 520 + homepageOffset,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('homepage', 4);
    homepageContainerProps = {
      height: 520 + homepageOffset,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('homepage', 5);
    homepageContainerProps = {
      height: 400 + homepageOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('homepage', 6);
    homepageContainerProps = {
      height: 400 + homepageOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('homepage', 7);
    homepageContainerProps = {
      height: 400 + homepageOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('homepage', 8);
    homepageContainerProps = {
      height: 380 + homepageOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('homepage', 9);
    homepageContainerProps = {
      height: 400 + homepageOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('homepage', 10);
    homepageContainerProps = {
      height: 400 + homepageOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('homepage', 11);
    homepageContainerProps = {
      height: 360 + homepageOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('homepage', 12);
    homepageContainerProps = {
      height: 400 + homepageOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('homepage', 13);
    homepageContainerProps = {
      height: 380 + homepageOffset,
    };
  } else {
    console.log('homepage', 14);
    homepageContainerProps = {
      height: 440,
    };
  }
  return homepageContainerProps;
};

export const measureHomepageIsNotActivated = (viewWidth, viewHeight) => {
  let homeepageIsNotActivatedProps;

  if (hasScreenSize1(viewWidth)) {
    homeepageIsNotActivatedProps = {
      top: 10.5,
      left: -14,
      fontSize: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    homeepageIsNotActivatedProps = {
      top: 13,
      left: -15,
      fontSize: 5,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    homeepageIsNotActivatedProps = {
      top: 12,
      left: -12,
      fontSize: 8,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    homeepageIsNotActivatedProps = {
      top: 12.5,
      left: -10,
      fontSize: 9,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    homeepageIsNotActivatedProps = {
      top: 12.5,
      left: -13,
      fontSize: 7,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    homeepageIsNotActivatedProps = {
      top: 14,
      left: -12,
      fontSize: 6,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    homeepageIsNotActivatedProps = {
      top: 15,
      left: -14,
      fontSize: 5,
    };
  } else if (hasScreenSize5(viewWidth)) {
    homeepageIsNotActivatedProps = {
      top: 13,
      left: -8,
      fontSize: 12,
    };
  } else {
    homeepageIsNotActivatedProps = {
      top: 10.5,
      left: -10,
      fontSize: 10,
    };
  }
  return homeepageIsNotActivatedProps;
};
