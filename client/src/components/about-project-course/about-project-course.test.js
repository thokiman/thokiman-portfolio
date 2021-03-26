import React from "react";
import { shallow } from "enzyme";

import { AboutCourseProject } from "./about-project-course.component";

describe("AboutCourseProject component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      course: mockArray,
    };
    wrapper = shallow(<AboutCourseProject {...mockProps} />);
  });

  it("should render AboutCourseProject component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
