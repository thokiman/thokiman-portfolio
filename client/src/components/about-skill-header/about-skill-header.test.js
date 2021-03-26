import React from "react";
import { shallow } from "enzyme";

import { SkillHeader } from "./about-skill-header.component";

describe("SkillHeader component", () => {
  let wrapper;
  const mockText = "";

  beforeEach(() => {
    const mockProps = {
      location: { pathname: mockText },
      skillRoute: mockText,
      visualArtRoute: mockText,
      engineerRoute: mockText,
      technologyRoute: mockText,
    };
    wrapper = shallow(<SkillHeader {...mockProps} />);
  });

  it("should render SkillHeader component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
