import React from "react";
import { shallow } from "enzyme";

import { ServiceUrlGeneralContent } from "./service-url-general-content.component";

describe("ServiceUrlGeneralContent component", () => {
  let wrapper;
  const mockArray = [];
  const mockText = "";

  beforeEach(() => {
    const mockProps = {
      title: mockText,
      description: mockArray,
    };
    wrapper = shallow(<ServiceUrlGeneralContent {...mockProps} />);
  });

  it("should render ServiceUrlGeneralContent component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
