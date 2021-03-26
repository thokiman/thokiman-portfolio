import React from "react";
import { shallow } from "enzyme";

import { TechnologySkill } from "./about-skill-technology.component";

describe("TechnologySkill component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      skill: {
        itemsPoint: {
          general: mockArray,
          content: mockArray,
          frontend: { html: mockArray, css: mockArray, javascript: mockArray },
          backend: {
            language: mockArray,
            framework: mockArray,
            database: mockArray,
          },
          architecture: mockArray,
          test: mockArray,
        },
      },
    };
    wrapper = shallow(<TechnologySkill {...mockProps} />);
  });

  it("should render TechnologySkill component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
