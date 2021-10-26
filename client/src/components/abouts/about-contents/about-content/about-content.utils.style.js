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

export const measureRightPageContainerProps = (viewWidth, viewHeight) => {
  let rightPageContainerProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('about-content', 1);
    rightPageContainerProps = {
      top: 0,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('about-content', 2);
    rightPageContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('about-content', 3);
    rightPageContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('about-content', 4);
    rightPageContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('about-content', 5);
    rightPageContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('about-content', 6);
    rightPageContainerProps = {
      top: 5,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('about-content', 7);
    rightPageContainerProps = {
      top: 5,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('about-content', 8);
    rightPageContainerProps = {
      top: 5,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('about-content', 9);
    rightPageContainerProps = {
      top: 5,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('about-content', 10);
    rightPageContainerProps = {
      top: 5,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('about-content', 11);
    rightPageContainerProps = {
      top: 5,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('about-content', 12);
    rightPageContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize3_6(viewWidth, viewHeight)) {
    console.log('about-content', 13);
    rightPageContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('about-content', 14);
    rightPageContainerProps = {
      top: 5,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('about-content', 15);
    rightPageContainerProps = {
      top: 5,
    };
  } else {
    console.log('about-content', 16);
    rightPageContainerProps = {
      top: 18,
    };
  }

  return rightPageContainerProps;
};
