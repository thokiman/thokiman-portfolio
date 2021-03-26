import React from "react";
import { shallow } from "enzyme";

import { AboutEducationExperience } from "./about-education-experience.component";

describe("AboutEducationExperience component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      lastExperience: mockArray,
    };
    wrapper = shallow(<AboutEducationExperience {...mockProps} />);
  });

  it("should render AboutEducationExperience component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
