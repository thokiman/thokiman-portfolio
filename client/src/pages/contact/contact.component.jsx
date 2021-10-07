import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import ContactForm from '../../components/contacts/contact-contents/contact-form-container/contact-form-container.component';
import ContactInfo from '../../components/contacts/contact-contents/contact-info-container/contact-info.component';
import ContactLocation from '../../components/contacts/contact-contents/contact-location-container/contact-location-container.component';
import Footer from '../../components/footers/footer/footer.component';
import useWindowDimensions from '../../components/hooks/window-dimensions/useWindowDimensions.component';
import {
  selectContactRoute,
  selectInfoContact,
  selectItemsContact,
  selectLowWaveImage,
  selectTitleContact,
} from '../../redux/contact/contact.selectors';
import { selectIsSideBarActive } from '../../redux/header/header.selectors';
import {
  ContactContainer,
  ContactElement,
  ContactIsNotActivated,
} from './contact.styles';
import {
  measureContactHeight,
  measureContactIsNotActivated,
} from './contact.utils.styles';
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
    <ContactElement>
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
          <ContactIsNotActivated
            $contactisnotactivatedprops={measureContactIsNotActivated(
              viewWidth,
              viewHeight
            )}
          >
            Cont
            <br />
            act
          </ContactIsNotActivated>
        ) : null}

        <ContactInfo title={title} items={items} />
        <ContactForm />
        <ContactLocation info={info} />
      </ContactContainer>
      <Footer />
    </ContactElement>
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

export default withRouter(connect(mapStateToProps)(Contact));
