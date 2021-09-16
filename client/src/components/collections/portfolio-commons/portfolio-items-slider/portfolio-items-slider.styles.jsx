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
    left: 17vw;
  }

  @media only screen and (max-width: 620px) {
  }
  @media only screen and (max-width: 570px) {
    top: 10vh;
  }
  @media only screen and (max-width: 470px) {
    top: 8vh;
  }
  @media only screen and (max-width: 370px) {
    top: 5vh;
  }

  @media only screen and (max-width: 270px) {
    top: 2vh;
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
    left: 86vw;
  }

  @media only screen and (max-width: 570px) {
    top: 10vh;
  }
  @media only screen and (max-width: 470px) {
    top: 8vh;
  }
  @media only screen and (max-width: 370px) {
    top: 5vh;
  }

  @media only screen and (max-width: 270px) {
    top: 2vh;
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
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100vw;
    height: 40vh;
  }
  @media only screen and (max-width: 770px) {
    width: 100vw;
    height: 40vh;
  }
  @media only screen and (max-width: 620px) {
    width: 100vw;
    height: 38vh;
  }
  @media only screen and (max-width: 570px) {
    width: 100vw;
    height: 35vh;
  }
  @media only screen and (max-width: 470px) {
    width: 100vw;
    height: 30vh;
  }
  @media only screen and (max-width: 370px) {
    width: 100vw;
    height: 25vh;
  }

  @media only screen and (max-width: 270px) {
    width: 100vw;
    height: 20vh;
  }
`;

export const WrapperDots = styled.div`
  background-color: #000;

  padding: 0 auto;
`;

export const DotsContainer = styled.ul`
  margin-top: 4vh;
  margin-bottom: 4vh;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  left: -7.5vw;
  width: 100vw;
  @media only screen and (max-width: 770px) {
    left: -10vw;
  }
  @media only screen and (max-width: 570px) {
    left: -12vw;
  }
  @media only screen and (max-width: 400px) {
    left: -14vw;
  }
`;

export const WrapperSingleDot = styled.a`
  width: 50vw;
  height: 50vh;
`;

export const SingleDotImage = styled.img`
  width: 14vw;
  height: 14vh;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    width: 10vw;
    height: 10vh;
  }

  @media only screen and (max-width: 1200px) {
    width: 10vw;
    height: 8vh;
  }

  @media only screen and (max-width: 1100px) {
    width: 10vw;
    height: 7vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 12vw;
    height: 7vh;
  }
  @media only screen and (max-width: 770px) {
    width: 14vw;
    height: 6vh;
  }

  @media only screen and (max-width: 570px) {
    width: 17vw;
    height: 6vh;
  }
  @media only screen and (max-width: 470px) {
    width: 21vw;
    height: 6vh;
  }
  @media only screen and (max-width: 400px) {
    width: 23vw;
    height: 6vh;
  }

  @media only screen and (max-width: 320px) {
    width: 23vw;
    height: 5vh;
  }

  @media only screen and (max-width: 270px) {
    width: 23vw;
    height: 4vh;
  }
`;
