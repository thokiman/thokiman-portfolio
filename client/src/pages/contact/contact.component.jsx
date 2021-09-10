import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PageShell from '../../components/commons/page-shell/page-shell.component';
import SpinnerLoading from '../../components/commons/spinner-loading/spinner-loading.component';
import {
  selectContactRoute,
  selectInfoContact,
  selectItemsContact,
  selectLowWaveImage,
  selectTitleContact,
} from '../../redux/contact/contact.selectors';
import { selectIsSideBarActive } from '../../redux/header/header.selectors';
import { ContactContainer, ContactIsNotActivated } from './contact.styles';

const ContactForm = lazy(() =>
  import(
    '../../components/contacts/contact-contents/contact-form-container/contact-form-container.component'
  )
);

const ContactInfo = lazy(() =>
  import(
    '../../components/contacts/contact-contents/contact-info-container/contact-info.component'
  )
);

const ContactLocation = lazy(() =>
  import(
    '../../components/contacts/contact-contents/contact-location-container/contact-location-container.component'
  )
);

export const Contact = ({
  title,
  info,
  items,
  isSideBarActive,
  lowWaveImage,
}) => (
  <ContactContainer
    $issidebaractive={isSideBarActive}
    $lowWaveImage={lowWaveImage}
  >
    {isSideBarActive ? (
      <ContactIsNotActivated>
        Cont
        <br />
        act
      </ContactIsNotActivated>
    ) : null}
    <Suspense fallback={<SpinnerLoading />}>
      <ContactInfo title={title} items={items} />
      <ContactForm />
      <ContactLocation info={info} />
    </Suspense>
  </ContactContainer>
);

const mapStateToProps = createStructuredSelector({
  title: selectTitleContact,
  info: selectInfoContact,
  items: selectItemsContact,
  routeName: selectContactRoute,
  isSideBarActive: selectIsSideBarActive,
  lowWaveImage: selectLowWaveImage,
});

export default connect(mapStateToProps)(PageShell(Contact));
