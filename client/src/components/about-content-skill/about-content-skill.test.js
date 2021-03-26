import React from "react";
import { shallow } from "enzyme";

import { AboutSkill } from "./about-content-skill.component";

describe("AboutSkill component", () => {
  let wrapper;

  const mockObject = {};
  const mockIsSideBarHidden = false;
  const mockText = "";

  beforeEach(() => {
    const mockProps = {
      match: { url: mockText },
      visualDesignCommunication: mockObject,
      engineer: mockObject,
      technology: mockObject,
      isSideBarHidden: mockIsSideBarHidden,
    };
    wrapper = shallow(<AboutSkill {...mockProps} />);
  });

  it("should render AboutSkill component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
