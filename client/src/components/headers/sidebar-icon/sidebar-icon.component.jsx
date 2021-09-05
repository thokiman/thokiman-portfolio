import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleSideBarHidden } from "../../../redux/header/header.actions.js";
import { selectIsSideBarHidden } from "../../../redux/header/header.selectors";
import {
  SideBarHeaderIcon, SideBarOne,
  SideBarThree,
  SideBarTwo
} from "./sidebar-icon.styles";


export const SideBarIcon = ({ toggleSideBarHidden, isSideBarHidden }) => {
  return (
    <SideBarHeaderIcon
      $issidebarhidden={isSideBarHidden}
      onClick={() => toggleSideBarHidden()}
    >
      <SideBarOne $issidebarhidden={isSideBarHidden} />
      <SideBarTwo $issidebarhidden={isSideBarHidden} />
      <SideBarThree $issidebarhidden={isSideBarHidden} />
    </SideBarHeaderIcon>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarHidden,
});
const mapDispatchToProps = (dispatch) => ({
  toggleSideBarHidden: () => dispatch(toggleSideBarHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarIcon);
