import styled from "styled-components";

export const ContactLocationContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: rgba(18, 129, 148, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const ContactLocationInfo = styled.div`
  border: white solid 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45%;
  width: 98%;
  background-color: rgba(116, 198, 212, 0.45);
  margin: 5px 0;
`;

export const ContactLocationTitle = styled.div`
  text-align: left;
  font-size: 3vw;
  color: #128194;
  margin: 0 5px;
  letter-spacing: 0.02em;
`;

export const ContactLocationItem = styled.div`
  font-family: futura-book;
  text-align: left;
  color: #bccfd5;
  font-size: 1.5vw;
  margin: 0 5px;
  letter-spacing: 0.1em;
`;
ContactLocationContainer.displayName = "ContactLocationContainer";
ContactLocationInfo.displayName = "ContactLocationInfo";
ContactLocationTitle.displayName = "ContactLocationTitle";
ContactLocationItem.displayName = "ContactLocationItem";
