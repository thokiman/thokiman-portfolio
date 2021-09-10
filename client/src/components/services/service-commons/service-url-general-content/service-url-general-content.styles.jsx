import styled, { keyframes } from 'styled-components';

const maxWidthSmartphone = 800;
const whiteSmokeColor = '#e3e1e4';
const textColorServiceDescriptionItem = 'rgba(227, 225, 228, 0.9)';
const textColorerviceDescriptionTitle = 'rgba(188, 207, 213, 0.9)';
const serviceTitleAnimationColor0 = 'rgba(116, 198, 212, 0.8)';
const lightBlueColor = '#74c6d4';

export const ServiceGeneralContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const serviceTitle = keyframes`
0% {
                 color:  ${serviceTitleAnimationColor0};
             }

             100% {
                 color: ${whiteSmokeColor};
             }

`;
export const ServiceTitle = styled.div`
  font-family: futura-demi;
  font-size: 8vw;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  color: ${whiteSmokeColor};
  letter-spacing: 0.1em;
  font-kerning: auto;

  animation: ${serviceTitle} 3s linear infinite alternate both;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 8vw;
  }
`;

export const ServiceDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 94%;
  height: 100%;
`;

export const ServiceDescriptionContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ServiceDescriptionTitle = styled.div`
  font-family: futura-demi;
  font-size: 4vw;
  margin-bottom: 15px;
  text-indent: 0.6em;
  color: ${textColorerviceDescriptionTitle};
  letter-spacing: 0.02em;
  font-kerning: auto;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
  }
`;
export const ServiceDescriptionItem = styled.div`
  font-size: 2.5vw;
  text-align: left;
  color: ${textColorServiceDescriptionItem};
  letter-spacing: 0.06em;
  line-height: 1.5em;
  font-kerning: auto;
  margin-bottom: 30px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 3.7vw;
    text-align: left;
  }
`;
export const ServiceDescriptionIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-bottom: ${lightBlueColor} solid 1px;
`;
export const ServiceDescriptionIconItem = styled.img`
  width: 27%;
  height: 27%;
`;

ServiceGeneralContent.displayName = 'ServiceGeneralContent';
ServiceTitle.displayName = 'ServiceTitle';
ServiceDescription.displayName = 'ServiceDescription';
ServiceDescriptionContainer.displayName = 'ServiceDescriptionContainer';
ServiceDescriptionTitle.displayName = 'ServiceDescriptionTitle';
ServiceDescriptionItem.displayName = 'ServiceDescriptionItem';
ServiceDescriptionIconContainer.displayName = 'ServiceDescriptionIconContainer';
ServiceDescriptionIconItem.displayName = 'ServiceDescriptionIconItem';
