import React from "react";
import { shallow } from "enzyme";

import { VisualArtSkill } from "./about-skill-visual-art.component";

describe("VisualArtSkill component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      skill: {
        itemsPoint: { digitalArt: mockArray, photography: mockArray },
      },
    };
    wrapper = shallow(<VisualArtSkill {...mockProps} />);
  });

  it("should render VisualArtSkill component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
