import React from "react";
import { shallow } from "enzyme";

import { AboutEducationPersonality } from "./about-education-personality.component";

describe("AboutEducationPersonality component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      personality: mockArray,
    };
    wrapper = shallow(<AboutEducationPersonality {...mockProps} />);
  });

  it("should render AboutEducationPersonality component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
