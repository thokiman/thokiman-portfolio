import React from "react";
import { shallow } from "enzyme";

import { FormInputTel } from "./form-input-tel.component";

describe("FormInputTel component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "phone",
      value: "012345678",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInputTel {...mockProps} />);
  });

  it("should render FormInputTel component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    wrapper.find("FormInputTelElement").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should render FormLabelElement if there is a label", () => {
    expect(wrapper.exists("FormLabelElement")).toBe(true);
  });

  it("should not render FormLabelElement if there is no label", () => {
    const mockNewProps = {
      label: "",
      value: "0123456",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInputTel {...mockNewProps} />);

    expect(newWrapper.exists("FormLabelElement")).toBe(false);
  });
});
