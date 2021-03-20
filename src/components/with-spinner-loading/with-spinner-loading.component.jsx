import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { SpinnerContainer } from "./with-spinner-loading.styles";

const WithSpinnerLoading = (Page) => {
  const Spinner = (props) => {
    return props.isLoading ? (
      <SpinnerContainer>
        <Loader
          type="Watch"
          color="#e3e1e4"
          height={400}
          width={400}
          visible={true}
        />
      </SpinnerContainer>
    ) : (
      <Page {...props} />
    );
  };
  return Spinner;
};

export default WithSpinnerLoading;
