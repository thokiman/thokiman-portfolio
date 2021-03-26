import React from "react";
import { shallow } from "enzyme";
import { HomePageProfileTextContainer } from "./homepage-background-profile-text-container.component";

it("should render HomePageProfileTextContainer component", () => {
  expect(shallow(<HomePageProfileTextContainer />)).toMatchSnapshot();
});
