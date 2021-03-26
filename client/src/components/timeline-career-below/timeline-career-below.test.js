import React from "react";
import { shallow } from "enzyme";

import { TimelineCareerBelow } from "./timeline-career-below.component";

describe("TimelineCareerBelow component", () => {
  let wrapper;
  let mockToggleYear2017Click;
  let mockToggleYear2019Click;
  const mockFalseBool = false;
  beforeEach(() => {
    mockToggleYear2017Click = jest.fn();
    mockToggleYear2019Click = jest.fn();
    const mockProps = {
      isYear2017Click: mockFalseBool,
      isYear2019Click: mockFalseBool,
      toggleYear2017Click: mockToggleYear2017Click,
      toggleYear2019Click: mockToggleYear2019Click,
    };
    wrapper = shallow(<TimelineCareerBelow {...mockProps} />);
  });

  it("should render TimelineCareerBelow component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
