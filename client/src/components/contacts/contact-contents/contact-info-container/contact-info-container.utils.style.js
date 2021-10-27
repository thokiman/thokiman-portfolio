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

export const measureContactInformationProps = (viewWidth, viewHeight) => {
  const contactInformationHeightOffset = 0;
  const contactInformationWidthOffset = 0;
  let contactInformationProps;

  if (hasScreenSize1(viewWidth)) {
    console.log('contact-info', 1);
    contactInformationProps = {
      height: 110 + contactInformationHeightOffset,
      width: 100 + contactInformationWidthOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('contact-info', 2);
    contactInformationProps = {
      height: 70 + contactInformationHeightOffset,
      width: 100 + contactInformationWidthOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('contact-info', 3);
    contactInformationProps = {
      height: 77 + contactInformationHeightOffset,
      width: 100 + contactInformationWidthOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('contact-info', 4);
    contactInformationProps = {
      height: 75 + contactInformationHeightOffset,
      width: 100 + contactInformationWidthOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('contact-info', 5);
    contactInformationProps = {
      height: 77 + contactInformationHeightOffset,
      width: 100 + contactInformationWidthOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('contact-info', 6);
    contactInformationProps = {
      height: 80 + contactInformationHeightOffset,
      width: 100 + contactInformationWidthOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('contact-info', 7);
    contactInformationProps = {
      height: 90 + contactInformationHeightOffset,
      width: 100 + contactInformationWidthOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('contact-info', 8);
    contactInformationProps = {
      height: 82 + contactInformationHeightOffset,
      width: 100 + contactInformationWidthOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('contact-info', 9);
    contactInformationProps = {
      height: 68 + contactInformationHeightOffset,
      width: 100 + contactInformationWidthOffset,
    };
  } else {
    console.log('contact-info', 10);
    contactInformationProps = {
      height: 87,
      width: 100,
    };
  }

  return contactInformationProps;
};
