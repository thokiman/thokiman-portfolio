import React from "react";
import { shallow } from "enzyme";

import { ServiceFullStackDeveloper } from "./service-full-stack-developer.component";

describe("ServiceFullStackDeveloper component", () => {
  let wrapper;

  const mockFalseBool = false;
  const mockText = "";
  const mockArray = [];
  beforeEach(() => {
    const mockProps = {
      isSideBarHidden: mockFalseBool,
      fullstack: { title: mockText, description: mockText, items: mockArray },
    };
    wrapper = shallow(<ServiceFullStackDeveloper {...mockProps} />);
  });

  it("should render ServiceFullStackDeveloper component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
