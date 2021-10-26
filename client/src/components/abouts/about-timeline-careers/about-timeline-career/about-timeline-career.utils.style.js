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
  hasScreenSizeWindow_1,
} from '../../../../utils/common.component.utils';

export const measureTimelineContainerProps = (viewWidth, viewHeight) => {
  const timelineContainerOffset = 15;
  let timelineContainerProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('about-timeline', 1);
    timelineContainerProps = {
      top: 0,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('about-timeline', 2);
    timelineContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('about-timeline', 3);
    timelineContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('about-timeline', 4);
    timelineContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('about-timeline', 5);
    timelineContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('about-timeline', 6);
    timelineContainerProps = {
      top: 0 + timelineContainerOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('about-timeline', 7);
    timelineContainerProps = {
      top: 0 + timelineContainerOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('about-timeline', 8);
    timelineContainerProps = {
      top: 0 + timelineContainerOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('about-timeline', 9);
    timelineContainerProps = {
      top: 0 + timelineContainerOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('about-timeline', 10);
    timelineContainerProps = {
      top: 0 + timelineContainerOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('about-timeline', 11);
    timelineContainerProps = {
      top: 0 + timelineContainerOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('about-timeline', 12);
    timelineContainerProps = {
      top: 0 + timelineContainerOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('about-timeline', 14);
    timelineContainerProps = {
      top: 0 + timelineContainerOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('about-timeline', 15);
    timelineContainerProps = {
      top: 0 + timelineContainerOffset,
    };
  } else {
    console.log('about-timeline', 16);
    timelineContainerProps = {
      top: 25,
    };
  }

  return timelineContainerProps;
};
