import React from "react";
import { shallow } from "enzyme";

import { ServiceEngineer } from "./service-engineer.component";

describe("ServiceEngineer   component", () => {
  let wrapper;

  const mockFalseBool = false;
  const mockText = "";
  const mockArray = [];
  beforeEach(() => {
    const mockProps = {
      isSideBarHidden: mockFalseBool,
      engineer: { title: mockText, description: mockText, items: mockArray },
    };
    wrapper = shallow(<ServiceEngineer {...mockProps} />);
  });

  it("should render ServiceEngineer   component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
