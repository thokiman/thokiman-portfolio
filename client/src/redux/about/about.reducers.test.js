import AboutActionTypes from "./about.types";
import aboutReducer from "./about.reducers";
import { about } from "../../data.object/about.data";

const initialState = {
  isDropdownHidden: true,
  isVibrate: false,
  isDownloadClick: false,
  about,
  isYear2016Click: false,
  isYear2017Click: false,
  isYear2018Click: false,
  isYear2019Click: false,
  isYearCurrentClick: true,
};

describe("aboutReducer", () => {
  it("should return initial state", () => {
    expect(aboutReducer(undefined, {})).toEqual(initialState);
  });

  it("should toggle dropdown with toggleDropdownHidden action", () => {
    expect(
      aboutReducer(initialState, {
        type: AboutActionTypes.PAGE_DROPDOWN_HIDDEN,
      }).isDropdownHidden
    ).toBe(false);
  });

  it("should toggle vibrate with toggleVibrate action", () => {
    expect(
      aboutReducer(initialState, {
        type: AboutActionTypes.SUMMARY_TOGGLE_VIBRATE,
      }).isVibrate
    ).toBe(true);
  });

  it("should toggle download with toggleDownload action", () => {
    expect(
      aboutReducer(initialState, {
        type: AboutActionTypes.SUMMARY_TOGGLE_DOWNLOAD,
      }).isDownloadClick
    ).toBe(true);
  });
  it("should toggle year 2016 with toggleYear2016Click action", () => {
    expect(
      aboutReducer(initialState, {
        type: AboutActionTypes.TIMELINE_CAREER_YEAR_2016_CLICK,
      }).isYear2016Click
    ).toBe(true);
  });
  it("should toggle year 2017 with toggleYear2017Click action", () => {
    expect(
      aboutReducer(initialState, {
        type: AboutActionTypes.TIMELINE_CAREER_YEAR_2017_CLICK,
      }).isYear2017Click
    ).toBe(true);
  });
  it("should toggle year 2018 with toggleYear2018Click action", () => {
    expect(
      aboutReducer(initialState, {
        type: AboutActionTypes.TIMELINE_CAREER_YEAR_2018_CLICK,
      }).isYear2018Click
    ).toBe(true);
  });
  it("should toggle year 2019 with toggleYear2019Click action", () => {
    expect(
      aboutReducer(initialState, {
        type: AboutActionTypes.TIMELINE_CAREER_YEAR_2019_CLICK,
      }).isYear2019Click
    ).toBe(true);
  });
  it("should toggle current year with toggleYearCurrentClick action", () => {
    expect(
      aboutReducer(initialState, {
        type: AboutActionTypes.TIMELINE_CAREER_YEAR_CURRENT_CLICK,
      }).isYearCurrentClick
    ).toBe(false);
  });
});
