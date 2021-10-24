import styled, { css } from 'styled-components';
const maxWidthSmartphone = 800;
const backgroundColorContactLocationContainer = 'rgba(18, 129, 148, 0.5)';
const backgroundColorContactLocationInfo = 'rgba(116, 198, 212, 0.45)';
const grayBlueColor = '#128194';
const heavyLightBlueColor = '#bccfd5';

const ContactLocationContainerIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ContactLocationContainerIsNotActivated;
  return null;
};
export const ContactLocationContainer = styled.div`
  z-index: 1;
  width: 30%;
  height: 100%;
  background-color: ${backgroundColorContactLocationContainer};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100vw;
    align-items: flex-start;
    height: 100vh;

    ${getSideBarActive}
  }
`;
// **
export const ContactLocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45%;
  width: 98%;
  background-color: ${backgroundColorContactLocationInfo};
  margin: 5px 0;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100vw;
    height: 50vh;
  }
  @media only screen and (max-width: 300px) {
  }
`;

export const ContactLocationTitle = styled.div`
  text-align: left;
  font-size: 3vw;
  color: ${grayBlueColor};
  margin: 0 5px;
  letter-spacing: 0.02em;
  @media only screen and (max-width: 1024px) {
    font-size: 4vw;
  }
  @media only screen and (max-width: 800px) {
    font-size: 10vw;
  }
`;

export const ContactLocationItem = styled.div`
  font-family: futura-book;
  text-align: left;
  color: ${heavyLightBlueColor};
  font-size: 1.5vw;
  margin: 0 5px;
  letter-spacing: 0.1em;
  @media only screen and (max-width: 1024px) {
    font-size: 1.8vw;
  }
  @media only screen and (max-width: 800px) {
    font-size: 5vw;
  }
`;
ContactLocationContainer.displayName = 'ContactLocationContainer';
ContactLocationInfo.displayName = 'ContactLocationInfo';
ContactLocationTitle.displayName = 'ContactLocationTitle';
ContactLocationItem.displayName = 'ContactLocationItem';
