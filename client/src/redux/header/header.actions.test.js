import { toggleSideBarHidden } from "./header.actions";
import HeaderActionTypes from "./header.types";

describe("toggleSideBarHidden action", () => {
  it("should create the the toggleSideBarHidden action", () => {
    expect(toggleSideBarHidden().type).toEqual(
      HeaderActionTypes.IS_SIDEBAR_HIDDEN
    );
  });
});
