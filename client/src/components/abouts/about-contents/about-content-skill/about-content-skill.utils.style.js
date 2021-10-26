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

export const measureSkillContainerProps = (viewWidth, viewHeight) => {
  const skillContainerOffset = 5;
  let skillContainerProps;

  if (hasScreenSizeWindow(viewWidth, viewHeight)) {
    console.log('about-content-skill', 1);
    skillContainerProps = {
      top: 44,
    };
  } else if (hasScreenSizeWindow_1(viewWidth, viewHeight)) {
    console.log('about-content-skill', 2);
    skillContainerProps = {
      top: 44,
    };
  } else if (hasScreenSize1_1(viewWidth, viewHeight)) {
    console.log('about-content-skill', 3);
    skillContainerProps = {
      top: 44,
    };
  } else if (hasScreenSize1_2(viewWidth, viewHeight)) {
    console.log('about-content-skill', 4);
    skillContainerProps = {
      top: 44,
    };
  } else if (hasScreenSize1_3(viewWidth, viewHeight)) {
    console.log('about-content-skill', 5);
    skillContainerProps = {
      top: 44,
    };
  } else if (hasScreenSize1(viewWidth)) {
    console.log('about-content-skill', 6);
    skillContainerProps = {
      top: 44 + skillContainerOffset,
    };
  } else if (hasScreenSize2(viewWidth)) {
    console.log('about-content-skill', 7);
    skillContainerProps = {
      top: 44 + skillContainerOffset,
    };
  } else if (hasScreenSize3_1(viewWidth, viewHeight)) {
    console.log('about-content-skill', 8);
    skillContainerProps = {
      top: 44 + skillContainerOffset,
    };
  } else if (hasScreenSize3_2(viewWidth, viewHeight)) {
    console.log('about-content-skill', 9);
    skillContainerProps = {
      top: 44 + skillContainerOffset,
    };
  } else if (hasScreenSize3_3(viewWidth, viewHeight)) {
    console.log('about-content-skill', 10);
    skillContainerProps = {
      top: 44 + skillContainerOffset,
    };
  } else if (hasScreenSize3_4(viewWidth, viewHeight)) {
    console.log('about-content-skill', 11);
    skillContainerProps = {
      top: 44 + skillContainerOffset,
    };
  } else if (hasScreenSize3_5(viewWidth, viewHeight)) {
    console.log('about-content-skill', 12);
    skillContainerProps = {
      top: 44 + skillContainerOffset,
    };
  } else if (hasScreenSize4(viewWidth, viewHeight)) {
    console.log('about-content-skill', 13);
    skillContainerProps = {
      top: 44 + skillContainerOffset,
    };
  } else if (hasScreenSize5(viewWidth)) {
    console.log('about-content-skill', 14);
    skillContainerProps = {
      top: 44 + skillContainerOffset,
    };
  } else {
    console.log('about-content-skill', 15);
    skillContainerProps = {
      top: 70,
    };
  }

  return skillContainerProps;
};
