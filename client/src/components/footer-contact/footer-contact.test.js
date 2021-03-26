import React from "react";
import { shallow } from "enzyme";

import { FooterContact } from "./footer-contact.component";

describe("FooterContact component", () => {
  let wrapper;
  const mockFalseBool = false;

  beforeEach(() => {
    const mockProps = {
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<FooterContact {...mockProps} />);
  });

  it("should render FooterContact component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
