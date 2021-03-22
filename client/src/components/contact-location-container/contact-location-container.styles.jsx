import styled, { css } from "styled-components";
const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};
export const ContactLocationContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: rgba(18, 129, 148, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    width: 85vw;
    height: 100vh;
    ${getSideBarActive}
  }
`;
export const ContactLocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45%;
  width: 98%;
  background-color: rgba(116, 198, 212, 0.45);
  margin: 5px 0;
  @media only screen and (max-width: 800px) {
    height: 50vh;
  }
`;

export const ContactLocationTitle = styled.div`
  text-align: left;
  font-size: 3vw;
  color: #128194;
  margin: 0 5px;
  letter-spacing: 0.02em;
  @media only screen and (max-width: 800px) {
    font-size: 10vw;
  }
`;

export const ContactLocationItem = styled.div`
  font-family: futura-book;
  text-align: left;
  color: #bccfd5;
  font-size: 1.5vw;
  margin: 0 5px;
  letter-spacing: 0.1em;
  @media only screen and (max-width: 800px) {
    font-size: 5vw;
  }
`;
ContactLocationContainer.displayName = "ContactLocationContainer";
ContactLocationInfo.displayName = "ContactLocationInfo";
ContactLocationTitle.displayName = "ContactLocationTitle";
ContactLocationItem.displayName = "ContactLocationItem";
