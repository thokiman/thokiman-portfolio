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

export const measureProjectContainerProps = (viewWidth, viewHeight) => {
  const projectContainerOffset = 5;
  let projectContainerProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('about-project', 1);
    projectContainerProps = {
      top: 0,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('about-project', 2);
    projectContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('about-project', 3);
    projectContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('about-project', 4);
    projectContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('about-project', 5);
    projectContainerProps = {
      top: 0,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('about-project', 6);
    projectContainerProps = {
      top: 0 + projectContainerOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('about-project', 7);
    projectContainerProps = {
      top: 0 + projectContainerOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('about-project', 8);
    projectContainerProps = {
      top: 0 + projectContainerOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('about-project', 9);
    projectContainerProps = {
      top: 0 + projectContainerOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('about-project', 10);
    projectContainerProps = {
      top: 0 + projectContainerOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('about-project', 11);
    projectContainerProps = {
      top: 0 + projectContainerOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('about-project', 12);
    projectContainerProps = {
      top: 0 + projectContainerOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('about-project', 13);
    projectContainerProps = {
      top: 0 + projectContainerOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('about-project', 14);
    projectContainerProps = {
      top: 0 + projectContainerOffset,
    };
  } else {
    console.log('about-project', 15);
    projectContainerProps = {
      top: 25,
    };
  }

  return projectContainerProps;
};
