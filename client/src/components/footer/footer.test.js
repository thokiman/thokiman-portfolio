import React from "react";
import { shallow } from "enzyme";

import { Footer } from "./footer.component";

describe("Footer component", () => {
  let wrapper;
  const mockText = "";
  const mockContactRoute = "/contact";
  const mockPortfolioRoute = "/portfolio";
  const mockFalseBool = false;

  beforeEach(() => {
    const mockProps = {
      location: { pathname: mockText },
      contactRoute: mockContactRoute,
      portfolioRoute: mockPortfolioRoute,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<Footer {...mockProps} />);
  });

  it("should render Footer component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
