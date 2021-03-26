import React from "react";
import { shallow } from "enzyme";

import { PortfolioContentItem } from "./portfolio-content-item.component";

it("should render PortfolioContent component", () => {
  expect(shallow(<PortfolioContentItem />)).toMatchSnapshot();
});
