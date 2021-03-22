import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";
import {
  ContactInformationContainer,
  ContactInformationContent,
  ContactInformationTitle,
  WhiteThokimanContactIcon0,
  WhiteThokimanContactIcon1,
  WhiteThokimanContactIcon2,
  WhiteThokimanContactIcon3,
  WhiteThokimanContactIcon4,
  WhiteThokimanContactIcon5,
  WhiteThokimanContactIcon6,
  WhiteThokimanContactIcon7,
  SocialContactIcon,
  SocialContactLinkIconFacebook,
  SocialContactLinkIconGithub,
  SocialContactLinkIconInstagram,
  SocialContactLinkIconLinkedin,
  SocialContactLinkIconTwitter,
  SocialContactLinkIconWhatsapp,
  PhotoContactIcon,
  PhotoContactLinkIconAdobeStock,
  PhotoContactLinkIconEyeEm,
  PhotoContactLinkIconShutterStock,
} from "./contact-info.styles";

const ContactInfo = ({
  isSideBarHidden,
  title,
  items: { socialIcon, photoIcon },
}) => {
  return (
    <ContactInformationContainer $issidebarhidden={isSideBarHidden}>
      <ContactInformationTitle>{title}</ContactInformationTitle>
      <ContactInformationContent>
        <WhiteThokimanContactIcon0 />
        <WhiteThokimanContactIcon1 />
        <WhiteThokimanContactIcon2 />
        <WhiteThokimanContactIcon3 />
        <WhiteThokimanContactIcon4 />
        <WhiteThokimanContactIcon5 />
        <WhiteThokimanContactIcon6 />
        <WhiteThokimanContactIcon7 />
        <SocialContactLinkIconFacebook
          to={{ pathname: socialIcon[0].linkUrl }}
          target="_blank"
        >
          <SocialContactIcon
            src={socialIcon[0].iconPath.iconPath}
            alt={socialIcon[0].iconPath.field}
          />
        </SocialContactLinkIconFacebook>
        <SocialContactLinkIconGithub
          to={{ pathname: socialIcon[1].linkUrl }}
          target="_blank"
        >
          <SocialContactIcon
            src={socialIcon[1].iconPath.iconPath}
            alt={socialIcon[1].iconPath.field}
          />
        </SocialContactLinkIconGithub>
        <SocialContactLinkIconInstagram
          to={{ pathname: socialIcon[2].linkUrl }}
          target="_blank"
        >
          <SocialContactIcon
            src={socialIcon[2].iconPath.iconPath}
            alt={socialIcon[2].iconPath.field}
          />
        </SocialContactLinkIconInstagram>
        <SocialContactLinkIconLinkedin
          to={{ pathname: socialIcon[3].linkUrl }}
          target="_blank"
        >
          <SocialContactIcon
            src={socialIcon[3].iconPath.iconPath}
            alt={socialIcon[3].iconPath.field}
          />
        </SocialContactLinkIconLinkedin>
        <SocialContactLinkIconTwitter
          to={{ pathname: socialIcon[4].linkUrl }}
          target="_blank"
        >
          <SocialContactIcon
            src={socialIcon[4].iconPath.iconPath}
            alt={socialIcon[4].iconPath.field}
          />
        </SocialContactLinkIconTwitter>
        <SocialContactLinkIconWhatsapp
          to={{ pathname: socialIcon[5].linkUrl }}
          target="_blank"
        >
          <SocialContactIcon
            src={socialIcon[5].iconPath.iconPath}
            alt={socialIcon[5].iconPath.field}
          />
        </SocialContactLinkIconWhatsapp>
        <PhotoContactLinkIconAdobeStock
          to={{ pathname: photoIcon[0].linkUrl }}
          target="_blank"
        >
          <PhotoContactIcon
            src={photoIcon[0].iconPath.iconPath}
            alt={photoIcon[0].iconPath.field}
          />
        </PhotoContactLinkIconAdobeStock>
        <PhotoContactLinkIconEyeEm
          to={{ pathname: photoIcon[1].linkUrl }}
          target="_blank"
        >
          <PhotoContactIcon
            src={photoIcon[1].iconPath.iconPath}
            alt={photoIcon[1].iconPath.field}
          />
        </PhotoContactLinkIconEyeEm>
        <PhotoContactLinkIconShutterStock
          to={{ pathname: photoIcon[2].linkUrl }}
          target="_blank"
        >
          <PhotoContactIcon
            src={photoIcon[2].iconPath.iconPath}
            alt={photoIcon[2].iconPath.field}
          />
        </PhotoContactLinkIconShutterStock>
      </ContactInformationContent>
    </ContactInformationContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(ContactInfo);
