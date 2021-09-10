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
    <FooterContainer $issidebaractive={isSideBarActive}>
      <ProfileFooterContainer>
        <ProfileFooterIcon>
          <FooterCreamPrickInklaim />
          <FooterWhiteOutlineThokiman />
        </ProfileFooterIcon>
        <ProfileFooterText $issidebaractive={isSideBarActive}>
          Copyright<sup>&#9400;</sup>2021.
          <em>Allright reserved </em>| Thomas Santosa, B.Eng.
        </ProfileFooterText>
      </ProfileFooterContainer>
      <br />
      <SocialFooterContainer>
        {socialIcon.map(({ iconPath, linkUrl }) => {
          return (
            <SocialItem
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
