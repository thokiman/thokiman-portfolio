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

export const measureRightPageContainerProps = (viewWidth, viewHeight) => {
  const rightServiceContainerHeightOffset = 0;
  const rightServiceContainerTopOffset = 0;

  let rightServiceContainerProps;

  if (hasScreenSize1(viewWidth)) {
    console.log('service-content', 1);
    rightServiceContainerProps = {
      height: 50 + rightServiceContainerHeightOffset,
      top: -60 + rightServiceContainerTopOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('service-content', 2);
    rightServiceContainerProps = {
      height: 50 + rightServiceContainerHeightOffset,
      top: -60 + rightServiceContainerTopOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('service-content', 3);
    rightServiceContainerProps = {
      height: 50 + rightServiceContainerHeightOffset,
      top: -70 + rightServiceContainerTopOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('service-content', 4);
    rightServiceContainerProps = {
      height: 50 + rightServiceContainerHeightOffset,
      top: -60 + rightServiceContainerTopOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('service-content', 5);
    rightServiceContainerProps = {
      height: 50 + rightServiceContainerHeightOffset,
      top: -60 + rightServiceContainerTopOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('service-content', 6);
    rightServiceContainerProps = {
      height: 50 + rightServiceContainerHeightOffset,
      top: -70 + rightServiceContainerTopOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('service-content', 7);
    rightServiceContainerProps = {
      height: 50 + rightServiceContainerHeightOffset,
      top: 0 + rightServiceContainerTopOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('service-content', 8);
    rightServiceContainerProps = {
      height: 50 + rightServiceContainerHeightOffset,
      top: -70 + rightServiceContainerTopOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('service-content', 9);
    rightServiceContainerProps = {
      height: 50 + rightServiceContainerHeightOffset,
      top: -40 + rightServiceContainerTopOffset,
    };
  } else {
    console.log('service-content', 10);
    rightServiceContainerProps = {
      height: 50,
      top: -80,
    };
  }

  return rightServiceContainerProps;
};
