import React from "react";
import { shallow } from "enzyme";

import { ServiceHomeContent } from "./service-content.component";

describe("ServiceHomeContent   component", () => {
  let wrapper;

  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<ServiceHomeContent {...mockProps} />);
  });

  it("should render ServiceHomeContent   component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
