import {
  hasScreenSize1,
  hasScreenSize2,
  hasScreenSize3_1,
  hasScreenSize3_2,
  hasScreenSize3_3,
  hasScreenSize3_4,
  hasScreenSize4,
  hasScreenSize5,
} from '../../utils/common.component.utils';

export const measureContactHeight = (
  pathname,
  viewWidth,
  viewHeight,
  contactRoute
) => {
  let height;
  console.log('--', viewWidth);
  console.log(viewHeight);
  console.log('**', pathname);
  console.log('##', contactRoute);

  switch (pathname) {
    case contactRoute:
      if (hasScreenSize1(viewWidth)) {
        console.log(1);
        height = 360;
      } else if (hasScreenSize2(viewWidth)) {
        console.log(2);
        height = 350;
      } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
        console.log(3);
        height = 340;
      } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
        console.log(4);
        height = 350;
      } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
        console.log(5);
        height = 360;
      } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
        console.log(6);
        height = 400;
      } else if (hasScreenSize4(viewWidth, viewHeight)) {
        console.log(7);
        height = 420;
      } else if (hasScreenSize5(viewWidth)) {
        console.log(8);
        height = 350;
      } else {
        console.log('else');
        height = 350;
      }
      return height;

    default:
      return 420;
  }
};
