import React from "react";
import { shallow } from "enzyme";

import { EngineerGridItem } from "./engineer-grid-item.component";

describe("EngineerGridItem component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      itemsPoint: mockArray,
    };
    wrapper = shallow(<EngineerGridItem {...mockProps} />);
  });

  it("should render EngineerGridItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
