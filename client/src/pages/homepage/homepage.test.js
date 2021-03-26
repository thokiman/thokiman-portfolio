import React from "react";
import { shallow } from "enzyme";

import { HomePage } from "./homepage.component";

describe("Homepage page", () => {
  let wrapper;
  const mockText = "";
  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      shortDescription: mockText,
      quote: mockText,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<HomePage {...mockProps} />);
  });
  it("should render HomePage page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not render HomepageSideBarHide if isSideBarHidden is false", () => {
    expect(wrapper.exists("HomepageSideBarHide")).toBe(false);
  });
});
