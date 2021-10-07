export const hasScreenSizeWindow = (viewWidth, viewHeight) =>
  viewWidth > 1280 && viewHeight >= 979;

export const hasScreenSize1_1 = (viewWidth, viewHeight) =>
  viewWidth === 1024 && viewHeight === 1366;

export const hasScreenSize1_2 = (viewWidth, viewHeight) =>
  viewWidth === 1280 && viewHeight === 800;

export const hasScreenSize1_3 = (viewWidth, viewHeight) =>
  viewWidth > 772 && viewWidth <= 1024 && viewHeight <= 600;

export const hasScreenSize1 = (viewWidth) =>
  viewWidth > 540 && viewWidth <= 772;

export const hasScreenSize2 = (viewWidth) =>
  viewWidth > 470 && viewWidth <= 550;

export const hasScreenSize3_1 = (viewWidth, viewHeight) =>
  viewWidth > 300 && viewWidth <= 470 && viewHeight > 812 && viewHeight <= 823;

export const hasScreenSize3_2 = (viewWidth, viewHeight) =>
  viewWidth > 300 && viewWidth <= 470 && viewHeight > 736 && viewHeight <= 812;

export const hasScreenSize3_3 = (viewWidth, viewHeight) =>
  viewWidth > 300 && viewWidth <= 470 && viewHeight > 667 && viewHeight <= 736;

export const hasScreenSize3_4 = (viewWidth, viewHeight) =>
  viewWidth > 300 && viewWidth <= 470 && viewHeight > 568 && viewHeight <= 667;

export const hasScreenSize3_5 = (viewWidth, viewHeight) =>
  viewWidth > 300 && viewWidth <= 470 && viewHeight > 667 && viewHeight <= 812;

export const hasScreenSize3_6 = (viewWidth, viewHeight) =>
  viewWidth > 300 && viewWidth <= 470 && viewHeight > 568 && viewHeight <= 667;

export const hasScreenSize4 = (viewWidth, viewHeight) =>
  viewWidth > 300 && viewWidth <= 320 && viewHeight <= 568;

export const hasScreenSize5 = (viewWidth) => viewWidth <= 300;

export const getPathDepth = (pathname) => {
  let pathArr = pathname.split('/');
  pathArr = pathArr.filter((n) => n !== '');
  return pathArr.length;
};
