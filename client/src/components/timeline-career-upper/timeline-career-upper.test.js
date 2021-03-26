import React from "react";
import { shallow } from "enzyme";

import { TimelineCareerUpper } from "./timeline-career-upper.component";

describe("TimelineCareerUpper component", () => {
  let wrapper;
  let mockToggleYear2016Click;
  let mockToggleYear2018Click;
  let mockToggleYearCurrentClick;
  const mockFalseBool = false;
  const mockTrueBool = true;
  beforeEach(() => {
    mockToggleYear2016Click = jest.fn();
    mockToggleYear2018Click = jest.fn();
    mockToggleYearCurrentClick = jest.fn();
    const mockProps = {
      isYear2016Click: mockFalseBool,
      isYear2018Click: mockFalseBool,
      isYearCurrentClick: mockTrueBool,
      toggleYear2016Click: mockToggleYear2016Click,
      toggleYear2018Click: mockToggleYear2018Click,
      toggleYearCurrentClick: mockToggleYearCurrentClick,
    };
    wrapper = shallow(<TimelineCareerUpper {...mockProps} />);
  });

  it("should render TimelineCareerUpper component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
