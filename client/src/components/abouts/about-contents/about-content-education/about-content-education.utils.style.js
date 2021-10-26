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
  hasScreenSizeWindow_1,
} from '../../../../utils/common.component.utils';

export const measureEducationContainerProps = (viewWidth, viewHeight) => {
  const educationContainerOffset = 5;
  let educationContainerProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('about-education', 1);
    educationContainerProps = {
      top: 0,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('about-education', 2);
    educationContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('about-education', 3);
    educationContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('about-education', 4);
    educationContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('about-education', 5);
    educationContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('about-education', 6);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('about-education', 7);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('about-education', 8);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('about-education', 9);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('about-education', 10);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('about-education', 11);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('about-education', 12);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else if (hasScreenSize3_6(viewWidth, viewHeight)) {
    console.log('about-education', 13);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('about-education', 14);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('about-education', 15);
    educationContainerProps = {
      top: 0 + educationContainerOffset,
    };
  } else {
    console.log('about-education', 16);
    educationContainerProps = {
      top: 20,
    };
  }

  return educationContainerProps;
};
