import AboutActionTypes from './about.types';

export const toggleVibrate = () => ({
  type: AboutActionTypes.SUMMARY_TOGGLE_VIBRATE,
});

export const toggleDownload = () => ({
  type: AboutActionTypes.SUMMARY_TOGGLE_DOWNLOAD,
});

export const toggleDropdownHidden = () => ({
  type: AboutActionTypes.PAGE_DROPDOWN_HIDDEN,
});

export const toggleYear2016Click = () => ({
  type: AboutActionTypes.TIMELINE_CAREER_YEAR_2016_CLICK,
});
export const toggleYear2017Click = () => ({
  type: AboutActionTypes.TIMELINE_CAREER_YEAR_2017_CLICK,
});
export const toggleYear2018Click = () => ({
  type: AboutActionTypes.TIMELINE_CAREER_YEAR_2018_CLICK,
});
export const toggleYear2019Click = () => ({
  type: AboutActionTypes.TIMELINE_CAREER_YEAR_2019_CLICK,
});
export const toggleYearCurrentClick = () => ({
  type: AboutActionTypes.TIMELINE_CAREER_YEAR_CURRENT_CLICK,
});
