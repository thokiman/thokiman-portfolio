import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import styled, { keyframes } from 'styled-components';

const maxWidthDesktop = 1679;
const maxWidthSmartphone = 900;
const greenBlueColor10 = '#1ff1ea';
const greenBlueColor8 = '#8BFDFE';
const greenBlueColor9 = '#28D7FE';

const colorChange = keyframes`
 0%{
   color:${greenBlueColor9};
}
50%{
  color:${greenBlueColor8};
}
100%{
   color:${greenBlueColor10};
`;

export const ArrowContainer = styled.span``;

export const PrevArrow = styled(BiChevronsLeft)`
  position: absolute;
  top: 30vh;
  left: 0vw;

  animation: ${colorChange} 2s ease-in-out infinite alternate both;
  width: 10vw;
  height: 10vh;
  z-index: 1;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 18vh;
    left: 5vw;
  }

  @media only screen and (max-width: 1100px) {
    top: 12vh;
    left: 4vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 14vh;
    left: 10vw;
  }

  @media only screen and (max-width: 550px) {
    top: 10vh;
  }
  @media only screen and (max-width: 470px) {
  }
  @media only screen and (max-width: 400px) {
    top: 5vh;
  }

  @media only screen and (max-width: 300px) {
  }
`;

export const NextArrow = styled(BiChevronsRight)`
  position: absolute;
  top: 30vh;
  left: 90vw;

  animation: ${colorChange} 2s ease-in-out 0.5s infinite alternate both;
  width: 10vw;
  height: 10vh;
  z-index: 1;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 18vh;
    left: 65vw;
  }
  @media only screen and (max-width: 1450px) {
    top: 18vh;
    left: 85vw;
  }
  @media only screen and (max-width: 1300px) {
    left: 87vw;
  }

  @media only screen and (max-width: 1100px) {
    top: 12vh;
    left: 84vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 14vh;
    left: 78vw;
  }

  @media only screen and (max-width: 550px) {
    top: 10vh;
  }
  @media only screen and (max-width: 470px) {
  }
  @media only screen and (max-width: 400px) {
    top: 5vh;
  }

  @media only screen and (max-width: 300px) {
  }
`;

export const PortfolioItemsSliderImageContainer = styled.div``;
export const PortfolioItemsSliderImage = styled.img`
  position: relative;
  left: 10vw;
  width: 80vw;
  height: 90vh;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    left: 15vw;
    width: 50vw;
    height: 50vh;
  }
  @media only screen and (max-width: 1450px) {
    left: 15vw;
    width: 70vw;
    height: 55vh;
  }
  @media only screen and (max-width: 1300px) {
    width: 72vw;
    height: 55vh;
  }

  @media only screen and (max-width: 1100px) {
    width: 67vw;
    height: 40vh;
  }
  @media only screen and (max-width: 1024px) {
    width: 67vw;
    height: 35vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 83vw;
    height: 40vh;
    left: 8vw;
  }

  @media only screen and (max-width: 550px) {
    height: 38vh;
  }
  @media only screen and (max-width: 470px) {
    height: 30vh;
  }
  @media only screen and (max-width: 400px) {
    width: 80vw;
    height: 26vh;
    left: 9vw;
  }

  @media only screen and (max-width: 300px) {
    width: 80vw;
  }
`;

export const WrapperDots = styled.div`
  background-color: #000;

  padding: 0 auto;
`;

export const DotsContainer = styled.ul`
  margin-top: 4vh;

  display: flex;
  justify-content: space-evenly;
  position: relative;

  left: -7.5vw;
  width: 100vw;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: -8.5vw;
  }

  @media only screen and (max-width: 550px) {
    left: -9vw;
  }
  @media only screen and (max-width: 470px) {
    left: -9.5vw;
  }
  @media only screen and (max-width: 400px) {
    left: -10.5vw;
  }
  @media only screen and (max-width: 300px) {
    left: -11vw;
  }
`;

export const WrapperSingleDot = styled.a`
  width: 50vw;
  height: 50vh;
`;

export const SingleDotImage = styled.img`
  width: 14vw;
  height: 14vh;
  margin-bottom: 4vh;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    width: 10vw;
    height: 10vh;
  }

  @media only screen and (max-width: 1200px) {
    height: 8vh;
  }

  @media only screen and (max-width: 1100px) {
    height: 7vh;
  }
  @media only screen and (max-width: 1024px) {
    height: 5vh;
  }

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 14vw;
    height: 6vh;
  }

  @media only screen and (max-width: 550px) {
    width: 13vw;
    height: 5vh;
  }
  @media only screen and (max-width: 470px) {
    height: 4vh;
  }
  @media only screen and (max-width: 400px) {
  }

  @media only screen and (max-width: 300px) {
  }
`;
