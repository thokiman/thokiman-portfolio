import React from "react";
import { shallow } from "enzyme";

import { ContactForm } from "./contact-form-container.component";

describe("ContactForm component", () => {
  let wrapper;
  let mockToggleSubmitButtonClick;
  let mockToggleTypeFillFormClick;
  let mockToggleTypeSubmitFormClick;
  let mockPostFormContactStart;
  const mockFalseBool = false;

  beforeEach(() => {
    mockToggleSubmitButtonClick = jest.fn();
    mockToggleTypeFillFormClick = jest.fn();
    mockToggleTypeSubmitFormClick = jest.fn();
    mockPostFormContactStart = jest.fn();
    const mockProps = {
      isSideBarHidden: mockFalseBool,
      isTypeClick: mockFalseBool,
      isButtonClick: mockFalseBool,
      toggleSubmitButtonClick: mockToggleSubmitButtonClick,
      toggleTypeFillFormClick: mockToggleTypeFillFormClick,
      toggleTypeSubmitFormClick: mockToggleTypeSubmitFormClick,
      postFormContactStart: mockPostFormContactStart,
    };
    wrapper = shallow(<ContactForm {...mockProps} />);
  });

  it("should render ContactForm component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
