import React from "react";
import { shallow } from "enzyme";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { WithSpinnerLoading } from "./with-spinner-loading.component";

describe("WithSpinner HOC", () => {
  const TestComponent = () => <div className="test" />;
  const WrappedComponent = WithSpinnerLoading(TestComponent);

  describe("if loading is true", () => {
    it("should render Spinner component", () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(Loader)).toBe(true);
    });

    it("should not render component", () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  describe("if loading is false", () => {
    it("should render component", () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(TestComponent)).toBe(true);
    });

    it("should not render Spinner", () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(Loader)).toBe(false);
    });
  });
});
