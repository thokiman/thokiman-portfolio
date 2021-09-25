import useWindowDimensions from 'components/commons/window-dimensions/window-dimensions.component';
import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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
import { measureContactHeight } from './contact.utils';

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
  location: { pathname },
  title,
  info,
  items,
  isSideBarActive,
  lowWaveImage,
  contactRoute,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <ContactContainer
      $contactheight={measureContactHeight(
        pathname,
        viewWidth,
        viewHeight,
        contactRoute
      )}
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
};

const mapStateToProps = createStructuredSelector({
  title: selectTitleContact,
  info: selectInfoContact,
  items: selectItemsContact,
  contactRoute: selectContactRoute,
  isSideBarActive: selectIsSideBarActive,
  lowWaveImage: selectLowWaveImage,
});

export default connect(mapStateToProps)(Contact);
