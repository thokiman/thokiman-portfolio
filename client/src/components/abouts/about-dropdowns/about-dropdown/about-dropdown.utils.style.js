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

export const measureAboutDropdownContainerProps = (viewWidth, viewHeight) => {
  const aboutDropdownContainerHeightOffset = 0;
  const aboutDropdownContainerTopOffset = 0;
  let abouDropdownContainerProps;

  if (hasScreenSize1(viewWidth)) {
    console.log('about-dropdown', 1);
    abouDropdownContainerProps = {
      height: 52 + aboutDropdownContainerHeightOffset,
      top: 0 + aboutDropdownContainerTopOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('about-dropdown', 2);
    abouDropdownContainerProps = {
      height: 49 + aboutDropdownContainerHeightOffset,
      top: 0 + aboutDropdownContainerTopOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('about-dropdown', 3);
    abouDropdownContainerProps = {
      height: 42 + aboutDropdownContainerHeightOffset,
      top: 0 + aboutDropdownContainerTopOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('about-dropdown', 4);
    abouDropdownContainerProps = {
      height: 52 + aboutDropdownContainerHeightOffset,
      top: 0 + aboutDropdownContainerTopOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('about-dropdown', 5);
    abouDropdownContainerProps = {
      height: 42 + aboutDropdownContainerHeightOffset,
      top: 0 + aboutDropdownContainerTopOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('about-dropdown', 6);
    abouDropdownContainerProps = {
      height: 42 + aboutDropdownContainerHeightOffset,
      top: 0 + aboutDropdownContainerTopOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('about-dropdown', 7);
    abouDropdownContainerProps = {
      height: 42 + aboutDropdownContainerHeightOffset,
      top: 0 + aboutDropdownContainerTopOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('about-dropdown', 8);
    abouDropdownContainerProps = {
      height: 42 + aboutDropdownContainerHeightOffset,
      top: 0 + aboutDropdownContainerTopOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('about-dropdown', 9);
    abouDropdownContainerProps = {
      height: 49 + aboutDropdownContainerHeightOffset,
      top: 0 + aboutDropdownContainerTopOffset,
    };
  } else {
    console.log('about-dropdown', 10);
    abouDropdownContainerProps = {
      height: 60,
      top: 1,
    };
  }

  return abouDropdownContainerProps;
};
