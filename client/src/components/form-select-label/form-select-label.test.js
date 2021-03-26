import React from "react";
import { shallow } from "enzyme";

import { FormInputSelectLabel } from "./form-select-label.component";

describe("FormInputSelectLabel component", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      value: "Engineering",
    };
    wrapper = shallow(<FormInputSelectLabel {...mockProps} />);
  });

  it("should render FormInputSelectLabel component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
