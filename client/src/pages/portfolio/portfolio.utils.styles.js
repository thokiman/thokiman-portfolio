import {
  hasScreenSize1,
  hasScreenSize2,
  hasScreenSize3_1,
  hasScreenSize3_2,
  hasScreenSize3_3,
  hasScreenSize3_4,
  hasScreenSize4,
  hasScreenSize5,
} from 'utils/common.component.utils';

export const measurePortfolioIsNotActivated = (viewWidth, viewHeight) => {
  let portfolioIsNotActivatedProps;

  if (hasScreenSize1(viewWidth)) {
    console.log(1);
    portfolioIsNotActivatedProps = {
      top: 23.5,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log(2);
    portfolioIsNotActivatedProps = {
      top: 32,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log(3);
    portfolioIsNotActivatedProps = {
      top: 28.5,
      left: 6,
      fontSize: 8,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log(4);
    portfolioIsNotActivatedProps = {
      top: 29,
      left: 6,
      fontSize: 9,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log(5);
    portfolioIsNotActivatedProps = {
      top: 31,
      left: 6,
      fontSize: 7,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log(6);
    portfolioIsNotActivatedProps = {
      top: 33,
      left: 6,
      fontSize: 6,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log(7);
    portfolioIsNotActivatedProps = {
      top: 39,
      left: 6,
      fontSize: 5,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log(8);
    portfolioIsNotActivatedProps = {
      top: 33,
      left: 6,
      fontSize: 12,
    };
  } else {
    console.log(9);
    portfolioIsNotActivatedProps = {
      top: 27.5,
      left: 6,
      fontSize: 10,
    };
  }
  return portfolioIsNotActivatedProps;
};
