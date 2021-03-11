import React from "react";

import { ReactComponent as CreamPrickInklaim } from "../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_cream.svg";
import { ReactComponent as WhiteOutlineThokiman } from "../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_cream.svg";
import "./footer-contact.styles.scss";

const FooterContact = () => {
  return (
    <div className="footer-container-contact">
      <div className="profile-footer-container-contact">
        <div className="profile-footer-icon-contact">
          <CreamPrickInklaim className="footer-icon-contact" />
          <WhiteOutlineThokiman className="footer-icon-contact" />
        </div>
        <div className="profile-footer-text-contact">
          Copyright<sup>&#9400;</sup>2021.
          <em>Allright reserved </em>| Thomas Santosa, B. Eng.
        </div>
      </div>
      <br />
    </div>
  );
};

export default FooterContact;
