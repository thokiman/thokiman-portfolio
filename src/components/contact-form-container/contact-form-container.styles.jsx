import styled, { css } from "styled-components";

export const ContactFormContainer = styled.div`
  width: 35vw;
  height: 72vh;
  background-color: rgba(116, 198, 212, 0.8);
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const ContactFormGroupStyles = css`
  width: 90%;
  transition: all ease-in-out 1s;
`;
const ContactFormGroupHide = css`
  ${ContactFormGroupStyles}

  height: 1600px;
  padding-top: 15px;
`;
const ContactFormGroupActive = css`
  ${ContactFormGroupStyles}

  height: 1650px;
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
`;

export const ContactFormSubhead = styled.div`
  font-size: 3vw;
  text-align: justifƒy;
  line-height: 1.7em;
  letter-spacing: 0.05em;
  color: #bccfd5;
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
