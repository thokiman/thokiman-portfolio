import React from "react";
import { shallow } from "enzyme";

import { PageShell } from "./page-shell.component";

describe("PageShell HOC", () => {
  const TestComponent = () => <div className="test" />;
  const WrappedComponent = PageShell(TestComponent);
  const mockAboutRoute = "/about";
  const mockPortflioRoute = "/portfolio";
  const mockServiceRoute = "/service";
  const mockContactRoute = "/contact";
  const mockProps = {
    location: { pathname: mockAboutRoute },
    aboutRoute: mockAboutRoute,
    portfolioRoute: mockPortflioRoute,
    serviceRoute: mockServiceRoute,
    contactRoute: mockContactRoute,
  };
  describe("PageShell loading", () => {
    it("should render component", () => {
      const wrapper = shallow(<WrappedComponent {...mockProps} />);

      expect(wrapper.exists(TestComponent)).toBe(true);
    });
  });
});
