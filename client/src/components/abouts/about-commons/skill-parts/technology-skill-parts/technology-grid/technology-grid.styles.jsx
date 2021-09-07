import styled, { keyframes } from 'styled-components';

const foregroundNeonColor = 'rgba(21,129,148,1)'
const backgroundNeonColor = 'rgba(126,199,212,0.7)'
const textColor = 'rgba(227,225,228,0.9)'

const neon = keyframes`
 from {
    box-shadow: 0 0 30px 10px ${ foregroundNeonColor }, 0 0 50px 20px ${ foregroundNeonColor }, 0 0 80px ${ foregroundNeonColor }, 0 0 40px ${ backgroundNeonColor },
      0 0 70px ${ backgroundNeonColor }, 0 0 80px ${ backgroundNeonColor }, 0 0 100px ${ backgroundNeonColor }, 0 0 150px ${ backgroundNeonColor };
  }
  to {
    box-shadow: 0 0 5px 5px ${ foregroundNeonColor }, 0 0 10px 10px ${ foregroundNeonColor }, 0 0 15px ${ foregroundNeonColor }, 0 0 20px ${ backgroundNeonColor },
      0 0 35px ${ backgroundNeonColor }, 0 0 40px ${ backgroundNeonColor }, 0 0 50px ${ backgroundNeonColor }, 0 0 75px ${ backgroundNeonColor };
  }`


const technologyTitle = keyframes`
             0% {
                 color: rgba(116,198,212,0.8);
             }

             100% {
                 color:rgba(227,225,228,1.0);
             } 

`;

export const TechnologyGridContainer = styled.div`
  position: relative;
  top: 10px;
  margin: 20px auto;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 40px 0px;
  justify-content: start;
  justify-items: center;
  grid-template-areas:
    'TechnologyTitle'
    'TechnologyGridContent';
  align-items: flex-start;

  @media only screen and (max-width: 800px) {
    top: 0;
  }
`;

export const TechnologyTitle = styled.div`
  text-align: left;
  font-family: baskerville-old-face;
  font-size: 3vw;
  margin: auto 0;
  font-kerning: auto;
  letter-spacing: 0.01em;
  color: ${ textColor };
  justify-self: start;
  animation: ${ technologyTitle } 3s ease-in-out infinite alternate both;
  grid-area: TechnologyTitle;
  @media only screen and (max-width: 800px) {
    font-size: 25px;
  }
`;

export const TechnologyGridContent = styled.div`
  grid-area: TechnologyGridContent;
  margin-bottom:20px;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 50px 50px;
  justify-items: center;
`;

export const TechnologyImage = styled.img`
  padding: 0.5vw;
  width: 10vw;
  height: 17vh;
  justify-self: stretch;
  animation: ${ neon } 3s ease-in-out infinite alternate both;
  @media only screen and (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
`;
TechnologyGridContainer.displayName = 'TechnologyGridContainer';
TechnologyTitle.displayName = 'TechnologyTitle';
TechnologyGridContent.displayName = 'TechnologyGridContent';

TechnologyImage.displayName = 'TechnologyImage';
