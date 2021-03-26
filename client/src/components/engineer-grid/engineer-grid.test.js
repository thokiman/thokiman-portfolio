import React from "react";
import { shallow } from "enzyme";

import { EngineerGrid } from "./engineer-grid.component";

describe("EngineerGrid component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      engineerSkill: mockArray,
    };
    wrapper = shallow(<EngineerGrid {...mockProps} />);
  });

  it("should render EngineerGrid component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
