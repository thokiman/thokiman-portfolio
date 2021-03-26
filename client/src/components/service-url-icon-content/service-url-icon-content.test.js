import React from "react";
import { shallow } from "enzyme";

import { ServiceUrlIconContent } from "./service-url-icon-content.component";

describe("ServiceUrlIconContent component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      items: mockArray,
    };
    wrapper = shallow(<ServiceUrlIconContent {...mockProps} />);
  });

  it("should render ServiceUrlIconContent component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
