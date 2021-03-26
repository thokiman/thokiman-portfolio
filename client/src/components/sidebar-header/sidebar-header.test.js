import React from "react";
import { shallow } from "enzyme";

import { SideBarHeader } from "./sidebar-header.component";

describe("SideBarHeader component", () => {
  let wrapper;
  const mockRoute = "/";

  const mockFalseBool = false;

  beforeEach(() => {
    const mockProps = {
      isSideBarHidden: mockFalseBool,
      location: { pathname: mockRoute },
      aboutRoute: mockRoute,
      portfolioRoute: mockRoute,
      serviceRoute: mockRoute,
      contactRoute: mockRoute,
    };
    wrapper = shallow(<SideBarHeader {...mockProps} />);
  });

  it("should render SideBarHeader component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
