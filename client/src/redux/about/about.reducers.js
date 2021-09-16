import { about } from '../../data.object/about.data';
import { other } from '../../data.object/other.data';
import AboutActionTypes from './about.types';
const INTIAL_STATE = {
  about,
  other,
  isDropdownHidden: true,
  isVibrate: false,
  isDownloadClick: false,
  isYear2016Click: false,
  isYear2017Click: false,
  isYear2018Click: false,
  isYear2019Click: false,
  isYearCurrentClick: true,
  visualArtSkillImages: [],
  isLoadingVisualArtSkillImages: true,
};

const aboutReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case AboutActionTypes.SUMMARY_TOGGLE_VIBRATE:
      return {
        ...state,
        isVibrate: !state.isVibrate,
      };
    case AboutActionTypes.SUMMARY_TOGGLE_DOWNLOAD:
      return {
        ...state,
        isDownloadClick: !state.isDownloadClick,
      };
    case AboutActionTypes.PAGE_DROPDOWN_HIDDEN:
      return {
        ...state,
        isDropdownHidden: !state.isDropdownHidden,
      };
    case AboutActionTypes.TIMELINE_CAREER_YEAR_2016_CLICK:
      return {
        ...state,
        isYear2016Click: !state.isYear2016Click,
        isYear2017Click: false,
        isYear2018Click: false,
        isYear2019Click: false,
        isYearCurrentClick: false,
      };
    case AboutActionTypes.TIMELINE_CAREER_YEAR_2017_CLICK:
      return {
        ...state,
        isYear2017Click: !state.isYear2017Click,
        isYear2016Click: false,
        isYear2018Click: false,
        isYear2019Click: false,
        isYearCurrentClick: false,
      };
    case AboutActionTypes.TIMELINE_CAREER_YEAR_2018_CLICK:
      return {
        ...state,
        isYear2018Click: !state.isYear2018Click,
        isYear2016Click: false,
        isYear2017Click: false,
        isYear2019Click: false,
        isYearCurrentClick: false,
      };
    case AboutActionTypes.TIMELINE_CAREER_YEAR_2019_CLICK:
      return {
        ...state,
        isYear2019Click: !state.isYear2019Click,
        isYear2016Click: false,
        isYear2017Click: false,
        isYear2018Click: false,
        isYearCurrentClick: false,
      };
    case AboutActionTypes.TIMELINE_CAREER_YEAR_CURRENT_CLICK:
      return {
        ...state,
        isYearCurrentClick: !state.isYearCurrentClick,
        isYear2016Click: false,
        isYear2017Click: false,
        isYear2018Click: false,
        isYear2019Click: false,
      };

    default:
      return state;
  }
};

export default aboutReducer;
