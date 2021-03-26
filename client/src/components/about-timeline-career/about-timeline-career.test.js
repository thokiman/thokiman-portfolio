import React from "react";
import { shallow } from "enzyme";

import { AboutTimelineCareer } from "./about-timeline-career.component";

describe("AboutTimelineCareer component", () => {
  let wrapper;
  const mockArray = [];
  const mockText = "";
  const mockFalseBool = false;

  beforeEach(() => {
    const mockProps = {
      careerPath: {
        title: mockText,
        items: { beforeWorking: mockArray },
      },
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<AboutTimelineCareer {...mockProps} />);
  });

  it("should render AboutTimelineCareer component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
