import styled, { css } from "styled-components";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const PortfolioLoadingState = styled(Loader)`
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;

export const PortfolioContent = styled.div`
  height: 77vh;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
`;

PortfolioLoadingState.displayName = "PortfolioLoadingState";
PortfolioContent.displayName = "PortfolioContent";
