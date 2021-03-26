import React from "react";
import { shallow } from "enzyme";

import { PortfolioItem } from "./portfolio-item.component";

describe("PortfolioItem  component", () => {
  let wrapper;
  const mockArray = [];
  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      items: mockArray,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<PortfolioItem {...mockProps} />);
  });

  it("should render PortfolioItem  component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
