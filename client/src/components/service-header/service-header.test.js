import React from "react";
import { shallow } from "enzyme";

import { ServiceHeader } from "./service-header.component";

describe("ServiceHeader component", () => {
  let wrapper;

  const mockFalseBool = false;
  const mockRoute = "/";
  beforeEach(() => {
    const mockProps = {
      location: { pathname: mockRoute },
      art: { routeName: mockRoute },
      photo: { routeName: mockRoute },
      engineer: { routeName: mockRoute },
      fullstack: { routeName: mockRoute },
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<ServiceHeader {...mockProps} />);
  });

  it("should render ServiceHeader component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
