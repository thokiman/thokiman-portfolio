import React from "react";
import { shallow } from "enzyme";

import { TechnologyGrid } from "./technology-grid.component";

describe("TechnologyGrid component", () => {
  let wrapper;
  const mockText = "";
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      technologySkill: { name: mockText, itemsPoint: mockArray },
    };
    wrapper = shallow(<TechnologyGrid {...mockProps} />);
  });

  it("should render TechnologyGrid component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
