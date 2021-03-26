import React from "react";
import { shallow } from "enzyme";

import { EducationGrid } from "./education-grid.component";

describe("EducationGrid component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      imagePath: mockArray,
    };
    wrapper = shallow(<EducationGrid {...mockProps} />);
  });

  it("should render EducationGrid component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
