import styled, { keyframes, css } from "styled-components";
import { ReactComponent as ThokimanHeadGrayColor } from "../../assets/collections-icon/thokiman-icon/logo/color/thokiman_head_color.svg";
import { ReactComponent as WhiteOutlineThokiman } from "../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_cream.svg";
const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};

export const RightServiceContainer = styled.div`
  background-color: rgba(18, 129, 148, 0.7);
  width: 66.3vw;
  height: 68vh;
  padding: 0 10px;
  position: relative;
  right: 4vw;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    border: red solid 1px;
    width: 100%;
    right: 0;
    height: 50vh;
    ${getSideBarActive}
  }
`;
const thokimanHeadColor = keyframes`
      0% {
          transform: rotateX(70deg);
          transform-origin: top;
          opacity: 0;
      }

      100% {
          transform: rotateX(0deg);
          transform-origin: top;
          opacity: 1;
      }

`;

const thokimanHeadColorAnimationPart0 = keyframes`
                  0% {
                      opacity: 0.4;
                  }

                  100% {
                      stroke-dashoffset: 0;
                      stroke: #90EE90;
                      fill: #556B2F;
                      opacity: 0.7;

                  }   

`;
const thokimanHeadColorAnimationPart1 = keyframes`
                  0% {
                      opacity: 0.4;
                  }

                  100% {
                      stroke-dashoffset: 0;
                      stroke: #90EE90;
                      fill: #66CDAA;
                      opacity: 0.8;

                  }

`;
const thokimanHeadColorAnimationPart2 = keyframes`
                  0% {
                      opacity: 0.4;
                  }

                  100% {
                      stroke-dashoffset: 0;
                      stroke: #90EE90;
                      fill: #7FFFD4;
                      opacity: 0.8;

                  }

`;
const thokimanHeadColorAnimationPart3 = keyframes`
                  0% {
                      opacity: 0.4;
                  }

                  100% {
                      stroke-dashoffset: 0;
                      stroke: #90EE90;
                      fill: #00FF7F;
                      opacity: 0.9;

                  }
`;
const thokimanHeadColorAnimationPart4 = keyframes`
                  0% {
                      opacity: 0.4;
                  }

                  100% {
                      stroke-dashoffset: 0;
                      stroke: #90EE90;
                      fill: #8FBC8B;
                      opacity: 0.8;

                  }

`;

const thokimanHeadColorAnimationPart5 = keyframes`
                  0% {
                      opacity: 0.4;
                  }

                  100% {
                      stroke-dashoffset: 0;
                      stroke: #90EE90;
                      fill: #6B8E23;
                      opacity: 0.9;

                  }

`;

const ThokimanHeadColorAnimationStyles = css`
  stroke-miterlimit: 15;
  stroke-dasharray: 400 50;
  stroke-dashoffset: 100%;
`;
export const ThokimanHeadColor = styled(ThokimanHeadGrayColor)`
  width: 100%;
  height: 100%;
  animation: ${thokimanHeadColor} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
  path.thokiman-head-color0 {
    ${ThokimanHeadColorAnimationStyles}
    animation: ${thokimanHeadColorAnimationPart0} 2s ease-in-out alternate-reverse both infinite;
    animation-delay: 1s;
  }

  path.thokiman-head-color1 {
    ${ThokimanHeadColorAnimationStyles}
    animation: ${thokimanHeadColorAnimationPart1} 2s ease-in-out alternate-reverse both infinite;
    animation-delay: 1s;
  }

  path.thokiman-head-color2 {
    ${ThokimanHeadColorAnimationStyles}
    animation: ${thokimanHeadColorAnimationPart2} 2s ease-in-out alternate-reverse both infinite;
    animation-delay: 1s;
  }

  path.thokiman-head-color3 {
    ${ThokimanHeadColorAnimationStyles}
    animation: ${thokimanHeadColorAnimationPart3} 2s ease-in-out alternate-reverse both infinite;
    animation-delay: 1s;
  }

  path.thokiman-head-color4 {
    ${ThokimanHeadColorAnimationStyles}
    animation: ${thokimanHeadColorAnimationPart4} 2s ease-in-out alternate-reverse both infinite;
    animation-delay: 1s;
  }

  path.thokiman-head-color5 {
    ${ThokimanHeadColorAnimationStyles}
    animation: ${thokimanHeadColorAnimationPart5} 2s ease-in-out alternate-reverse both infinite;
    animation-delay: 1s;
  }
`;
const thokimanHeadOutline = keyframes`
      0% {
          transform: rotateY(-100deg);
          transform-origin: right;
          opacity: 0;
      }

      100% {
          transform: rotateY(0);
          transform-origin: right;
          opacity: 1;
      }
`;

const thokimanOutlineCreamAnimation = keyframes`
                  to {

                      stroke-dashoffset: 0;

                  }    

`;

export const ThokimanHeadOutlineCream = styled(WhiteOutlineThokiman)`
  width: 100%;
  height: 100%;
  border-left: rgba($color: #74c6d4, $alpha: 0.8) solid 1px;
  animation: ${thokimanHeadOutline} 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;

  .thoki-out-cream {
    stroke: #90ee90;
    opacity: 0.9;
    stroke-miterlimit: 15;
    stroke-dasharray: 400 50;
    stroke-dashoffset: 100%;
    animation: ${thokimanOutlineCreamAnimation} 2s ease-in-out alternate-reverse
      both infinite;
    animation-delay: 1s;
  }
`;
RightServiceContainer.displayName = "RightServiceContainer";
ThokimanHeadColor.displayName = "ThokimanHeadColor";
ThokimanHeadOutlineCream.displayName = "ThokimanHeadOutlineCream";
