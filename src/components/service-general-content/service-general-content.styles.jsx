import styled, { keyframes } from "styled-components";

export const ServiceGeneralContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const serviceTitle = keyframes`
             0% {
                 color: rgba(116,198,212,0.8);
             }

             100% {
                 color:rgba(227,225,228,1.0);
             } 

`;

export const ServiceTitle = styled.div`
  font-family: futura-demi;
  font-size: 8vw;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  color: #e3e1e4;
  letter-spacing: 0.1em;
  font-kerning: auto;
  animation: ${serviceTitle} 3s linear infinite alternate both;
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
  color: rgba(188, 207, 213, 0.9);
  letter-spacing: 0.02em;
  font-kerning: auto;
`;
export const ServiceDescriptionItem = styled.div`
  font-size: 2.5vw;
  text-align: left;
  color: rgba(227, 225, 228, 0.9);
  letter-spacing: 0.06em;
  line-height: 1.5em;
  font-kerning: auto;
`;

ServiceGeneralContentContainer.displayName = "ServiceGeneralContentContainer";
ServiceTitle.displayName = "ServiceTitle";
ServiceDescription.displayName = "ServiceDescription";
ServiceDescriptionContainer.displayName = "ServiceDescriptionContainer";
ServiceDescriptionTitle.displayName = "ServiceDescriptionTitle";
ServiceDescriptionItem.displayName = "ServiceDescriptionItem";
