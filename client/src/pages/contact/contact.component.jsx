import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SpinnerLoading from "../../components/spinner-loading/spinner-loading.component";
import {
  selectInfoContact,
  selectTitleContact,
  selectItemsContact,
  selectContactRoute,
} from "../../redux/contact/contact.selectors";
import PageShell from "../../components/page-shell/page-shell.component";
import { ContactContainer, ContactSideBarHide } from "./contact.styles";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";
const ContactForm = lazy(() =>
  import(
    "../../components/contact-form-container/contact-form-container.component"
  )
);
const ContactInfo = lazy(() =>
  import("../../components/contact-info-container/contact-info.component")
);
const ContactLocation = lazy(() =>
  import(
    "../../components/contact-location-container/contact-location-container.component"
  )
);

const Contact = ({ title, info, items, isSideBarHidden }) => {
  return (
    <ContactContainer $issidebarhidden={isSideBarHidden}>
      {isSideBarHidden ? (
        <ContactSideBarHide>
          Cont
          <br />
          act
        </ContactSideBarHide>
      ) : null}
      <Suspense fallback={<SpinnerLoading />}>
        <ContactInfo title={title} items={items} />
        <ContactForm />
        <ContactLocation info={info} />
      </Suspense>
    </ContactContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  title: selectTitleContact,
  info: selectInfoContact,
  items: selectItemsContact,
  routeName: selectContactRoute,
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(PageShell(Contact));
