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
  hasScreenSize4,
  hasScreenSize5,
  hasScreenSizeWindow,
} from '../../../utils/common.component.utils';

export const measureHeaderMorphing = (
  pathname,
  viewWidth,
  viewHeight,
  aboutRoute,
  portfolioRoute,
  serviceRoute,
  contactRoute
) => {
  let headerMorphingProps;
  if (!!pathname.match(RegExp(/^\/$/))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -220,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -225,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -215,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -230,
      };
    } else if (hasScreenSize1(viewWidth)) {
      headerMorphingProps = {
        top: -215,
      };
    } else if (hasScreenSize2(viewWidth)) {
      headerMorphingProps = {
        top: -210,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -220,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -210,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -210,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -205,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -200,
      };
    } else if (hasScreenSize5(viewWidth)) {
      headerMorphingProps = {
        top: -190,
      };
    } else {
      headerMorphingProps = {
        top: -220,
      };
    }
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -241,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize1(viewWidth)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize2(viewWidth)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -235,
      };
    } else if (hasScreenSize5(viewWidth)) {
      headerMorphingProps = {
        top: -237,
      };
    } else {
      headerMorphingProps = {
        top: -237,
      };
    }
  } else if (!!pathname.match(RegExp(`${portfolioRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1(viewWidth)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize2(viewWidth)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize5(viewWidth)) {
      headerMorphingProps = {
        top: -240,
      };
    } else {
      headerMorphingProps = {
        top: -245,
      };
    }
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1(viewWidth)) {
      headerMorphingProps = {
        top: -230,
      };
    } else if (hasScreenSize2(viewWidth)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -235,
      };
    } else if (hasScreenSize5(viewWidth)) {
      headerMorphingProps = {
        top: -235,
      };
    } else {
      headerMorphingProps = {
        top: -240,
      };
    }
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize1(viewWidth)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize2(viewWidth)) {
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      headerMorphingProps = {
        top: -235,
      };
    } else if (hasScreenSize5(viewWidth)) {
      headerMorphingProps = {
        top: -237,
      };
    } else {
      headerMorphingProps = {
        top: -245,
      };
    }
  }
  return headerMorphingProps;
};

export const measureWavyIntro = (
  pathname,
  viewWidth,
  viewHeight,
  aboutRoute,
  portfolioRoute,
  serviceRoute,
  contactRoute
) => {
  let wavyIntroProps;
  if (!!pathname.match(RegExp(/^\/$/))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    }
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    }
  } else if (!!pathname.match(RegExp(`${portfolioRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    }
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    }
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    } else {
      wavyIntroProps = {
        height: 240,
        backgroundColor: '#000000',
      };
    }
  }

  return wavyIntroProps;
};

export const measureBottomWavy = (
  pathname,
  viewWidth,
  viewHeight,
  aboutRoute,
  portfolioRoute,
  serviceRoute,
  contactRoute
) => {
  let bottomWavy;
  if (!!pathname.match(RegExp(/^\/$/))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 19,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 45,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      bottomWavy = {
        height: 40,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 38,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 50,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    } else {
      bottomWavy = {
        height: 28,
        strokeColor: '#74c6d4',
        fillColor: '#000000',
      };
    }
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 19,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 45,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      bottomWavy = {
        height: 40,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 38,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 50,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    }
  } else if (!!pathname.match(RegExp(`${portfolioRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 19,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 45,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      bottomWavy = {
        height: 40,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 38,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 50,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    }
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 19,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 45,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      bottomWavy = {
        height: 40,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 38,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 50,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    }
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 19,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 45,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize2(viewWidth)) {
      bottomWavy = {
        height: 40,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 35,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 38,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      bottomWavy = {
        height: 50,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize5(viewWidth)) {
      bottomWavy = {
        height: 42,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else {
      bottomWavy = {
        height: 28,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    }
  }
  return bottomWavy;
};
