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
  hasScreenSize3_5,
  hasScreenSize4,
  hasScreenSize5,
  hasScreenSizeWindow,
  hasScreenSizeWindow_1,
} from '../../../../utils/common.component.utils';

export const measureAboutThokimanHeadColorShowProps = (
  viewWidth,
  viewHeight
) => {
  const aboutThokimanWidthOffset = 0;
  const aboutThokimanHeightOffset = 0;
  const aboutThokimanTopOffset = 0;
  let aboutThokimanHeadColorShowProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 1);
    aboutThokimanHeadColorShowProps = {
      top: -1,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 2);
    aboutThokimanHeadColorShowProps = {
      top: -1,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 3);
    aboutThokimanHeadColorShowProps = {
      top: -1,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 4);
    aboutThokimanHeadColorShowProps = {
      top: -1,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 5);
    aboutThokimanHeadColorShowProps = {
      top: -1,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('about-dropdown-bar', 6);
    aboutThokimanHeadColorShowProps = {
      top: -1 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 95 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('about-dropdown-bar', 7);
    aboutThokimanHeadColorShowProps = {
      top: -1 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 8);
    aboutThokimanHeadColorShowProps = {
      top: -1 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 9);
    aboutThokimanHeadColorShowProps = {
      top: -1 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 10);
    aboutThokimanHeadColorShowProps = {
      top: -1 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 11);
    aboutThokimanHeadColorShowProps = {
      top: 0.5 + aboutThokimanTopOffset,
      width: 30 + aboutThokimanWidthOffset,
      height: 70 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 12);
    aboutThokimanHeadColorShowProps = {
      top: -1 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 13);
    aboutThokimanHeadColorShowProps = {
      top: -0.5 + aboutThokimanTopOffset,
      width: 30 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('about-dropdown-bar', 14);
    aboutThokimanHeadColorShowProps = {
      top: -0.5 + aboutThokimanTopOffset,
      width: 30 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else {
    console.log('about-dropdown-bar', 15);
    aboutThokimanHeadColorShowProps = {
      top: -3,
      width: 20,
      height: 110,
    };
  }

  return aboutThokimanHeadColorShowProps;
};

export const measureAboutThokimanHeadHideProps = (viewWidth, viewHeight) => {
  const aboutThokimanWidthOffset = 0;
  const aboutThokimanHeightOffset = 0;
  const aboutThokimanTopOffset = 0;
  let aboutThokimanHeadColorHideProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 1);
    aboutThokimanHeadColorHideProps = {
      top: 1.5,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 2);
    aboutThokimanHeadColorHideProps = {
      top: 1.5,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 3);
    aboutThokimanHeadColorHideProps = {
      top: 1.5,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 4);
    aboutThokimanHeadColorHideProps = {
      top: 1.5,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 5);
    aboutThokimanHeadColorHideProps = {
      top: 1.5,
      width: 40,
      height: 95,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('about-dropdown-bar', 6);
    aboutThokimanHeadColorHideProps = {
      top: 5 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 95 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('about-dropdown-bar', 7);
    aboutThokimanHeadColorHideProps = {
      top: 1.5 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 8);
    aboutThokimanHeadColorHideProps = {
      top: 1.5 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 9);
    aboutThokimanHeadColorHideProps = {
      top: 1.5 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 10);
    aboutThokimanHeadColorHideProps = {
      top: 1.2 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 11);
    aboutThokimanHeadColorHideProps = {
      top: 1.5 + aboutThokimanTopOffset,
      width: 30 + aboutThokimanWidthOffset,
      height: 70 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 12);
    aboutThokimanHeadColorHideProps = {
      top: 1.5 + aboutThokimanTopOffset,
      width: 40 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('about-dropdown-bar', 13);
    aboutThokimanHeadColorHideProps = {
      top: 2 + aboutThokimanTopOffset,
      width: 30 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('about-dropdown-bar', 14);
    aboutThokimanHeadColorHideProps = {
      top: 2 + aboutThokimanTopOffset,
      width: 30 + aboutThokimanWidthOffset,
      height: 80 + aboutThokimanHeightOffset,
    };
  } else {
    console.log('about-dropdown-bar', 15);
    aboutThokimanHeadColorHideProps = {
      top: 5,
      width: 20,
      height: 110,
    };
  }

  return aboutThokimanHeadColorHideProps;
};
