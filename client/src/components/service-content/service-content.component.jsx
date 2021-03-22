import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsSideBarHidden } from "../../redux/header/header.selectors";
import {
  RightServiceContainer,
  ThokimanHeadColor,
  ThokimanHeadOutlineCream,
} from "./service-content.styles";

const ServiceHomeContent = ({ isSideBarHidden }) => {
  return (
    <RightServiceContainer $issidebarhidden={isSideBarHidden}>
      <ThokimanHeadColor />
      <ThokimanHeadOutlineCream />
    </RightServiceContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarHidden,
});
export default connect(mapStateToProps)(ServiceHomeContent);
