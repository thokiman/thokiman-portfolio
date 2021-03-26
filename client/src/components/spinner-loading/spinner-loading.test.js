import React from "react";
import { shallow } from "enzyme";
import { SpinnerLoading } from "./spinner-loading.component";

it("should render SpinnerLoading component", () => {
  expect(shallow(<SpinnerLoading />)).toMatchSnapshot();
});
