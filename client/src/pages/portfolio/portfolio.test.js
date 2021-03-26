import React from "react";
import { shallow } from "enzyme";

import { Portfolio } from "./portfolio.component";

describe("Portfolio page", () => {
  let wrapper;
  const mockRoute = "/";
  const mockArray = [];
  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      portfolioRoute: mockRoute,
      allItems: mockArray,
      brandItems: mockArray,
      brandRoute: mockRoute,
      digitalArtItems: mockArray,
      digitalArtRoute: mockRoute,
      photographyBwItems: mockArray,
      photographyBwRoute: mockRoute,
      photographyColorItems: mockArray,
      photographyColorRoute: mockRoute,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<Portfolio {...mockProps} />);
  });
  it("should render Portfolio page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not render PortfolioSideBarHide if isSideBarHidden is false", () => {
    expect(wrapper.exists("PortfolioSideBarHide")).toBe(false);
  });
});
