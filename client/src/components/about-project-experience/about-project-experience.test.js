import React from "react";
import { shallow } from "enzyme";

import { AboutExperienceProject } from "./about-project-experience.component";

describe("AboutExperienceProject component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      experience: mockArray,
    };
    wrapper = shallow(<AboutExperienceProject {...mockProps} />);
  });

  it("should render AboutExperienceProject  component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
