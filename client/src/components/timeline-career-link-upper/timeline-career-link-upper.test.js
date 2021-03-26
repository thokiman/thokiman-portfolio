import React from "react";
import { shallow } from "enzyme";

import { TimelineCareerLinkUpper } from "./timeline-career-link-upper.component";

describe("TimelineCareerLinkUpper component", () => {
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
    wrapper = shallow(<TimelineCareerLinkUpper {...mockProps} />);
  });

  it("should render TimelineCareerLinkUpper component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
