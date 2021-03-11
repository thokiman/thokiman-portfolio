import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectInfoContact,
  selectTitleContact,
  selectItemsContact,
  selectContactRoute,
} from "../../redux/contact/contact.selectors";
import ContactForm from "../../components/contact-form-container/contact-form-container.component";
import ContactInfo from "../../components/contact-info-container/contact-info.component";
import ContactLocation from "../../components/contact-location-container/contact-location-container.component";
import PageShell from "../../components/page-shell/page-shell.component";
import "./contact.styles.scss";

const Contact = ({ title, info, items }) => {
  return (
    <div className="contact-container">
      <ContactInfo title={title} items={items} />
      <ContactForm />
      <ContactLocation info={info} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  title: selectTitleContact,
  info: selectInfoContact,
  items: selectItemsContact,
  routeName: selectContactRoute,
});

export default connect(mapStateToProps)(PageShell(Contact));
