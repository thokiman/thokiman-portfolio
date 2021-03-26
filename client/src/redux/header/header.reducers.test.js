import HeaderActionTypes from "./header.types";
import headerReducer from "./header.reducers";

const initialState = {
  isSideBarHidden: false,
};

describe("headerReducer", () => {
  it("should return initial state", () => {
    expect(headerReducer(undefined, {})).toEqual(initialState);
  });
  it("should toggle sidebar hidden with toggleSideBarHidden action", () => {
    expect(
      headerReducer(initialState, {
        type: HeaderActionTypes.IS_SIDEBAR_HIDDEN,
      }).isSideBarHidden
    ).toBe(true);
  });
});
