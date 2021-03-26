import React from "react";
import { shallow } from "enzyme";

import { PortfolioContent } from "./portfolio-content.component";

it("should render PortfolioContent component", () => {
  expect(shallow(<PortfolioContent />)).toMatchSnapshot();
});
