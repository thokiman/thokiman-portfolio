import React from "react";
import { shallow } from "enzyme";

import { AboutEducation } from "./about-content-education.component";

describe("AboutEducation component", () => {
  let wrapper;

  const mockArray = [];
  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      lastBachelor: mockArray,
      lastExperiences: mockArray,
      lastCourses: mockArray,
      personality: mockArray,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<AboutEducation {...mockProps} />);
  });

  it("should render AboutEducation component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
