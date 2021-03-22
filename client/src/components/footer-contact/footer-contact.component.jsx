import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

import {
  FooterContainerContact,
  FooterCreamPrickInklaim,
  FooterWhiteOutlineThokiman,
  ProfileFooterContainerContact,
  ProfileFooterIconContact,
  ProfileFooterTextContact,
} from "./footer-contact.styles";

const FooterContact = ({ isSideBarHidden }) => {
  return (
    <FooterContainerContact $issidebarhidden={isSideBarHidden}>
      <ProfileFooterContainerContact>
        <ProfileFooterIconContact>
          <FooterCreamPrickInklaim />
          <FooterWhiteOutlineThokiman />
        </ProfileFooterIconContact>
        <ProfileFooterTextContact>
          Copyright<sup>&#9400;</sup>2021.
          <em>Allright reserved </em>| Thomas Santosa, B. Eng.
        </ProfileFooterTextContact>
      </ProfileFooterContainerContact>
      <br />
    </FooterContainerContact>
  );
};
const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(FooterContact);
