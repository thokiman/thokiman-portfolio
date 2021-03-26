import React from "react";
import { shallow } from "enzyme";

import { FormInputSelectOptions } from "./form-select-options-element.component";

describe("FormInputSelectOptions component", () => {
  let wrapper;
  let mockHandleClick;
  beforeEach(() => {
    mockHandleClick = jest.fn();
    const mockProps = {
      handleClick: mockHandleClick,
    };
    wrapper = shallow(<FormInputSelectOptions {...mockProps} />);
  });

  it("should render FormInputSelectOptions component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
