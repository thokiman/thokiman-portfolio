import React from "react";
import { shallow } from "enzyme";
import { HomePageThokimanContentContainer } from "./homepage-thokiman-container.component";

it("should render HomePageThokimanContentContainer component", () => {
  expect(shallow(<HomePageThokimanContentContainer />)).toMatchSnapshot();
});
