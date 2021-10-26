import {
  hasScreenSize1,
  hasScreenSize2,
  hasScreenSize3_1,
  hasScreenSize3_2,
  hasScreenSize3_3,
  hasScreenSize3_4,
  hasScreenSize3_5,
  hasScreenSize4,
  hasScreenSize5,
} from '../../../../utils/common.component.utils';

export const measureRightPageContainerFSProps = (viewWidth, viewHeight) => {
  const rightServiceContainerFSHeightOffset = 0;
  const rightServiceContainerFSTopOffset = 0;

  let rightServiceContainerProps;

  if (hasScreenSize1(viewWidth)) {
    console.log('service-dev', 1);
    rightServiceContainerProps = {
      height: 309 + rightServiceContainerFSHeightOffset,
      top: -60 + rightServiceContainerFSTopOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('service-dev', 2);
    rightServiceContainerProps = {
      height: 285 + rightServiceContainerFSHeightOffset,
      top: -40 + rightServiceContainerFSTopOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('service-dev', 3);
    rightServiceContainerProps = {
      height: 180 + rightServiceContainerFSHeightOffset,
      top: -50 + rightServiceContainerFSTopOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('service-dev', 4);
    rightServiceContainerProps = {
      height: 175 + rightServiceContainerFSHeightOffset,
      top: -50 + rightServiceContainerFSTopOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('service-dev', 5);
    rightServiceContainerProps = {
      height: 230 + rightServiceContainerFSHeightOffset,
      top: -50 + rightServiceContainerFSTopOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('service-dev', 6);
    rightServiceContainerProps = {
      height: 230 + rightServiceContainerFSHeightOffset,
      top: -50 + rightServiceContainerFSTopOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('service-dev', 7);
    rightServiceContainerProps = {
      height: 230 + rightServiceContainerFSHeightOffset,
      top: 0 + rightServiceContainerFSTopOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('service-dev', 8);
    rightServiceContainerProps = {
      height: 230 + rightServiceContainerFSHeightOffset,
      top: -40 + rightServiceContainerFSTopOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('service-dev', 9);
    rightServiceContainerProps = {
      height: 268 + rightServiceContainerFSHeightOffset,
      top: -50 + rightServiceContainerFSTopOffset,
    };
  } else {
    console.log('service-dev', 10);
    rightServiceContainerProps = {
      height: 268,
      top: -70,
    };
  }

  return rightServiceContainerProps;
};
