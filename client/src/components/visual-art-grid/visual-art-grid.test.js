import React from "react";
import { shallow } from "enzyme";

import { VisualArtGrid } from "./visual-art-grid.component";

describe("VisualArtGrid component", () => {
  let wrapper;
  const mockText = "";
  const mockArray = [];
  beforeEach(() => {
    const mockProps = {
      visualSkill: { name: mockText, itemsPoint: mockArray },
    };
    wrapper = shallow(<VisualArtGrid {...mockProps} />);
  });

  it("should render VisualArtGrid component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
