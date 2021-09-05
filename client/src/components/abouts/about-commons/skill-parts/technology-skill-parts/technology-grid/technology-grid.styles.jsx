import styled, { keyframes } from 'styled-components';

const colorForegroundNeon = '#60626E'
const colorBackgroundNeon = '#7EC7D4'

const neon = keyframes`
 from {
    box-shadow: 0 0 10px ${ colorForegroundNeon }, 0 0 20px ${ colorForegroundNeon }, 0 0 30px ${ colorForegroundNeon }, 0 0 40px ${ colorBackgroundNeon },
      0 0 70px ${ colorBackgroundNeon }, 0 0 80px ${ colorBackgroundNeon }, 0 0 100px ${ colorBackgroundNeon }, 0 0 150px ${ colorBackgroundNeon };
  }
  to {
    box-shadow: 0 0 5px ${ colorForegroundNeon }, 0 0 10px ${ colorForegroundNeon }, 0 0 15px ${ colorForegroundNeon }, 0 0 20px ${ colorBackgroundNeon },
      0 0 35px ${ colorBackgroundNeon }, 0 0 40px ${ colorBackgroundNeon }, 0 0 50px ${ colorBackgroundNeon }, 0 0 75px ${ colorBackgroundNeon };
  }`

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
  color: #e3e1e4;
  justify-self: start;

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
  -webkit-animation: ${ neon } 1.5s ease-in-out infinite alternate;
  -moz-animation: ${ neon } 1.5s ease-in-out infinite alternate;
  animation: ${ neon } 1.5s ease-in-out infinite alternate;
  @media only screen and (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
`;
TechnologyGridContainer.displayName = 'TechnologyGridContainer';
TechnologyTitle.displayName = 'TechnologyTitle';
TechnologyGridContent.displayName = 'TechnologyGridContent';

TechnologyImage.displayName = 'TechnologyImage';
