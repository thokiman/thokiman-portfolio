import React from "react";
import { shallow } from "enzyme";

import { PortfolioHeader } from "./portfolio-header.component";

describe("PortfolioHeader  component", () => {
  let wrapper;
  const mockRoute = "/";
  const mockTitle = "";
  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      location: { pathname: mockRoute },
      portfolioRoute: mockRoute,
      brandRoute: mockRoute,
      brandTitle: mockTitle,
      digitalArtRoute: mockRoute,
      digitalArtTitle: mockTitle,
      photographyBwTitle: mockTitle,
      photographyBwRoute: mockRoute,
      photographyColorTitle: mockTitle,
      photographyColorRoute: mockRoute,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<PortfolioHeader {...mockProps} />);
  });

  it("should render PortfolioHeader  component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
