import {
  toggleDownload,
  toggleVibrate,
  toggleDropdownHidden,
  toggleYear2016Click,
  toggleYear2017Click,
  toggleYear2018Click,
  toggleYear2019Click,
  toggleYearCurrentClick,
} from "./about.actions";
import AboutActionTypes from "./about.types";

describe("toggleDownload action", () => {
  it("should create the the toggledDownload action", () => {
    expect(toggleDownload().type).toEqual(
      AboutActionTypes.SUMMARY_TOGGLE_DOWNLOAD
    );
  });
});

describe("toggleVibrate action", () => {
  it("should create the the toggleVibrate action", () => {
    expect(toggleVibrate().type).toEqual(
      AboutActionTypes.SUMMARY_TOGGLE_VIBRATE
    );
  });
});
describe("toggleDropdownHidden action", () => {
  it("should create the the toggleDropdownHidden action", () => {
    expect(toggleDropdownHidden().type).toEqual(
      AboutActionTypes.PAGE_DROPDOWN_HIDDEN
    );
  });
});
describe("toggleYear2016Click action", () => {
  it("should create the the toggleYear2016Click action", () => {
    expect(toggleYear2016Click().type).toEqual(
      AboutActionTypes.TIMELINE_CAREER_YEAR_2016_CLICK
    );
  });
});
describe("toggleYear2017Click action", () => {
  it("should create the the toggleYear2017Click action", () => {
    expect(toggleYear2017Click().type).toEqual(
      AboutActionTypes.TIMELINE_CAREER_YEAR_2017_CLICK
    );
  });
});
describe("toggleYear2018Click action", () => {
  it("should create the the toggleYear2018Click action", () => {
    expect(toggleYear2018Click().type).toEqual(
      AboutActionTypes.TIMELINE_CAREER_YEAR_2018_CLICK
    );
  });
});
describe("toggleYear2019Click action", () => {
  it("should create the the toggleYear2019Click action", () => {
    expect(toggleYear2019Click().type).toEqual(
      AboutActionTypes.TIMELINE_CAREER_YEAR_2019_CLICK
    );
  });
});
describe("toggleYearCurrentClick action", () => {
  it("should create the the toggleYearCurrentClick action", () => {
    expect(toggleYearCurrentClick().type).toEqual(
      AboutActionTypes.TIMELINE_CAREER_YEAR_CURRENT_CLICK
    );
  });
});
