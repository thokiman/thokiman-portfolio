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

export const selectTitleHeaderIntro = (
  pathname,
  viewWidth,
  viewHeight,
  aboutRoute,
  portfolioDefaultRoute,
  serviceRoute,
  contactRoute
) => {
  let selectTitleHeaderIntro;
  if (!!pathname.match(RegExp(/^\/$/))) {
    selectTitleHeaderIntro = 'Home';
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    selectTitleHeaderIntro = 'About';
  } else if (!!pathname.match(RegExp(`${portfolioDefaultRoute}+`))) {
    selectTitleHeaderIntro = 'Portfolio';
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    selectTitleHeaderIntro = 'Service';
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    selectTitleHeaderIntro = 'Contact';
  }
  return selectTitleHeaderIntro;
};
export const measureTitleHeaderIntro = (
  pathname,
  viewWidth,
  viewHeight,
  aboutRoute,
  portfolioDefaultRoute,
  serviceRoute,
  contactRoute
) => {
  let titleHeaderIntroProps;

  if (!!pathname.match(RegExp(/^\/$/))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('title-header-link-home', 1);
      titleHeaderIntroProps = {
        fontSize: 10,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('title-header-link-home', 2);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('title-header-link-home', 3);
      titleHeaderIntroProps = {
        fontSize: 15,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('title-header-link-home', 4);
      titleHeaderIntroProps = {
        fontSize: 15,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('title-header-link-home', 5);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('title-header-link-home', 6);
      titleHeaderIntroProps = {
        fontSize: 19,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('title-header-link-home', 7);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('title-header-link-home', 8);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('title-header-link-home', 9);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('title-header-link-home', 10);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('title-header-link-home', 11);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 22,
        left: 16,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('title-header-link-home', 12);
      titleHeaderIntroProps = {
        fontSize: 19,
        top: 22,
        left: 16,
      };
    } else {
      console.log('title-header-link-home', 13);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 22,
        left: 16,
      };
    }
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('title-header-link-about', 1);
      titleHeaderIntroProps = {
        fontSize: 10,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('title-header-link-about', 2);
      titleHeaderIntroProps = {
        fontSize: 17,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('title-header-link-about', 3);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('title-header-link-about', 4);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('title-header-link-about', 5);
      titleHeaderIntroProps = {
        fontSize: 14,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('title-header-link-about', 6);
      titleHeaderIntroProps = {
        fontSize: 17,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('title-header-link-about', 7);
      titleHeaderIntroProps = {
        fontSize: 16,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('title-header-link-about', 8);
      titleHeaderIntroProps = {
        fontSize: 16,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('title-header-link-about', 9);
      titleHeaderIntroProps = {
        fontSize: 16,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('title-header-link-about', 10);
      titleHeaderIntroProps = {
        fontSize: 16,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('title-header-link-about', 11);
      titleHeaderIntroProps = {
        fontSize: 17,
        top: 40,
        left: 13,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('title-header-link-about', 12);
      titleHeaderIntroProps = {
        fontSize: 18,
        top: 40,
        left: 13,
      };
    } else {
      console.log('title-header-link-about', 13);
      titleHeaderIntroProps = {
        fontSize: 16,
        top: 40,
        left: 13,
      };
    }
  } else if (!!pathname.match(RegExp(`${portfolioDefaultRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('title-header-link-portfolio', 1);
      titleHeaderIntroProps = {
        fontSize: 10,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('title-header-link-portfolio', 2);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('title-header-link-portfolio', 3);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('title-header-link-portfolio', 4);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('title-header-link-portfolio', 5);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('title-header-link-portfolio', 6);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('title-header-link-portfolio', 7);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('title-header-link-portfolio', 8);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('title-header-link-portfolio', 9);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('title-header-link-portfolio', 10);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('title-header-link-portfolio', 11);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('title-header-link-portfolio', 12);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    } else {
      console.log('title-header-link-portfolio', 13);
      titleHeaderIntroProps = {
        fontSize: 10.5,
        top: 47,
        left: 13,
      };
    }
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('title-header-link-service', 1);
      titleHeaderIntroProps = {
        fontSize: 10,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('title-header-link-service', 2);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('title-header-link-service', 3);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('title-header-link-service', 4);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('title-header-link-service', 5);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('title-header-link-service', 6);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('title-header-link-service', 7);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('title-header-link-service', 8);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('title-header-link-service', 9);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('title-header-link-service', 10);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('title-header-link-service', 11);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('title-header-link-service', 12);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    } else {
      console.log('title-header-link-service', 13);
      titleHeaderIntroProps = {
        fontSize: 13.5,
        top: 46,
        left: 13,
      };
    }
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('title-header-link-contact', 1);
      titleHeaderIntroProps = {
        fontSize: 10,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('title-header-link-contact', 2);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('title-header-link-contact', 3);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('title-header-link-contact', 4);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('title-header-link-contact', 5);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('title-header-link-contact', 6);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('title-header-link-contact', 7);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('title-header-link-contact', 8);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('title-header-link-contact', 9);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('title-header-link-contact', 10);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('title-header-link-contact', 11);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('title-header-link-contact', 12);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    } else {
      console.log('title-header-link-contact', 13);
      titleHeaderIntroProps = {
        fontSize: 12,
        top: 47,
        left: 16,
      };
    }
  }

  return titleHeaderIntroProps;
};

export const measureHeaderLink = (
  pathname,
  viewWidth,
  viewHeight,
  aboutRoute,
  portfolioDefaultRoute,
  serviceRoute,
  contactRoute
) => {
  let headerLinkProps;
  if (!!pathname.match(RegExp(/^\/$/))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-link-home', 1);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-link-home', 2);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-link-home', 3);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-link-home', 4);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-link-home', 5);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-link-home', 6);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-link-home', 7);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-link-home', 8);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-link-home', 9);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-link-home', 10);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-link-home', 11);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-link-home', 12);
      headerLinkProps = {
        fontSize: '150%',
      };
    } else {
      console.log('header-link-home', 13);
      headerLinkProps = {
        fontSize: '150%',
      };
    }
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-link-about', 1);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-link-about', 2);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-link-about', 3);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-link-about', 4);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-link-about', 5);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-link-about', 6);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-link-about', 7);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-link-about', 8);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-link-about', 9);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-link-about', 10);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-link-about', 11);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-link-about', 12);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else {
      console.log('header-link-about', 13);
      headerLinkProps = {
        fontSize: '110%',
      };
    }
  } else if (!!pathname.match(RegExp(`${portfolioDefaultRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-link-portfolio', 1);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-link-portfolio', 2);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-link-portfolio', 3);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-link-portfolio', 4);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-link-portfolio', 5);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-link-portfolio', 6);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-link-portfolio', 7);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-link-portfolio', 8);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-link-portfolio', 9);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-link-portfolio', 10);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-link-portfolio', 11);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-link-portfolio', 12);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else {
      console.log('header-link-portfolio', 13);
      headerLinkProps = {
        fontSize: '110%',
      };
    }
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-link-service', 1);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-link-service', 2);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-link-service', 3);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-link-service', 4);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-link-service', 5);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-link-service', 6);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-link-service', 7);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-link-service', 8);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-link-service', 9);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-link-service', 10);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-link-service', 11);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-link-service', 12);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else {
      console.log('header-link-service', 13);
      headerLinkProps = {
        fontSize: '110%',
      };
    }
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-link-contact', 1);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-link-contact', 2);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-link-contact', 3);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-link-contact', 4);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-link-contact', 5);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-link-contact', 6);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-link-contact', 7);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-link-contact', 8);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-link-contact', 9);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-link-contact', 10);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-link-contact', 11);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-link-contact', 12);
      headerLinkProps = {
        fontSize: '110%',
      };
    } else {
      console.log('header-link-contact', 13);
      headerLinkProps = {
        fontSize: '110%',
      };
    }
  }
  return headerLinkProps;
};

export const measureHeaderMorphing = (
  pathname,
  viewWidth,
  viewHeight,
  aboutRoute,
  portfolioDefaultRoute,
  serviceRoute,
  contactRoute
) => {
  let headerMorphingProps;
  if (!!pathname.match(RegExp(/^\/$/))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-home', 1);
      headerMorphingProps = {
        top: -220,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-home', 2);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-home', 3);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-home', 4);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-morphing-intro-home', 5);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-morphing-intro-home', 6);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-home', 7);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-home', 8);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-home', 9);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-home', 10);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-home', 11);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-morphing-intro-home', 12);
      headerMorphingProps = {
        top: -240,
      };
    } else {
      console.log('header-morphing-intro-home', 13);
      headerMorphingProps = {
        top: -240,
      };
    }
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-about', 1);
      headerMorphingProps = {
        top: -237,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-about', 2);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-about', 3);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-about', 4);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-morphing-intro-about', 5);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-morphing-intro-about', 6);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-about', 7);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-about', 8);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-about', 9);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-about', 10);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-about', 11);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-morphing-intro-about', 12);
      headerMorphingProps = {
        top: -240,
      };
    } else {
      console.log('header-morphing-intro-about', 13);
      headerMorphingProps = {
        top: -240,
      };
    }
  } else if (!!pathname.match(RegExp(`${portfolioDefaultRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-portfolio', 1);
      headerMorphingProps = {
        top: -250,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-portfolio', 2);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-portfolio', 3);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-portfolio', 4);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-morphing-intro-portfolio', 5);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-morphing-intro-portfolio', 6);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-portfolio', 7);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-portfolio', 8);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-portfolio', 9);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-portfolio', 10);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-portfolio', 11);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-morphing-intro-portfolio', 12);
      headerMorphingProps = {
        top: -260,
      };
    } else {
      console.log('header-morphing-intro-portfolio', 13);
      headerMorphingProps = {
        top: -260,
      };
    }
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-service', 1);
      headerMorphingProps = {
        top: -240,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-service', 2);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-service', 3);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-service', 4);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-morphing-intro-service', 5);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-morphing-intro-service', 6);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-service', 7);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-service', 8);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-service', 9);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-service', 10);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-service', 11);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-morphing-intro-service', 12);
      headerMorphingProps = {
        top: -260,
      };
    } else {
      console.log('header-morphing-intro-service', 13);
      headerMorphingProps = {
        top: -260,
      };
    }
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-contact', 1);
      headerMorphingProps = {
        top: -245,
      };
    } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-contact', 2);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-contact', 3);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-contact', 4);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log('header-morphing-intro-contact', 5);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize2(viewWidth)) {
      console.log('header-morphing-intro-contact', 6);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-contact', 7);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-contact', 8);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-contact', 9);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-contact', 10);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize4(viewWidth, viewHeight)) {
      console.log('header-morphing-intro-contact', 11);
      headerMorphingProps = {
        top: -260,
      };
    } else if (hasScreenSize5(viewWidth)) {
      console.log('header-morphing-intro-contact', 12);

      headerMorphingProps = {
        top: -260,
      };
    } else {
      console.log('header-morphing-intro-contact', 13);
      headerMorphingProps = {
        top: -260,
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
  portfolioDefaultRoute,
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
  } else if (!!pathname.match(RegExp(`${portfolioDefaultRoute}+`))) {
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
  portfolioDefaultRoute,
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
    if (hasScreenSizeWindow(viewWidth, viewHeight)) {
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
      console.log(4);
      bottomWavy = {
        height: 45,
        strokeColor: '#128194',
        fillColor: '#000000',
      };
    } else if (hasScreenSize1(viewWidth)) {
      console.log(5);
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
  } else if (!!pathname.match(RegExp(`${portfolioDefaultRoute}+`))) {
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
