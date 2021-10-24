import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSocialIconContact } from '../../../redux/contact/contact.selectors.js';
import { selectIsSideBarActive } from '../../../redux/header/header.selectors';
import {
  FooterContainer,
  FooterCreamPrickInklaim,
  FooterWhiteOutlineThokiman,
  ProfileFooterContainer,
  ProfileFooterIcon,
  ProfileFooterText,
  SocialFooterContainer,
  SocialItem,
} from './footer-general.styles';

export const FooterGeneral = ({ socialIcon, isSideBarActive }) => {
  return (
    <FooterContainer
      $issidebaractive={isSideBarActive}
      className='footer-general'
    >
      <ProfileFooterContainer>
        <ProfileFooterIcon>
          <div className='footer-general-icon'>
            <FooterCreamPrickInklaim />
          </div>
          <div className='footer-general-icon'>
            <FooterWhiteOutlineThokiman />
          </div>
        </ProfileFooterIcon>
        <ProfileFooterText
          className='footer-text'
          $issidebaractive={isSideBarActive}
        >
          Copyright<sup>&#9400;</sup>2021.
          <em>Allright reserved </em>
          {window.innerWidth <= 800 ? (
            <span>
              <br /> Thomas Santosa, B.Eng.
            </span>
          ) : (
            ' | Thomas Santosa, B.Eng.'
          )}
        </ProfileFooterText>
      </ProfileFooterContainer>
      <br />
      <SocialFooterContainer className='social-footer-container'>
        {socialIcon.map(({ iconPath, linkUrl }) => {
          return (
            <SocialItem
              className='footer-social-icon'
              key={iconPath.id}
              to={{ pathname: linkUrl }}
              target='_blank'
              backgroundimage={iconPath}
            />
          );
        })}
      </SocialFooterContainer>
    </FooterContainer>
  );
};

const mapStatetoProps = createStructuredSelector({
  socialIcon: selectSocialIconContact,
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStatetoProps)(FooterGeneral);
