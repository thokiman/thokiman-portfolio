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
} from '../../../utils/common.component.utils';

export const measureDirectoryServiceProps = (viewWidth, viewHeight) => {
  const directoryServiceWidthOffset = 0;
  const directoryServiceHeightOffset = 0;
  let directoryServiceProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('directory-container-service', 1);
    directoryServiceProps = {
      width: 25,
      height: 68,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('directory-container-service', 2);
    directoryServiceProps = {
      width: 25 + directoryServiceWidthOffset,
      height: 68 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('directory-container-service', 3);
    directoryServiceProps = {
      width: 25 + directoryServiceWidthOffset,
      height: 68 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('directory-container-service', 4);
    directoryServiceProps = {
      width: 25 + directoryServiceWidthOffset,
      height: 68 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('directory-container-service', 5);
    directoryServiceProps = {
      width: 25 + directoryServiceWidthOffset,
      height: 68 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('directory-container-service', 6);
    directoryServiceProps = {
      width: 98 + directoryServiceWidthOffset,
      height: 50 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('directory-container-service', 7);
    directoryServiceProps = {
      width: 98 + directoryServiceWidthOffset,
      height: 50 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('directory-container-service', 8);
    directoryServiceProps = {
      width: 98 + directoryServiceWidthOffset,
      height: 50 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('directory-container-service', 9);
    directoryServiceProps = {
      width: 98 + directoryServiceWidthOffset,
      height: 50 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('directory-container-service', 10);
    directoryServiceProps = {
      width: 98 + directoryServiceWidthOffset,
      height: 50 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('directory-container-service', 11);
    directoryServiceProps = {
      width: 98 + directoryServiceWidthOffset,
      height: 50 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('directory-container-service', 12);
    directoryServiceProps = {
      width: 98 + directoryServiceWidthOffset,
      height: 50 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('directory-container-service', 13);
    directoryServiceProps = {
      width: 98 + directoryServiceWidthOffset,
      height: 50 + directoryServiceHeightOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('directory-container-service', 14);
    directoryServiceProps = {
      width: 98 + directoryServiceWidthOffset,
      height: 50 + directoryServiceHeightOffset,
    };
  } else {
    console.log('directory-container-service', 15);
    directoryServiceProps = {
      width: 98,
      height: 25,
    };
  }

  return directoryServiceProps;
};

export const measureLeftServiceContainerProps = (viewWidth, viewHeight) => {
  const leftServiceContainerWidthOffset = 0;
  const leftServiceContainerHeightOffset = 0;
  let directoryServiceProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 1);
    directoryServiceProps = {
      width: 25 + leftServiceContainerWidthOffset,
      height: 68 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 2);
    directoryServiceProps = {
      width: 25 + leftServiceContainerWidthOffset,
      height: 68 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 3);
    directoryServiceProps = {
      width: 25 + leftServiceContainerWidthOffset,
      height: 68 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 4);
    directoryServiceProps = {
      width: 25 + leftServiceContainerWidthOffset,
      height: 68 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 5);
    directoryServiceProps = {
      width: 25 + leftServiceContainerWidthOffset,
      height: 68 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('left-service-container-service', 6);
    directoryServiceProps = {
      width: 100 + leftServiceContainerWidthOffset,
      height: 75 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('left-service-container-service', 7);
    directoryServiceProps = {
      width: 100 + leftServiceContainerWidthOffset,
      height: 80 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 8);
    directoryServiceProps = {
      width: 100 + leftServiceContainerWidthOffset,
      height: 52 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 9);
    directoryServiceProps = {
      width: 100 + leftServiceContainerWidthOffset,
      height: 52 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 10);
    directoryServiceProps = {
      width: 100 + leftServiceContainerWidthOffset,
      height: 60 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 11);
    directoryServiceProps = {
      width: 100 + leftServiceContainerWidthOffset,
      height: 60 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 12);
    directoryServiceProps = {
      width: 100 + leftServiceContainerWidthOffset,
      height: 100 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('left-service-container-service', 13);
    directoryServiceProps = {
      width: 100 + leftServiceContainerWidthOffset,
      height: 70 + leftServiceContainerHeightOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('left-service-container-service', 14);
    directoryServiceProps = {
      width: 100 + leftServiceContainerWidthOffset,
      height: 50 + leftServiceContainerHeightOffset,
    };
  } else {
    console.log('left-service-container-service', 15);
    directoryServiceProps = {
      width: 100,
      height: 100,
    };
  }

  return directoryServiceProps;
};
