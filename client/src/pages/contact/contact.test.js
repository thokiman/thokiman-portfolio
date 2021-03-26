import React from "react";
import { shallow } from "enzyme";

import { Contact } from "./contact.component";

describe("Contact page", () => {
  let wrapper;
  const mockObject = {};
  const mockText = "";
  const mockFalseBool = false;
  beforeEach(() => {
    const mockProps = {
      title: mockText,
      info: mockObject,
      items: {
        socialIcon: [
          {
            id: "343e56b5-61d6-482d-815c-691622b36f42",
            field: "Facebook",
            linkUrl: "https://www.facebook.com/santosa.thomas",
            iconPath: {
              id: "e530d8bd-a431-4833-bc4f-38469acb8884",
              field: "facebook",
              iconPath: "/images/icon/contact/social-icon/facebook.svg",
            },
          },
          {
            id: "b98321e1-5b24-48b7-b8be-b78a4b9a7825",
            field: "Github",
            linkUrl: "https://github.com/thokiman",
            iconPath: {
              id: "d3935e3e-8db2-4897-a32d-332403643286",
              field: "github",
              iconPath: "/images/icon/contact/social-icon/github.svg",
            },
          },
          {
            id: "70827b57-8523-48ea-a195-d912353c5a1d",
            field: "Instagram",
            linkUrl: "https://www.instagram.com/thokiman.peace",
            iconPath: {
              id: "e540081d-b164-4cfb-a919-2162aff7eb97",
              field: "instagram",
              iconPath: "/images/icon/contact/social-icon/instagram.svg",
            },
          },
          {
            id: "e1add8e8-7782-43e7-8e77-f3504e47f957",
            field: "Linkedin",
            linkUrl: "https://www.linkedin.com/in/thomasantosa",
            iconPath: {
              id: "b7bd7a6e-375f-4fab-88d3-f0ac65d8073b",
              field: "linkedin",
              iconPath: "/images/icon/contact/social-icon/linkedin.svg",
            },
          },
          {
            id: "cf9a7db5-ec85-4bc5-aa75-54fc4ed632bc",
            field: "Twitter",
            linkUrl: "https://twitter.com/thokithepricker",
            iconPath: {
              id: "9879cae4-216c-4961-8b68-efd6ed8cb7d5",
              field: "twitter",
              iconPath: "/images/icon/contact/social-icon/twitter.svg",
            },
          },
          {
            id: "aa22614d-a4c9-4414-b175-47d52ac60983",
            field: "Whatsapp",
            linkUrl: "https://api.whatsapp.com/send?phone=6282121448894",
            iconPath: {
              id: "170de128-3b3b-4fb8-994e-7f318248c027",
              field: "whatsapp",
              iconPath: "/images/icon/contact/social-icon/whatsapp.svg",
            },
          },
        ],
        photoIcon: [
          {
            id: "e7551f05-dc9f-48e5-8338-9204dd383170",
            field: "Adobe Stock",
            linkUrl: "https://stock.adobe.com/contributor/209666177/Thomas",
            iconPath: {
              id: "ffc57df6-e619-4a9b-9669-3bee2ed3df82",
              field: "adobe-stock",
              iconPath:
                "/images/icon/service/photography-icon/photo-stock-icon/adobe-stock.svg",
            },
          },
          {
            id: "20e3e471-e144-45bb-9ace-2566424cdcd1",
            field: "EyeEm",
            linkUrl: "https://www.eyeem.com/u/thokimanpeace",
            iconPath: {
              id: "3180ceb1-29cf-44a4-a545-65ea7069c41e",
              field: "eye-em",
              iconPath:
                "/images/icon/service/photography-icon/photo-stock-icon/eye-em.svg",
            },
          },
          {
            id: "41dbc6dd-48be-4346-aa47-82202bb5565f",
            field: "ShutterStock",
            linkUrl: "http://www.shutterstock.com/g/ThomasSantosa",
            iconPath: {
              id: "2a0aecbf-5275-4179-a5e5-04028740c123",
              field: "shutter-stock",
              iconPath:
                "/images/icon/service/photography-icon/photo-stock-icon/shutter-stock.svg",
            },
          },
        ],
      },
      isSideBarHidden: mockFalseBool,
    };
    wrapper = shallow(<Contact {...mockProps} />);
  });
  it("should render Contact page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not render ContactSideBarHide if isSideBarHidden is false", () => {
    expect(wrapper.exists("ContactSideBarHide")).toBe(false);
  });
});
