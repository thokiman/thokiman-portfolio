import styled, { keyframes } from 'styled-components';
const maxWidthSmartphone = 800;
const technologyAnimationColor0 = 'rgba(116,198,212,0.8)';
const technologyAnimationColor100 = 'rgba(227,225,228,1.0)';

const foregroundNeonAnimationColor = 'rgba(21,129,148,1)';
const backgroundNeonAnimationColor = 'rgba(126,199,212,0.7)';
const textTechnologyTitleColor = 'rgba(227,225,228,0.9)';

const neon = keyframes`
 from {
    box-shadow: 0 0 30px 10px ${foregroundNeonAnimationColor}, 0 0 50px 20px ${foregroundNeonAnimationColor}, 0 0 80px ${foregroundNeonAnimationColor}, 0 0 40px ${backgroundNeonAnimationColor},
      0 0 70px ${backgroundNeonAnimationColor}, 0 0 80px ${backgroundNeonAnimationColor}, 0 0 100px ${backgroundNeonAnimationColor}, 0 0 150px ${backgroundNeonAnimationColor};
  }
  to {
    box-shadow: 0 0 5px 5px ${foregroundNeonAnimationColor}, 0 0 10px 10px ${foregroundNeonAnimationColor}, 0 0 15px ${foregroundNeonAnimationColor}, 0 0 20px ${backgroundNeonAnimationColor},
      0 0 35px ${backgroundNeonAnimationColor}, 0 0 40px ${backgroundNeonAnimationColor}, 0 0 50px ${backgroundNeonAnimationColor}, 0 0 75px ${backgroundNeonAnimationColor};
  }`;

const technologyTitle = keyframes`
             0% {
                 color: ; ${technologyAnimationColor0}
             }

             100% {
                 color:${technologyAnimationColor100};
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

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
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
  color: ${textTechnologyTitleColor};
  justify-self: start;
  animation: ${technologyTitle} 3s ease-in-out infinite alternate both;
  grid-area: TechnologyTitle;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 25px;
  }
`;

export const TechnologyGridContent = styled.div`
  grid-area: TechnologyGridContent;
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 50px 50px;
  justify-items: center;
`;

export const TechnologyImage = styled.img`
  padding: 0.6vw;
  width: 10vw;
  height: 17vh;
  justify-self: stretch;
  border-radius: 1vw 1vw 1vw 1vw;
  animation: ${neon} 3s ease-in-out infinite alternate both;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100px;
    height: 100px;
  }
`;
TechnologyGridContainer.displayName = 'TechnologyGridContainer';
TechnologyTitle.displayName = 'TechnologyTitle';
TechnologyGridContent.displayName = 'TechnologyGridContent';

TechnologyImage.displayName = 'TechnologyImage';
