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

export const measureSummaryContainerProps = (viewWidth, viewHeight) => {
  const summaryContainerOffset = 5;
  let summaryContainerProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('about-summary', 1);
    summaryContainerProps = {
      top: 0,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('about-summary', 2);
    summaryContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('about-summary', 3);
    summaryContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('about-summary', 4);
    summaryContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('about-summary', 5);
    summaryContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('about-summary', 6);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('about-summary', 7);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('about-summary', 8);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('about-summary', 9);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('about-summary', 10);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('about-summary', 11);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('about-summary', 12);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else if (hasScreenSize3_6(viewWidth, viewHeight)) {
    console.log('about-summary', 13);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('about-summary', 14);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('about-summary', 15);
    summaryContainerProps = {
      top: 0 + summaryContainerOffset,
    };
  } else {
    console.log('about-summary', 16);
    summaryContainerProps = {
      top: 20,
    };
  }

  return summaryContainerProps;
};
