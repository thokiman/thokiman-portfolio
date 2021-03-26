import React from "react";
import { shallow } from "enzyme";

import { ServiceIconContent } from "./service-icon-content.component";

describe("ServiceIconContent component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      items: mockArray,
    };
    wrapper = shallow(<ServiceIconContent {...mockProps} />);
  });

  it("should render ServiceIconContent component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
