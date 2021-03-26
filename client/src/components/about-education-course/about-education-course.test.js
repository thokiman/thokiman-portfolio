import React from "react";
import { shallow } from "enzyme";

import { AboutEducationCourse } from "./about-education-course.component";

describe("AboutEducationCourse component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      lastCourse: mockArray,
    };
    wrapper = shallow(<AboutEducationCourse {...mockProps} />);
  });

  it("should render AboutEducationCourse component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
