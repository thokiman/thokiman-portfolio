import React from "react";
import { shallow } from "enzyme";

import { About } from "./about.component";

describe("About page", () => {
  let wrapper;
  const mockRoute = "/";
  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      location: { pathname: mockRoute },
      aboutRoute: mockRoute,
      skillRoute: mockRoute,
      educationRoute: mockRoute,
      projectRoute: mockRoute,
      summaryRoute: mockRoute,
      timelineCareerRoute: mockRoute,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<About {...mockProps} />);
  });
  it("should render About page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not render AboutSideBarHide if isSideBarHidden is false", () => {
    const mockProps = {
      location: { pathname: mockRoute },
      aboutRoute: mockRoute,
      skillRoute: mockRoute,
      educationRoute: mockRoute,
      projectRoute: mockRoute,
      summaryRoute: mockRoute,
      timelineCareerRoute: mockRoute,
      isSideBarHidden: mockFalseBool,
    };
    const newWrapper = shallow(<About {...mockProps} />);
    expect(newWrapper.exists("AboutSideBarHide")).toBe(false);
  });
});
