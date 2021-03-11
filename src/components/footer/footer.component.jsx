import React from "react";
import { withRouter } from "react-router-dom";

import FooterContact from "../footer-contact/footer-contact.component";
import FooterGeneral from "../footer-general/footer-general.component";

const Footer = ({ location: { pathname } }) => {
  return (
    <div>
      {pathname.match(/\/contact+/) ? <FooterContact /> : <FooterGeneral />}
    </div>
  );
};

export default withRouter(Footer);
