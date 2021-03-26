import React from "react";
import { shallow } from "enzyme";

import { AboutProject } from "./about-content-project.component";

describe("AboutProject component", () => {
  let wrapper;

  const mockArray = [];
  const mockFalseBool = false;

  beforeEach(() => {
    const mockProps = {
      thesis: mockArray,
      courses: mockArray,
      experiences: mockArray,
      lastExperiences: mockArray,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<AboutProject {...mockProps} />);
  });

  it("should render AboutProject component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
