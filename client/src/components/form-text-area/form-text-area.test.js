import React from "react";
import { shallow } from "enzyme";

import { FormTextArea } from "./form-text-area.component";

describe("FormTextArea component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "message",
      value: "wowowowwowowwo",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormTextArea {...mockProps} />);
  });

  it("should render FormTextAreaElement component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    wrapper.find("FormTextAreaElement").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should render FormLabelElement if there is a label", () => {
    expect(wrapper.exists("FormLabelElement")).toBe(true);
  });

  it("should not render FormLabelElement if there is no label", () => {
    const mockNewProps = {
      label: "",
      value: "wowwowowwo",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormTextArea {...mockNewProps} />);

    expect(newWrapper.exists("FormLabelElement")).toBe(false);
  });
});
