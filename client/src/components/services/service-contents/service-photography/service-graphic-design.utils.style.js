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

export const measureRightPageContainerPgProps = (viewWidth, viewHeight) => {
  const rightServiceContainerPgHeightOffset = 0;
  const rightServiceContainerPgTopOffset = 0;

  let rightServiceContainerProps;

  if (hasScreenSize1(viewWidth)) {
    console.log('service-photography', 1);
    rightServiceContainerProps = {
      height: 280 + rightServiceContainerPgHeightOffset,
      top: -60 + rightServiceContainerPgTopOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('service-photography', 2);
    rightServiceContainerProps = {
      height: 270 + rightServiceContainerPgHeightOffset,
      top: -40 + rightServiceContainerPgTopOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('service-photography', 3);
    rightServiceContainerProps = {
      height: 180 + rightServiceContainerPgHeightOffset,
      top: -50 + rightServiceContainerPgTopOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('service-photography', 4);
    rightServiceContainerProps = {
      height: 175 + rightServiceContainerPgHeightOffset,
      top: -50 + rightServiceContainerPgTopOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('service-photography', 5);
    rightServiceContainerProps = {
      height: 220 + rightServiceContainerPgHeightOffset,
      top: -50 + rightServiceContainerPgTopOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('service-photography', 6);
    rightServiceContainerProps = {
      height: 225 + rightServiceContainerPgHeightOffset,
      top: -50 + rightServiceContainerPgTopOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('service-photography', 7);
    rightServiceContainerProps = {
      height: 235 + rightServiceContainerPgHeightOffset,
      top: 0 + rightServiceContainerPgTopOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('service-photography', 8);
    rightServiceContainerProps = {
      height: 235 + rightServiceContainerPgHeightOffset,
      top: -40 + rightServiceContainerPgTopOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('service-photography', 9);
    rightServiceContainerProps = {
      height: 225 + rightServiceContainerPgHeightOffset,
      top: -50 + rightServiceContainerPgTopOffset,
    };
  } else {
    console.log('service-photography', 10);
    rightServiceContainerProps = {
      height: 300,
      top: -50,
    };
  }

  return rightServiceContainerProps;
};
