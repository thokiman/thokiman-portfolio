import React from "react";
import { shallow } from "enzyme";

import { FormInputSelect } from "./form-select.component";

describe("FormInputSelect component", () => {
  let wrapper;
  let mockHandleType;
  let mockHandleClick;
  const mockFalseBool = false;

  beforeEach(() => {
    mockHandleType = jest.fn();
    mockHandleClick = jest.fn();
    const mockProps = {
      handleType: mockHandleType,
      isTypeClick: mockFalseBool,
      handleClick: mockHandleClick,
      value: "Engineering",
    };
    wrapper = shallow(<FormInputSelect {...mockProps} />);
  });

  it("should render FormInputSelect component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
