import React from "react";
import { shallow } from "enzyme";

import { ServiceGeneralContent } from "./service-general-content.component";

describe("ServiceGeneralContent component", () => {
  let wrapper;

  const mockText = "";
  const mockArray = [];
  beforeEach(() => {
    const mockProps = {
      title: mockText,
      description: mockArray,
    };
    wrapper = shallow(<ServiceGeneralContent {...mockProps} />);
  });

  it("should render ServiceGeneralContent component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
