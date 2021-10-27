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

export const measureContactFormHideProps = (viewWidth, viewHeight) => {
  const contactFormHideHeightOffset = 0;
  let contactFormHideProps;

  if (hasScreenSize1(viewWidth)) {
    console.log('contact-form-hide', 1);
    contactFormHideProps = {
      height: 150 + contactFormHideHeightOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('contact-form-hide', 2);
    contactFormHideProps = {
      height: 195 + contactFormHideHeightOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('contact-form-hide', 3);
    contactFormHideProps = {
      height: 150 + contactFormHideHeightOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('contact-form-hide', 4);
    contactFormHideProps = {
      height: 155 + contactFormHideHeightOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('contact-form-hide', 5);
    contactFormHideProps = {
      height: 175 + contactFormHideHeightOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('contact-form-hide', 6);
    contactFormHideProps = {
      height: 188 + contactFormHideHeightOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('contact-form-hide', 7);
    contactFormHideProps = {
      height: 190 + contactFormHideHeightOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('contact-form-hide', 8);
    contactFormHideProps = {
      height: 210 + contactFormHideHeightOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('contact-form-hide', 9);
    contactFormHideProps = {
      height: 175 + contactFormHideHeightOffset,
    };
  } else {
    console.log('contact-form-hide', 10);
    contactFormHideProps = {
      height: 255,
    };
  }

  return contactFormHideProps;
};

export const measureContactFormActiveProps = (viewWidth, viewHeight) => {
  const contactFormActiveHeightOffset = 0;
  let contactFormActiveProps;

  if (hasScreenSize1(viewWidth)) {
    console.log('contact-form-active', 1);
    contactFormActiveProps = {
      height: 170 + contactFormActiveHeightOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('contact-form-active', 2);
    contactFormActiveProps = {
      height: 215 + contactFormActiveHeightOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('contact-form-active', 3);
    contactFormActiveProps = {
      height: 170 + contactFormActiveHeightOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('contact-form-active', 4);
    contactFormActiveProps = {
      height: 170 + contactFormActiveHeightOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('contact-form-active', 5);
    contactFormActiveProps = {
      height: 190 + contactFormActiveHeightOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('contact-form-active', 6);
    contactFormActiveProps = {
      height: 208 + contactFormActiveHeightOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('contact-form-active', 7);
    contactFormActiveProps = {
      height: 240 + contactFormActiveHeightOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('contact-form-active', 8);
    contactFormActiveProps = {
      height: 235 + contactFormActiveHeightOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('contact-form-active', 9);
    contactFormActiveProps = {
      height: 190 + contactFormActiveHeightOffset,
    };
  } else {
    console.log('contact-form-active', 10);
    contactFormActiveProps = {
      height: 285,
    };
  }

  return contactFormActiveProps;
};
