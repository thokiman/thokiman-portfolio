import React from "react";
import { shallow } from "enzyme";

import { TimelineCareerLink } from "./timeline-career-link.component";

describe("TimelineCareerLink component", () => {
  let wrapper;
  const mockText = "upper";

  beforeEach(() => {
    const mockProps = {
      placement: mockText,
    };
    wrapper = shallow(<TimelineCareerLink {...mockProps} />);
  });

  it("should render TimelineCareerLink component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
