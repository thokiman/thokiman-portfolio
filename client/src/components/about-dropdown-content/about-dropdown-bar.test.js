import React from "react";
import { shallow } from "enzyme";

import { AboutDropdownBar } from "./about-dropdown-bar.component";

describe("AboutDropdownBar component", () => {
  let wrapper;
  let mockToggleDropdownHidden;
  const mockText = "";
  const mockFalseBool = false;

  beforeEach(() => {
    mockToggleDropdownHidden = jest.fn();

    const mockProps = {
      isDropdownHidden: mockFalseBool,
      toggleDropdownHidden: mockToggleDropdownHidden,
      aboutRoute: mockText,
      timelineCareerRoute: mockText,
      location: { pathname: mockText },
    };
    wrapper = shallow(<AboutDropdownBar {...mockProps} />);
  });

  it("should render AboutDropdownBar component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call toggleDropdownHidden when AboutDropdownLinkContainer 'About' click ", () => {
    wrapper.find("AboutDropdownLinkContainer").at(0).simulate("click");
    expect(mockToggleDropdownHidden).toHaveBeenCalled();
  });
  it("should not render AboutThokimanHeadColorHide if isDropodownHidden is false", () => {
    const mockProps = {
      isDropdownHidden: mockFalseBool,
      toggleDropdownHidden: mockToggleDropdownHidden,
      aboutRoute: mockText,
      timelineCareerRoute: mockText,
      location: { pathname: mockText },
    };
    const newWrapper = shallow(<AboutDropdownBar {...mockProps} />);
    expect(newWrapper.exists("AboutThokimanHeadColorHide")).toBe(false);
  });
});
