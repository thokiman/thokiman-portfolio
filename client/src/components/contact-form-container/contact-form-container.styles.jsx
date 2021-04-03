import styled, { css } from "styled-components";

const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};

const ContactFormContainerHide = css`
  @media only screen and (max-width: 800px) {
    height: 250vh;
    transition: all ease-in-out 1s;
  }
`;
const ContactFormContainerActive = css`
  @media only screen and (max-width: 800px) {
    height: 340vh;
    transition: all ease-in-out 1s;
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
  background-color: rgba(116, 198, 212, 0.8);
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 3vh;
  @media only screen and (max-width: 800px) {
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
  @media only screen and (max-width: 800px) {
    height: 180vh;
  }
`;
const ContactFormGroupActive = css`
  ${ContactFormGroupStyles}
  height: 1650px;
  @media only screen and (max-width: 800px) {
    height: 210vh;
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
  color: #128194;
  text-indent: 0.5em;
  @media only screen and (max-width: 800px) {
    font-size: 9vw;
  }
`;

export const ContactFormSubhead = styled.div`
  font-size: 3vw;
  text-align: justifƒy;
  line-height: 1.7em;
  letter-spacing: 0.05em;
  color: #bccfd5;
  @media only screen and (max-width: 800px) {
    font-size: 6vw;
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

ContactFormContainer.displayName = "ContactFormContainer";
ContactFormGroup.displayName = "ContactFormGroup";
ContactFormHead.displayName = "ContactFormHead";
ContactFormSubhead.displayName = "ContactFormSubhead";
ButtonIcon.displayName = "ButtonIcon";
