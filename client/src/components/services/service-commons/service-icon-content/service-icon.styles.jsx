import styled from 'styled-components';

const lightBlueColor = '#74c6d4';
const maxWidthSmartphone = 800;

export const ServiceIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    flex-direction: column;
  }
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
  width: 12vw;
  height: 14vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    margin-top: 2vh;
    width: 42vw;
    height: 22vh;
  }
  @media only screen and (max-width: 550px) {
    width: 35vw;
    height: 18vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    width: 37vw;
    height: 10vh;
  }

  @media only screen and (max-width: 470px) and (max-height: 812px) {
    width: 35vw;
  }
  @media only screen and (max-width: 470px) and (max-height: 736px) {
    width: 40vw;
    height: 14vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 667px) {
  }
  @media only screen and (max-width: 350px) and (max-height: 568px) {
  }

  @media only screen and (max-width: 300px) {
    width: 45vw;
    height: 18vh;
  }
`;

export const ServiceIconItem = styled.img`
  width: 80%;
  height: 80%;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    height: 90%;
  }
`;

ServiceIcon.displayName = 'ServiceIcon';
ServiceIconContainer.displayName = 'ServiceIconContainer';
ServiceIconItem.displayName = 'ServiceIconItem';
