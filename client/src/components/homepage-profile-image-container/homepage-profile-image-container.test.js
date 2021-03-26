import React from "react";
import { shallow } from "enzyme";
import { HomePageProfileImageContainer } from "./homepage-profile-image-container.component";

it("should render HomePageProfileImageContainer component", () => {
  expect(shallow(<HomePageProfileImageContainer />)).toMatchSnapshot();
});
