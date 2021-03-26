import React from "react";
import { shallow } from "enzyme";

import { SideBarIcon } from "./sidebar-icon.component";

describe("SideBarIcon component", () => {
  let wrapper;
  let mockToggleSideBarHidden;
  const mockFalseBool = false;

  beforeEach(() => {
    mockToggleSideBarHidden = jest.fn();
    const mockProps = {
      toggleSideBarHidden: mockToggleSideBarHidden,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<SideBarIcon {...mockProps} />);
  });

  it("should render SideBarIcon component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
