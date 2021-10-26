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

export const measureRightPageContainerEngProps = (viewWidth, viewHeight) => {
  const rightServiceContainerEngHeightOffset = 0;
  const rightServiceContainerEngTopOffset = 0;

  let rightServiceContainerProps;

  if (hasScreenSize1(viewWidth)) {
    console.log('service-engineer', 1);
    rightServiceContainerProps = {
      height: 205 + rightServiceContainerEngHeightOffset,
      top: -60 + rightServiceContainerEngTopOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('service-engineer', 2);
    rightServiceContainerProps = {
      height: 205 + rightServiceContainerEngHeightOffset,
      top: -40 + rightServiceContainerEngTopOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('service-engineer', 3);
    rightServiceContainerProps = {
      height: 150 + rightServiceContainerEngHeightOffset,
      top: -50 + rightServiceContainerEngTopOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('service-engineer', 4);
    rightServiceContainerProps = {
      height: 140 + rightServiceContainerEngHeightOffset,
      top: -50 + rightServiceContainerEngTopOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('service-engineer', 5);
    rightServiceContainerProps = {
      height: 170 + rightServiceContainerEngHeightOffset,
      top: -50 + rightServiceContainerEngTopOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('service-engineer', 6);
    rightServiceContainerProps = {
      height: 180 + rightServiceContainerEngHeightOffset,
      top: -50 + rightServiceContainerEngTopOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('service-engineer', 7);
    rightServiceContainerProps = {
      height: 170 + rightServiceContainerEngHeightOffset,
      top: 0 + rightServiceContainerEngTopOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('service-engineer', 8);
    rightServiceContainerProps = {
      height: 195 + rightServiceContainerEngHeightOffset,
      top: -40 + rightServiceContainerEngTopOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('service-engineer', 9);
    rightServiceContainerProps = {
      height: 200 + rightServiceContainerEngHeightOffset,
      top: -50 + rightServiceContainerEngTopOffset,
    };
  } else {
    console.log('service-engineer', 10);
    rightServiceContainerProps = {
      height: 245,
      top: -50,
    };
  }

  return rightServiceContainerProps;
};
