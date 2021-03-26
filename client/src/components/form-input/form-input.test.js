import React from "react";
import { shallow } from "enzyme";

import { FormInput } from "./form-input.component";

describe("FormInput component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "email",
      value: "test@gmail.com",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it("should render FormInput component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    wrapper.find("FormInputElement").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should render FormLabelElement if there is a label", () => {
    expect(wrapper.exists("FormLabelElement")).toBe(true);
  });

  it("should not render FormLabelElement if there is no label", () => {
    const mockNewProps = {
      label: "",
      value: "test@gmail.com",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.exists("FormLabelElement")).toBe(false);
  });
});
