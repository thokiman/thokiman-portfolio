import React from "react";
import { shallow } from "enzyme";

import { AboutDropdownOptions } from "./about-dropdown-options.component";

describe("AboutDropdownOptions component", () => {
  let wrapper;

  const mockText = "";

  beforeEach(() => {
    const mockProps = {
      location: { pathname: mockText },
      skillRoute: mockText,
      summaryRoute: mockText,
      educationRoute: mockText,
      projectRoute: mockText,
    };
    wrapper = shallow(<AboutDropdownOptions {...mockProps} />);
  });

  it("should render AboutDropdownOptions component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
