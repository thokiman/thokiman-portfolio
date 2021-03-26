import React from "react";
import { shallow } from "enzyme";

import { ServicePhotography } from "./service-photography.component";

describe("ServicePhotography component", () => {
  let wrapper;
  const mockArray = [];
  const mockText = "";

  beforeEach(() => {
    const mockProps = {
      photo: { title: mockText, description: mockArray, items: mockArray },
    };
    wrapper = shallow(<ServicePhotography {...mockProps} />);
  });

  it("should render ServicePhotography component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
