import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../page-shell/page-shell.component";
import { selectContactRoute } from "../../redux/contact/contact.selectors";
import FooterContact from "../footer-contact/footer-contact.component";
import FooterGeneral from "../footer-general/footer-general.component";

const Footer = ({ location: { pathname }, contactRoute }) => {
  return (
    <div>
      {pathname.match(`^${contactRoute}+`) ? (
        <FooterContact />
      ) : (
        <FooterGeneral />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  contactRoute: selectContactRoute,
});
export default withRouter(connect(mapStateToProps)(PageShell(Footer)));
