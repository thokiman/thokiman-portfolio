import React from "react";
import { shallow } from "enzyme";

import { AboutEducationBachelor } from "./about-education-bachelor.component";

describe("AboutDropdownOptions component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      lastBachelor: mockArray,
    };
    wrapper = shallow(<AboutEducationBachelor {...mockProps} />);
  });

  it("should render AboutEducationBachelor component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
