import React from "react";
import { shallow } from "enzyme";

import { AboutSummary } from "./about-content-summary.component";

describe("AboutSummary component", () => {
  let wrapper;
  let mockToggleDownload;
  let mockToggleVibrate;
  const mockText = "";
  const mockFalseBool = false;
  beforeEach(() => {
    mockToggleDownload = jest.fn();
    mockToggleVibrate = jest.fn();

    const mockProps = {
      longDescription: {
        p1: mockText,
        p2: mockText,
        p3: mockText,
        p4: mockText,
      },
      cv: { iconPath: mockText },
      isVibrate: mockFalseBool,
      isDownloadClick: mockFalseBool,
      toggleDownload: mockToggleDownload,
      toggleVibrate: mockToggleVibrate,
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<AboutSummary {...mockProps} />);
  });

  it("should render AboutSummary component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call toggleDownload when download AboutDownloadText click", () => {
    wrapper.find("AboutDownloadText").simulate("click");
    expect(mockToggleDownload).toHaveBeenCalled();
  });
  it("should call toggleVibrate when download AboutDownloadText enter and leave ", () => {
    wrapper.find("AboutDownloadText").simulate("mouseenter");
    wrapper.find("AboutDownloadText").simulate("mouseleave");
    expect(mockToggleVibrate).toHaveBeenCalled();
  });
});
