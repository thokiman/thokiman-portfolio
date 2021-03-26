import React from "react";
import { shallow } from "enzyme";

import { AboutThesisProject } from "./about-project-thesis.component";

describe("AboutThesisProject component", () => {
  let wrapper;
  const mockArray = [];

  beforeEach(() => {
    const mockProps = {
      thesis: mockArray,
    };
    wrapper = shallow(<AboutThesisProject {...mockProps} />);
  });

  it("should render AboutThesisProject component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
