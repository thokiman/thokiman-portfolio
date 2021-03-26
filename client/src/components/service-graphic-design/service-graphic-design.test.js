import React from "react";
import { shallow } from "enzyme";

import { ServiceGraphicDesign } from "./service-graphic-design.component";

describe("ServiceGraphicDesign component", () => {
  let wrapper;

  const mockFalseBool = false;
  const mockText = "";
  const mockArray = [];
  beforeEach(() => {
    const mockProps = {
      isSideBarHidden: mockFalseBool,
      art: { title: mockText, description: mockText, items: mockArray },
    };
    wrapper = shallow(<ServiceGraphicDesign {...mockProps} />);
  });

  it("should render ServiceGraphicDesign component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
