import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import {
  ContactInformationContainer,
  ContactInformationContent,
  ContactInformationTitle,
  PhotoContactIcon,
  PhotoContactLinkIconAdobeStock,
  PhotoContactLinkIconEyeEm,
  PhotoContactLinkIconShutterStock,
  SocialContactIcon,
  SocialContactLinkIconFacebook,
  SocialContactLinkIconGithub,
  SocialContactLinkIconInstagram,
  SocialContactLinkIconLinkedin,
  SocialContactLinkIconTwitter,
  SocialContactLinkIconWhatsapp,
  WhiteThokimanContactIcon0,
  WhiteThokimanContactIcon1,
  WhiteThokimanContactIcon2,
  WhiteThokimanContactIcon3,
  WhiteThokimanContactIcon4,
  WhiteThokimanContactIcon5,
  WhiteThokimanContactIcon6,
  WhiteThokimanContactIcon7,
} from './contact-info.styles';

export const ContactInfo = ({
  isSideBarActive,
  title,
  items: { socialIcon, photoIcon },
}) => {
  return (
    <ContactInformationContainer
      className='contact-information-container'
      $issidebaractive={isSideBarActive}
    >
      <ContactInformationTitle className='contact-information-title'>
        {title}
      </ContactInformationTitle>
      <ContactInformationContent className='contact-information-content'>
        <WhiteThokimanContactIcon0 className='white-thokiman-contact-icon' />
        <WhiteThokimanContactIcon1 className='white-thokiman-contact-icon' />
        <WhiteThokimanContactIcon2 className='white-thokiman-contact-icon' />
        <WhiteThokimanContactIcon3 className='white-thokiman-contact-icon' />
        <WhiteThokimanContactIcon4 className='white-thokiman-contact-icon' />
        <WhiteThokimanContactIcon5 className='white-thokiman-contact-icon' />
        <WhiteThokimanContactIcon6 className='white-thokiman-contact-icon' />
        <WhiteThokimanContactIcon7 className='white-thokiman-contact-icon' />
        <SocialContactLinkIconFacebook
          className='social-contact-link-icon'
          to={{ pathname: socialIcon[0].linkUrl }}
          target='_blank'
        >
          <SocialContactIcon
            src={socialIcon[0].iconPath.iconPath}
            alt={socialIcon[0].iconPath.field}
          />
        </SocialContactLinkIconFacebook>
        <SocialContactLinkIconGithub
          className='social-contact-link-icon'
          to={{ pathname: socialIcon[1].linkUrl }}
          target='_blank'
        >
          <SocialContactIcon
            src={socialIcon[1].iconPath.iconPath}
            alt={socialIcon[1].iconPath.field}
          />
        </SocialContactLinkIconGithub>
        <SocialContactLinkIconInstagram
          className='social-contact-link-icon'
          to={{ pathname: socialIcon[2].linkUrl }}
          target='_blank'
        >
          <SocialContactIcon
            src={socialIcon[2].iconPath.iconPath}
            alt={socialIcon[2].iconPath.field}
          />
        </SocialContactLinkIconInstagram>
        <SocialContactLinkIconLinkedin
          className='social-contact-link-icon'
          to={{ pathname: socialIcon[3].linkUrl }}
          target='_blank'
        >
          <SocialContactIcon
            src={socialIcon[3].iconPath.iconPath}
            alt={socialIcon[3].iconPath.field}
          />
        </SocialContactLinkIconLinkedin>
        <SocialContactLinkIconTwitter
          className='social-contact-link-icon'
          to={{ pathname: socialIcon[4].linkUrl }}
          target='_blank'
        >
          <SocialContactIcon
            src={socialIcon[4].iconPath.iconPath}
            alt={socialIcon[4].iconPath.field}
          />
        </SocialContactLinkIconTwitter>
        <SocialContactLinkIconWhatsapp
          className='social-contact-link-icon'
          to={{ pathname: socialIcon[5].linkUrl }}
          target='_blank'
        >
          <SocialContactIcon
            src={socialIcon[5].iconPath.iconPath}
            alt={socialIcon[5].iconPath.field}
          />
        </SocialContactLinkIconWhatsapp>

        <PhotoContactLinkIconAdobeStock
          className='social-contact-link-icon'
          to={{ pathname: photoIcon[0].linkUrl }}
          target='_blank'
        >
          <PhotoContactIcon
            src={photoIcon[0].iconPath.iconPath}
            alt={photoIcon[0].iconPath.field}
          />
        </PhotoContactLinkIconAdobeStock>
        <PhotoContactLinkIconEyeEm
          className='social-contact-link-icon'
          to={{ pathname: photoIcon[1].linkUrl }}
          target='_blank'
        >
          <PhotoContactIcon
            src={photoIcon[1].iconPath.iconPath}
            alt={photoIcon[1].iconPath.field}
          />
        </PhotoContactLinkIconEyeEm>
        <PhotoContactLinkIconShutterStock
          className='social-contact-link-icon'
          to={{ pathname: photoIcon[2].linkUrl }}
          target='_blank'
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
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(ContactInfo);
