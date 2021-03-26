import React from "react";
import { shallow } from "enzyme";

import { TimelineCareerLinkBelow } from "./timeline-career-link-below.component";

describe("TimelineCareerLink component", () => {
  let wrapper;
  let mockYearClick;
  const TestComponent = () => <div className="test" />;
  const mockYear = 2016;
  const mockIsClick = false;

  beforeEach(() => {
    mockYearClick = jest.fn();
    const mockProps = {
      TimelineIcon: TestComponent,
      year: mockYear,
      isClick: mockIsClick,
      yearClick: mockYearClick,
    };
    wrapper = shallow(<TimelineCareerLinkBelow {...mockProps} />);
  });

  it("should render TimelineCareerLinkBelow component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
