import React from "react";
import { shallow } from "enzyme";

import { EngineerSkill } from "./about-skill-engineer.component";

describe("EngineerSkill component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      skill: { itemsPoint: mockArray },
    };
    wrapper = shallow(<EngineerSkill {...mockProps} />);
  });

  it("should render EngineerSkill component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
