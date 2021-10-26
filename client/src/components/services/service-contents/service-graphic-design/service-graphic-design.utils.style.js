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

export const measureRightPageContainerGdProps = (viewWidth, viewHeight) => {
  const rightServiceContainerGdHeightOffset = 0;
  const rightServiceContainerGdTopOffset = 0;

  let rightServiceContainerProps;

  if (hasScreenSize1(viewWidth)) {
    console.log('service-graphic-design', 1);
    rightServiceContainerProps = {
      height: 175 + rightServiceContainerGdHeightOffset,
      top: -60 + rightServiceContainerGdTopOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('service-graphic-design', 2);
    rightServiceContainerProps = {
      height: 165 + rightServiceContainerGdHeightOffset,
      top: -40 + rightServiceContainerGdTopOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('service-graphic-design', 3);
    rightServiceContainerProps = {
      height: 110 + rightServiceContainerGdHeightOffset,
      top: -50 + rightServiceContainerGdTopOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('service-graphic-design', 4);
    rightServiceContainerProps = {
      height: 110 + rightServiceContainerGdHeightOffset,
      top: -50 + rightServiceContainerGdTopOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('service-graphic-design', 5);
    rightServiceContainerProps = {
      height: 125 + rightServiceContainerGdHeightOffset,
      top: -50 + rightServiceContainerGdTopOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('service-graphic-design', 6);
    rightServiceContainerProps = {
      height: 135 + rightServiceContainerGdHeightOffset,
      top: -50 + rightServiceContainerGdTopOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('service-graphic-design', 7);
    rightServiceContainerProps = {
      height: 145 + rightServiceContainerGdHeightOffset,
      top: 0 + rightServiceContainerGdTopOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('service-graphic-design', 8);
    rightServiceContainerProps = {
      height: 150 + rightServiceContainerGdHeightOffset,
      top: -40 + rightServiceContainerGdTopOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('service-graphic-design', 9);
    rightServiceContainerProps = {
      height: 135 + rightServiceContainerGdHeightOffset,
      top: -50 + rightServiceContainerGdTopOffset,
    };
  } else {
    console.log('service-graphic-design', 10);
    rightServiceContainerProps = {
      height: 190,
      top: -60,
    };
  }

  return rightServiceContainerProps;
};
