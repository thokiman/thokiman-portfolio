import React from "react";
import { shallow } from "enzyme";

import { TimelineCareerItem } from "./timeline-career-item.component";

describe("TimelineCareerItem component", () => {
  let wrapper;
  const mockArray = [];
  beforeEach(() => {
    const mockProps = {
      beforeWorking: mockArray,
    };
    wrapper = shallow(<TimelineCareerItem {...mockProps} />);
  });

  it("should render TimelineCareerItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
