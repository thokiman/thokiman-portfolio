import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as WhiteOutlineThokiman } from '../../../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_cream.svg';

const backgroundColorContactInfomationContainer = 'rgba(18, 129, 148, 0.5)';
const maxWidthSmartphone = 800;
const whiteSmokeColor = '#e3e1e4';
const lightBlueColor = '#74c6d4';
const blueColor = '#19dcea';
const purpleColor = '#b22cff';
const redColor = '#ea2222';
const yellowColor = '#f5be10';
const greenColor = '#3bd80d';

const ContactInfoIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ContactInfoIsNotActivated;
  return null;
};

const getHeightInformationContainer = ({ $measurecontactinformation }) => {
  return $measurecontactinformation.height;
};
const getWidthInformationContainer = ({ $measurecontactinformation }) => {
  return $measurecontactinformation.width;
};

//**
export const ContactInformationContainer = styled.div`
  z-index: 1;
  width: 35%;
  height: 70vh;
  background-color: ${backgroundColorContactInfomationContainer};
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    overflow-y: hidden;
    width: ${getWidthInformationContainer}vw;
    height: ${getHeightInformationContainer}vh;
    ${getSideBarActive}
  }
`;
export const ContactInformationTitle = styled.div`
  font-size: 3.4vw;
  color: ${whiteSmokeColor};
  padding: 15px;
  font-kerning: auto;
  letter-spacing: 0.05em;
  position: relative;
  top: 2vh;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 8vw;
    padding-left: 10vw;

    ${getSideBarActive}
  }
`;
//**
export const ContactInformationContent = styled.div`
  margin: 0 auto;
  padding: 0 3px;
  display: grid;
  grid-auto-columns: repeat (6, 1fr);
  grid-auto-rows: repeat(10, 1fr);
  gap: 2px 2px;
  grid-template-areas:
    'white-thokiman-contact-icon-0 white-thokiman-contact-icon-0 white-thokiman-contact-icon-1 white-thokiman-contact-icon-1 white-thokiman-contact-icon-2 white-thokiman-contact-icon-2'
    'white-thokiman-contact-icon-0 white-thokiman-contact-icon-0 white-thokiman-contact-icon-1 white-thokiman-contact-icon-1 white-thokiman-contact-icon-2 white-thokiman-contact-icon-2'
    'white-thokiman-contact-icon-0 white-thokiman-contact-icon-0 white-thokiman-contact-icon-1 white-thokiman-contact-icon-1 white-thokiman-contact-icon-2 white-thokiman-contact-icon-2'
    'white-thokiman-contact-icon-3 white-thokiman-contact-icon-3 social-contact-link-icon-facebook social-contact-link-icon-instagram white-thokiman-contact-icon-4 white-thokiman-contact-icon-4'
    'white-thokiman-contact-icon-3 white-thokiman-contact-icon-3 white-thokiman-contact-icon-5 white-thokiman-contact-icon-5 white-thokiman-contact-icon-4 white-thokiman-contact-icon-4'
    'white-thokiman-contact-icon-3 white-thokiman-contact-icon-3 white-thokiman-contact-icon-5 white-thokiman-contact-icon-5 white-thokiman-contact-icon-4 white-thokiman-contact-icon-4'
    'social-contact-link-icon-github social-contact-link-icon-twitter white-thokiman-contact-icon-5 white-thokiman-contact-icon-5 social-contact-link-icon-linkedin social-contact-link-icon-whatsapp'
    'white-thokiman-contact-icon-6 white-thokiman-contact-icon-6 photo-contact-link-icon-adobe-stock photo-contact-link-icon-adobe-stock white-thokiman-contact-icon-7 white-thokiman-contact-icon-7'
    'white-thokiman-contact-icon-6 white-thokiman-contact-icon-6 photo-contact-link-icon-eye-em photo-contact-link-icon-eye-em white-thokiman-contact-icon-7 white-thokiman-contact-icon-7'
    'white-thokiman-contact-icon-6 white-thokiman-contact-icon-6 photo-contact-link-icon-shutter-stock photo-contact-link-icon-shutter-stock white-thokiman-contact-icon-7 white-thokiman-contact-icon-7';
  justify-content: center;
  align-items: center;
  width: 34.5vw;
  height: 45vh;
  position: relative;
  top: 4vh;
  @media only screen and (max-width: 1024px) {
    height: 32vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100vw;
    height: 90vh;
  }
  @media only screen and (max-width: 550px) {
    height: 50vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    height: 60vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    height: 59vh;
  }
  @media only screen and (max-width: 350px) and (max-height: 568px) {
    height: 63vh;
  }

  @media only screen and (max-width: 300px) {
    height: 52vh;
  }
`;

const contactThokiOutCreamHover = keyframes`
                     to {
                         stroke: ${lightBlueColor};
                         stroke-dashoffset: 0%;
                     }
`;
const contactThokiOutCreamDisplay = keyframes`
                     to {
                         stroke-dashoffset: 0%;
                     }
`;

const WhiteThokimanContactIconStyles = css`
  padding: 4px 0;
  width: 100%;
  height: 12vh;

  &:hover {
    .thoki-out-cream {
      animation: ${contactThokiOutCreamHover} 2s ease-in-out infinite
        alternate-reverse;
      transition: all 1.4s linear;
      stroke-dasharray: 500 40;
      stroke-dashoffset: 80%;
      stroke-miterlimit: 10;
    }

    svg:hover {
      animation-play-state: running;
    }
  }

  path.thoki-out-cream {
    stroke-dasharray: 200 40;
    stroke-dashoffset: 50%;
    stroke-miterlimit: 10;
    animation: ${contactThokiOutCreamDisplay} 5s ease-in-out infinite alternate;

    transition: all 1.4s linear;
  }
  @media only screen and (max-width: 1024px) {
    height: 8vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: 21vh;
  }
  @media only screen and (max-width: 550px) {
    height: 10vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    height: 15vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    height: 14vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 667px) {
    height: 16vh;
  }
  @media only screen and (max-width: 300px) {
    height: 10vh;
  }
`;

export const WhiteThokimanContactIcon0 = styled(WhiteOutlineThokiman)`
  grid-area: white-thokiman-contact-icon-0;

  ${WhiteThokimanContactIconStyles}
`;
export const WhiteThokimanContactIcon1 = styled(WhiteOutlineThokiman)`
  grid-area: white-thokiman-contact-icon-1;

  border-left: ${lightBlueColor} solid 1px;
  ${WhiteThokimanContactIconStyles}
`;
export const WhiteThokimanContactIcon2 = styled(WhiteOutlineThokiman)`
  grid-area: white-thokiman-contact-icon-2;
  ${WhiteThokimanContactIconStyles}
`;
export const WhiteThokimanContactIcon3 = styled(WhiteOutlineThokiman)`
  grid-area: white-thokiman-contact-icon-3;
  ${WhiteThokimanContactIconStyles}
`;
export const WhiteThokimanContactIcon4 = styled(WhiteOutlineThokiman)`
  grid-area: white-thokiman-contact-icon-4;

  ${WhiteThokimanContactIconStyles}
`;
export const WhiteThokimanContactIcon5 = styled(WhiteOutlineThokiman)`
  grid-area: white-thokiman-contact-icon-5;
  border-right: ${lightBlueColor} solid 1px;
  border-bottom: ${lightBlueColor} solid 1px;
  ${WhiteThokimanContactIconStyles}
`;
export const WhiteThokimanContactIcon6 = styled(WhiteOutlineThokiman)`
  grid-area: white-thokiman-contact-icon-6;
  ${WhiteThokimanContactIconStyles}
`;
export const WhiteThokimanContactIcon7 = styled(WhiteOutlineThokiman)`
  grid-area: white-thokiman-contact-icon-7;
  ${WhiteThokimanContactIconStyles}
`;

export const SocialContactLinkIconGithub = styled(Link)`
  grid-area: social-contact-link-icon-github;
`;

export const SocialContactLinkIconTwitter = styled(Link)`
  grid-area: social-contact-link-icon-twitter;
`;

export const SocialContactLinkIconLinkedin = styled(Link)`
  grid-area: social-contact-link-icon-linkedin;
`;

export const SocialContactLinkIconWhatsapp = styled(Link)`
  grid-area: social-contact-link-icon-whatsapp;
`;

export const SocialContactLinkIconFacebook = styled(Link)`
  grid-area: social-contact-link-icon-facebook;
  border-left: ${lightBlueColor} solid 1px;
  border-bottom: ${lightBlueColor} solid 1px;
`;

export const SocialContactLinkIconInstagram = styled(Link)`
  grid-area: social-contact-link-icon-instagram;
  border-bottom: ${lightBlueColor} solid 1px;
`;

export const PhotoContactLinkIconShutterStock = styled(Link)`
  grid-area: photo-contact-link-icon-shutter-stock;
  border-left: ${lightBlueColor} solid 1px;
`;

export const PhotoContactLinkIconEyeEm = styled(Link)`
  grid-area: photo-contact-link-icon-eye-em;
  border-bottom: ${lightBlueColor} solid 1px;
  border-right: ${lightBlueColor} solid 1px;
`;

export const PhotoContactLinkIconAdobeStock = styled(Link)`
  grid-area: photo-contact-link-icon-adobe-stock;
  border-left: ${lightBlueColor} solid 1px;
  border-bottom: ${lightBlueColor} solid 1px;
`;

const contactIcon = keyframes`
     0% {
         background: ${blueColor};
         opacity: 0.6;
     }

     25% {
         background: ${purpleColor};
         opacity: 0.8;
     }

     50% {
         background: ${redColor};
         opacity: 0.7;
     }

     75% {
         background: ${yellowColor};
         opacity: 0.9;
     }

     100% {
         background: ${greenColor};
         opacity: 1;
     }
 `;
//**
export const SocialContactIcon = styled.img`
  padding: 5px 0;
  display: flex;
  align-items: center;
  left: 25px;
  width: 100%;
  height: 50px;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 10vw;
    height: 13vh;
    padding: 1vw;
  }
  @media only screen and (max-width: 550px) {
    height: 7vh;
  }
  @media only screen and (max-width: 550px) {
    width: 12vw;
  }
  @media only screen and (max-width: 300px) {
    width: 15vw;
  }
  &:hover {
    animation: ${contactIcon} 8s linear infinite alternate both;
  }
`;
//**
export const PhotoContactIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 30vw;
    height: 10vh;
    padding: 1vw;
  }

  @media only screen and (max-width: 550px) {
    width: 20vw;
    height: 7vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    width: 30vw;
  }
  @media only screen and (max-width: 300px) {
  }
  &:hover {
    animation: ${contactIcon} 8s linear infinite alternate both;
  }
`;
ContactInformationContainer.displayName = 'ContactInformationContainer';
ContactInformationTitle.displayName = 'ContactInformationTitle';
ContactInformationContent.displayName = 'ContactInformationContent';
WhiteThokimanContactIcon0.displayName = 'WhiteThokimanContactIcon0';
WhiteThokimanContactIcon1.displayName = 'WhiteThokimanContactIcon1';
WhiteThokimanContactIcon2.displayName = 'WhiteThokimanContactIcon2';
WhiteThokimanContactIcon3.displayName = 'WhiteThokimanContactIcon3';
WhiteThokimanContactIcon4.displayName = 'WhiteThokimanContactIcon4';
WhiteThokimanContactIcon5.displayName = 'WhiteThokimanContactIcon5';
WhiteThokimanContactIcon6.displayName = 'WhiteThokimanContactIcon6';
WhiteThokimanContactIcon7.displayName = 'WhiteThokimanContactIcon7';
SocialContactLinkIconGithub.displayName = 'SocialContactLinkIconGithub';
SocialContactLinkIconTwitter.displayName = 'SocialContactLinkIconTwitter';
SocialContactLinkIconLinkedin.displayName = 'SocialContactLinkIconLinkedin';
SocialContactLinkIconWhatsapp.displayName = 'SocialContactLinkIconWhatsapp';
SocialContactLinkIconFacebook.displayName = 'SocialContactLinkIconFacebook';
SocialContactLinkIconInstagram.displayName = 'SocialContactLinkIconInstagram';
PhotoContactLinkIconAdobeStock.displayName = 'PhotoContactLinkIconAdobeStock';
SocialContactIcon.displayName = 'SocialContactIcon';
PhotoContactIcon.displayName = 'PhotoContactIcon';
