import React from "react";
import { shallow } from "enzyme";

import { AboutDropdown } from "./about-dropdown.component";

describe("AboutDropdown component", () => {
  let wrapper;
  const mockText = "";
  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      location: { pathname: mockText },
      aboutRoute: mockText,
      timelineCareerRoute: mockText,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<AboutDropdown {...mockProps} />);
  });

  it("should render AboutDropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
