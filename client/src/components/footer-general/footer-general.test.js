import React from "react";
import { shallow } from "enzyme";

import { FooterGeneral } from "./footer-general.component";

describe("FooterGeneral component", () => {
  let wrapper;
  const mockSocialIcon = [];
  const mockFalseBool = false;

  beforeEach(() => {
    const mockProps = {
      socialIcon: mockSocialIcon,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<FooterGeneral {...mockProps} />);
  });

  it("should render FooterGeneral component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
