import styled, { css } from 'styled-components';

const maxWidthSmartphone = 800;
const backgroundColorContactFormContainer = 'rgba(116, 198, 212, 0.8)';
const greenBlueColor = '#128194';
const heavyLightBlueColor = '#bccfd5';

const ContactFormContainerIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ContactFormContainerIsNotActivated;
  return null;
};

//**
const ContactFormContainerHide = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: 155vh;
    transition: all ease-in-out 1s;
  }
  @media only screen and (max-width: 550px) {
    height: 310vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    height: 180vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    height: 155vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 736px) {
    height: 185vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 667px) {
    height: 190vh;
  }
  @media only screen and (max-width: 320px) and (max-height: 568px) {
    height: 215vh;
  }
  @media only screen and (max-width: 300px) {
    height: 200vh;
  }
`;
const ContactFormContainerActive = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: 190vh;
    transition: all ease-in-out 1s;
  }
  @media only screen and (max-width: 550px) {
    height: 410vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    height: 220vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    height: 180vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 736px) {
    height: 240vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 667px) {
    height: 220vh;
  }
  @media only screen and (max-width: 320px) and (max-height: 568px) {
    height: 240vh;
  }
  @media only screen and (max-width: 300px) {
    height: 240vh;
  }
`;

const getContactFormContainer = ({ $istypeclick }) => {
  if ($istypeclick) {
    return ContactFormContainerActive;
  }
  return ContactFormContainerHide;
};

export const ContactFormContainer = styled.div`
  width: 35vw;
  height: 72vh;
  background-color: ${backgroundColorContactFormContainer};
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    overflow-y: hidden;
    margin: 10px 0;
    width: 100vw;

    ${getContactFormContainer}
    ${getSideBarActive}
  }
`;

const ContactFormGroupStyles = css`
  width: 90%;
  transition: all ease-in-out 1s;
`;
const ContactFormGroupHide = css`
  ${ContactFormGroupStyles}
  height: 1600px;
  padding-top: 15px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: 100%;
  }
`;
const ContactFormGroupActive = css`
  ${ContactFormGroupStyles}
  height: 1650px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: 100%;
  }
`;
const getContactFormGroup = ({ $istypeclick }) => {
  if ($istypeclick) {
    return ContactFormGroupActive;
  }
  return ContactFormGroupHide;
};

export const ContactFormGroup = styled.div`
  ${getContactFormGroup}
`;

export const ContactFormHead = styled.div`
  font-size: 4vw;
  text-align: left;
  letter-spacing: 0.01em;
  color: ${greenBlueColor};
  text-indent: 0.5em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 9vw;
  }
`;

export const ContactFormSubhead = styled.div`
  font-size: 3vw;
  text-align: justifƒy;
  line-height: 1.7em;
  letter-spacing: 0.05em;
  color: ${heavyLightBlueColor};
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

ContactFormContainer.displayName = 'ContactFormContainer';
ContactFormGroup.displayName = 'ContactFormGroup';
ContactFormHead.displayName = 'ContactFormHead';
ContactFormSubhead.displayName = 'ContactFormSubhead';
ButtonIcon.displayName = 'ButtonIcon';
