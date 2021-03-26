import React from "react";
import { shallow } from "enzyme";

import { TimelineCareerHeader } from "./timeline-career-header.component";

describe("TimelineCareerHeader component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TimelineCareerHeader />);
  });

  it("should render TimelineCareerHeader component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
