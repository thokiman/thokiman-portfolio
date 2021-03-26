import React from "react";
import { shallow } from "enzyme";

import { Header } from "./header.component";

describe("Header component", () => {
  let wrapper;
  const mockAboutRoute = "/about";
  const mockPortfolioRoute = "/portfolio";
  const mockServiceRoute = "/service";
  const mockContactRoute = "/contact";

  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      location: { pathname: mockAboutRoute },
      aboutRoute: mockAboutRoute,
      portfolioRoute: mockPortfolioRoute,
      serviceRoute: mockServiceRoute,
      contactRoute: mockContactRoute,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render Header component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
