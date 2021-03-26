import React from "react";
import { shallow } from "enzyme";

import { Service } from "./service.component";

describe("Service page", () => {
  let wrapper;
  const mockRoute = "/";
  const mockObject = [];
  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      art: mockObject,
      photo: mockObject,
      engineer: mockObject,
      fullstack: mockObject,
      serviceRoute: mockRoute,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<Service {...mockProps} />);
  });
  it("should render Service page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not render ServiceSideBarHide if isSideBarHidden is false", () => {
    expect(wrapper.exists("ServiceSideBarHide")).toBe(false);
  });
});
