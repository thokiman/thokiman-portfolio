import React from "react";
import { shallow } from "enzyme";

import { AboutHomeContent } from "./about-content.component";

describe("AboutHomeContent component", () => {
  let wrapper;
  const mockFalseBool = false;
  const mockTrueBool = true;

  beforeEach(() => {
    const mockProps = {
      isSideBarHidden: mockFalseBool,
      isDropdownHidden: mockTrueBool,
    };
    wrapper = shallow(<AboutHomeContent {...mockProps} />);
  });

  it("should render AboutHomeContent component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
