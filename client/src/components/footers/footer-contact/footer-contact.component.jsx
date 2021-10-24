import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../redux/header/header.selectors';
import {
  FooterContainerContact,
  FooterCreamPrickInklaim,
  FooterWhiteOutlineThokiman,
  ProfileFooterContainerContact,
  ProfileFooterIconContact,
  ProfileFooterTextContact,
} from './footer-contact.styles';

export const FooterContact = ({ isSideBarActive }) => {
  return (
    <FooterContainerContact
      $issidebaractive={isSideBarActive}
      className='footer-contact'
    >
      <ProfileFooterContainerContact>
        <ProfileFooterIconContact>
          <div className='footer-general-icon'>
            <FooterCreamPrickInklaim />
          </div>
          <div className='footer-general-icon'>
            <FooterWhiteOutlineThokiman />
          </div>
        </ProfileFooterIconContact>
        <ProfileFooterTextContact className='footer-text'>
          Copyright<sup>&#9400;</sup>2021.
          <em>Allright reserved </em>
          {window.innerWidth <= 800 ? null : '|'}
          <br />
          Thomas Santosa, B.Eng.
        </ProfileFooterTextContact>
      </ProfileFooterContainerContact>
      <br />
    </FooterContainerContact>
  );
};
const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(FooterContact);
