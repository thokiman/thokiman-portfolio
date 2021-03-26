import React from "react";
import { shallow } from "enzyme";

import { AboutAchievementProject } from "./about-achievement-experience.component";

describe("AboutAchievementProject", () => {
  let wrapper;
  const mockArray = [];
  beforeEach(() => {
    const mockProps = {
      lastExperience: mockArray,
    };
    wrapper = shallow(<AboutAchievementProject {...mockProps} />);
  });
  it("should render AboutAchievementProject component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("shoud render an equal props of AboutAchievementProject as lastExperience prop", () => {
    expect(wrapper.exists("AchievementExperienceProject")).toBe(false);
  });
});
