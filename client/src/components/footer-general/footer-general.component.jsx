import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  FooterContainer,
  FooterCreamPrickInklaim,
  FooterWhiteOutlineThokiman,
  ProfileFooterContainer,
  ProfileFooterIcon,
  ProfileFooterText,
  SocialFooterContainer,
  SocialItem,
} from "./footer-general.styles";
import { selectSocialIconContact } from "../../redux/contact/contact.selectors.js";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

const FooterGeneral = ({ socialIcon, isSideBarHidden }) => {
  return (
    <FooterContainer $issidebarhidden={isSideBarHidden}>
      <ProfileFooterContainer>
        <ProfileFooterIcon>
          <FooterCreamPrickInklaim />
          <FooterWhiteOutlineThokiman />
        </ProfileFooterIcon>
        <ProfileFooterText $issidebarhidden={isSideBarHidden}>
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
              target="_blank"
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
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStatetoProps)(FooterGeneral);
