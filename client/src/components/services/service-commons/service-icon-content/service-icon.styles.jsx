import styled from 'styled-components';

const lightBlueColor = '#74c6d4';
const maxWidthSmartphone = 800;

export const ServiceIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ServiceJobTitle = styled.div`
  font-family: futura-demi;
  font-size: 2.5vw;
  margin-bottom: 15px;
  text-indent: 0.6em;
  color: ${lightBlueColor};
  letter-spacing: 0.02em;
  font-kerning: auto;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
  }
`;
export const ServiceIconContainer = styled.div`
  width: 14vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 75px;
    height: 75px;
  }
`;

export const ServiceIconItem = styled.img`
  width: 80%;
  height: 80%;
`;

ServiceIcon.displayName = 'ServiceIcon';
ServiceIconContainer.displayName = 'ServiceIconContainer';
ServiceIconItem.displayName = 'ServiceIconItem';
