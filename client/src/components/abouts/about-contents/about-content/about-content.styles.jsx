import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as ThokimanBodyGray } from '../../../../assets/collections-icon/thokiman-icon/page/thokiman_body_gray.svg';
import { ReactComponent as ThokimanHandGray } from '../../../../assets/collections-icon/thokiman-icon/page/thokiman_hand_gray.svg';
import { ReactComponent as ThokimanLegGray } from '../../../../assets/collections-icon/thokiman-icon/page/thokiman_leg_gray.svg';
import { ReactComponent as ThokimanSkeletonGray } from '../../../../assets/collections-icon/thokiman-icon/page/thokiman_skeleton_gray.svg';
const maxWidthTablet = 1024;
const maxWidthSmartphone = 800;

const backgroundRightPageContainerColor = 'rgba(18, 129, 148, 0.85)';
const SideBarActive = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return SideBarActive;
  return null;
};

const getTopRightPageContainer = ({ $measurerightpagecontainer }) => {
  return $measurerightpagecontainer.top;
};
export const RightPageContainer = styled.div`
  background-color: ${backgroundRightPageContainerColor};
  width: 64.5vw;
  margin-right: 2vw;
  padding: 40px 0;
  height: 90%;

  @media only screen and (max-width: ${maxWidthTablet}px) {
    width: 65%;
    height: 44vh;
    margin: 0;

    ${getSideBarActive}
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    height: 80vh;
    position: relative;
    top: ${getTopRightPageContainer}vh;
    ${getSideBarActive}
  }
`;

RightPageContainer.displayName = 'RightPageContainer';

export const RightPageContent = styled.div`
  margin: 0 auto;
  width: 66%;
  height: 98%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 33%);
  align-items: center;
  justify-content: center;
  grid-template-areas:
    'topgrid-skeletonleft topgrid-skeletonmiddle topgrid-skeletonright'
    'middlegrid-lefthand maingrid-body middlegrid-righthand'
    'bottomgrid-leftleg maingrid-body bottomgrid-rightleg';
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 95%;
    height: 100%;
    gap: 0 18px;
  }
`;

RightPageContent.displayName = 'RightPageContent ';

const thokimanSkeletonContent = keyframes`
    to {
        stroke-dashoffset: 0%;
    }
`;

const thokimanSkeletonGrayMiddleDropdownShow = keyframes`
    0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
 `;

const thokimanSkeletonGrayMiddleDropdownHide = keyframes`
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

const thokimanSkeletonGrayLeftRightDropdownShow = keyframes`
  
      0% {
    transform: rotateX(0);
    transform-origin: bottom;
    opacity: 1;
  }
  100% {
    transform: rotateX(-70deg);
    transform-origin: bottom;
    opacity: 0;
  }
            
            `;

const thokimanSkeletonGrayLeftRightDropdownHide = keyframes`
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

const thokimanGrayBodyMiddleDropdownShow = keyframes`
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

const thokimanGrayBodyMiddleDropdownHide = keyframes`
  0% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
 `;

//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------
// all
//-------------------------------------------------------------------------------------------------------------
const ThokimanSkeletonContentStyles = css`
  width: 105px;
  height: 100%;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 80vw;
  }
`;
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------
// left skeleton hide, animation
// right skeleton hide, animation
// middle skeleton hide, animation
//-------------------------------------------------------------------------------------------------------------
const ThokimanSkeletonContentDropdownHide = css`
  ${ThokimanSkeletonContentStyles}

  path.thokiman-skeleton-gray0 {
    stroke-dasharray: 200 40;
    stroke-dashoffset: 40%;
    stroke-miterlimit: 5;

    animation: ${thokimanSkeletonContent} 2s ease-in-out infinite
      alternate-reverse both;
  }
`;
//-------------------------------------------------------------------------------------------------------------
// left skeleton show, animation
// right skeleton show, animation
//-------------------------------------------------------------------------------------------------------------
const ThokimanSkeletonContentLeftRightDropdownShow = css`
  ${ThokimanSkeletonContentStyles}
`;

const getThokimanSkeletonLeftRightContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanSkeletonContentDropdownHide;
  }
  return ThokimanSkeletonContentLeftRightDropdownShow;
};

export const ThokimanSkeletonLeftRightContent = styled(ThokimanSkeletonGray)`
  ${getThokimanSkeletonLeftRightContent}
`;
ThokimanSkeletonLeftRightContent.displayName =
  'ThokimanSkeletonLeftRightContent';
//-------------------------------------------------------------------------------------------------------------
// middle skeleton show, animation
//-------------------------------------------------------------------------------------------------------------
const ThokimanSkeletonMiddleContentDropdownShow = css`
  ${ThokimanSkeletonContentStyles}
  path.thokiman-skeleton-gray0 {
    stroke-dasharray: 200 40;
    stroke-dashoffset: 40%;
    stroke-miterlimit: 5;
    animation: ${thokimanSkeletonContent} 2s ease-in-out infinite
      alternate-reverse both;
  }
`;

const getThokimanSkeletonMiddleContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanSkeletonContentDropdownHide;
  }
  return ThokimanSkeletonMiddleContentDropdownShow;
};

export const ThokimanSkeletonMiddleContent = styled(ThokimanSkeletonGray)`
  ${getThokimanSkeletonMiddleContent}
`;
ThokimanSkeletonMiddleContent.displayName = 'ThokimanSkeletonMiddleContent';
//-------------------------------------------------------------------------------------------------------------
// left, right, middle skeleton container styles
//-------------------------------------------------------------------------------------------------------------
const ThokimanSkeletonGrayStyles = css`
  position: relative;
  margin: auto;
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 40vw;
  }
  @media only screen and (max-width: 500px) {
    width: 30vw;
  }
`;

//-------------------------------------------------------------------------------------------------------------
// left skeleton container styles
//-------------------------------------------------------------------------------------------------------------
const ThokimanSkeletonGrayLeftDropdownHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: topgrid-skeletonleft;
  left: 35px;

  animation: ${thokimanSkeletonGrayLeftRightDropdownHide} 0.55s
    cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: 12vw;
  }

  @media only screen and (max-width: 500px) {
    left: 4vw;
  }
  @media only screen and (max-width: 300px) {
    left: 6vw;
  }
`;

const ThokimanSkeletonGrayLeftDropdownShow = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: topgrid-skeletonleft;
  left: 35px;

  animation: ${thokimanSkeletonGrayLeftRightDropdownShow} 0.55s
    cubic-bezier(0.6, -0.28, 0.735, 0.045) both;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: 12vw;
  }

  @media only screen and (max-width: 300px) {
    left: 7vw;
  }
`;

const getThokimanSkeletonGrayLeft = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanSkeletonGrayLeftDropdownHide;
  }
  return ThokimanSkeletonGrayLeftDropdownShow;
};

export const ThokimanSkeletonGrayLeft = styled.div`
  ${getThokimanSkeletonGrayLeft}
`;
ThokimanSkeletonGrayLeft.displayName = 'ThokimanSkeletonGrayLeft';
//-------------------------------------------------------------------------------------------------------------
// middle skeleton container styles
//-------------------------------------------------------------------------------------------------------------
const ThokimanSkeletonGrayMiddleDropdownHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: topgrid-skeletonmiddle;
  animation: ${thokimanSkeletonGrayMiddleDropdownHide} 0.6s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const ThokimanSkeletonGrayMiddleDropdownShow = css`
  ${ThokimanSkeletonGrayStyles}

  grid-area: topgrid-skeletonmiddle;
  animation: ${thokimanSkeletonGrayMiddleDropdownShow} 0.6s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media only screen and (max-width: ${maxWidthTablet}px) {
    top: 1.5vh;
    left: 0.5vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 2vh;
    left: 1vw;
  }
  @media only screen and (max-width: 770px) {
    top: -1vh;
    left: 0.5vw;
  }
  @media only screen and (max-width: 550px) {
    top: -1.5vh;
    left: 0.5vw;
  }
  @media only screen and (max-width: 450px) and (max-height: 823px) {
    top: 4vh;
  }
  @media only screen and (max-width: 450px) and (max-height: 736px) {
    top: 0.5vh;
  }
  @media only screen and (max-width: 400px) and (max-height: 812px) {
    top: 6vh;
  }
  @media only screen and (max-width: 400px) and (max-height: 667px) {
    top: 0vh;
  }
  @media only screen and (max-width: 350px) {
    top: -1vh;
  }
  @media only screen and (max-width: 300px) {
    top: 2vh;
  }
`;

const getThokimanSkeletonGrayMiddle = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanSkeletonGrayMiddleDropdownHide;
  }
  return ThokimanSkeletonGrayMiddleDropdownShow;
};

export const ThokimanSkeletonGrayMiddle = styled.div`
  ${getThokimanSkeletonGrayMiddle}
`;
ThokimanSkeletonGrayMiddle.displayName = 'ThokimanSkeletonGrayMiddle';
//-------------------------------------------------------------------------------------------------------------
//right skeleton container styles
//-------------------------------------------------------------------------------------------------------------
const ThokimanSkeletonGrayRightDropdownHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: topgrid-skeletonright;
  right: 35px;
  animation: ${thokimanSkeletonGrayLeftRightDropdownHide} 0.55s
    cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    right: 12vw;
  }
  @media only screen and (max-width: 500px) {
    right: 4vw;
  }
  @media only screen and (max-width: 300px) {
    right: 6vw;
  }
`;

const ThokimanSkeletonGrayRightDropdownShow = css`
  ${ThokimanSkeletonGrayStyles}
  right: 35px;
  grid-area: topgrid-skeletonright;

  animation: ${thokimanSkeletonGrayLeftRightDropdownShow} 0.55s
    cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    right: 12vw;
  }
  @media only screen and (max-width: 300px) {
    right: 6vw;
  }
`;

const getThokimanSkeletonGrayRight = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanSkeletonGrayRightDropdownHide;
  }
  return ThokimanSkeletonGrayRightDropdownShow;
};

export const ThokimanSkeletonGrayRight = styled.div`
  ${getThokimanSkeletonGrayRight}
`;
ThokimanSkeletonGrayRight.displayName = 'ThokimanSkeletonGrayRight';
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------
// body animation
//-------------------------------------------------------------------------------------------------------------
const ThokimanBodyMiddleContainerDropdownHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: maingrid-body;

  animation: ${thokimanGrayBodyMiddleDropdownHide} 0.6s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const ThokimanBodyMiddleContainerDropdownShow = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: maingrid-body;

  animation: ${thokimanGrayBodyMiddleDropdownShow} 0.6s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
const getThokimanBodyContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanBodyMiddleContainerDropdownHide;
  }
  return ThokimanBodyMiddleContainerDropdownShow;
};

export const ThokimanBodyContainer = styled.div`
  ${getThokimanBodyContainer}
`;
ThokimanBodyContainer.displayName = 'ThokimanBodyContainer';
//-------------------------------------------------------------------------------------------------------------
// body styles
//-------------------------------------------------------------------------------------------------------------
const ThokimanBodyGrayMiddleContentDropdownHide = css`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 50vw;
  }
`;

const ThokimanBodyGrayMiddleContentDropdownShow = css`
  width: 100%;
  height: 60%;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 50vw;
  }

  @media only screen and (max-width: 300px) {
    position: relative;
    top: -4vh;
  }
`;

const getThokimanBodyGrayContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanBodyGrayMiddleContentDropdownHide;
  } else {
    return ThokimanBodyGrayMiddleContentDropdownShow;
  }
};

export const ThokimanBodyGrayContent = styled(ThokimanBodyGray)`
  ${getThokimanBodyGrayContent}
`;
ThokimanBodyGrayContent.displayName = 'ThokimanBodyGrayContent';
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------
// left hand styles,
// right hand styles
//-------------------------------------------------------------------------------------------------------------
const ThokimanPartGrayDropdownHideStyles = css`
  width: 100%;
  height: 100%;
`;

const ThokimanPartGrayDropdownShowStyles = css`
  width: 100%;
  height: 100%;
`;
//-------------------------------------------------------------------------------------------------------------
// hand
//-------------------------------------------------------------------------------------------------------------
// right hand animation
//-------------------------------------------------------------------------------------------------------------
const ThokimanHandRightContainerDropdownHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: middlegrid-righthand;
  top: 0vh;
  right: 1.8vw;
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    right: 9vw;
  }
`;
const ThokimanHandRightContainerDropdownShow = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: middlegrid-righthand;
  top: -7vh;
  right: 4.7vw;

  transition: all 0.5s ease-in-out;
  transform: rotate(-90deg);

  @media only screen and (max-width: ${maxWidthTablet}px) {
    top: -5vh;
    right: 0vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    transform: rotate(-160deg) scaleX(-1);
    top: -18vh;
    right: 13vw;
  }
  @media only screen and (max-width: 770px) {
    top: -19vh;
    right: 20vw;
  }
  @media only screen and (max-width: 550px) {
    right: 23vw;
  }
  @media only screen and (max-width: 450px) and (max-height: 823px) {
    top: -17.5vh;
    right: 11vw;
  }
  @media only screen and (max-width: 450px) and (max-height: 736px) {
    top: -18.5vh;
  }
  @media only screen and (max-width: 400px) {
    right: 13vw;
  }
  @media only screen and (max-width: 375px) {
    top: -17vh;
    right: 10vw;
  }
  @media only screen and (max-width: 350px) {
    top: -18vh;
    right: 15vw;
  }
  @media only screen and (max-width: 300px) {
    top: -20vh;
    right: 10vw;
  }
`;
const getThokimanHandRightContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanHandRightContainerDropdownHide;
  }
  return ThokimanHandRightContainerDropdownShow;
};

export const ThokimanHandRightContainer = styled.div`
  ${getThokimanHandRightContainer}
`;

ThokimanHandRightContainer.displayName = 'ThokimanHandRightContainer';
//-------------------------------------------------------------------------------------------------------------
// right hand styles
//-------------------------------------------------------------------------------------------------------------
const getThokimanHandGrayRightContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanPartGrayDropdownHideStyles;
  }
  return ThokimanPartGrayDropdownShowStyles;
};

export const ThokimanHandGrayRightContent = styled(ThokimanHandGray)`
  ${getThokimanHandGrayRightContent}
`;
ThokimanHandGrayRightContent.displayName = 'ThokimanHandGrayRightContent';
//-------------------------------------------------------------------------------------------------------------
// right leg animation
//-------------------------------------------------------------------------------------------------------------
const ThokimanLegRightContainerDropdownHide = css`
  ${ThokimanSkeletonGrayStyles}

  top: 0vh;
  right: 1.8vw;
  grid-area: bottomgrid-rightleg;
  transition: all 0.5s ease-in-out;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    right: 9vw;
  }
`;

const ThokimanLegRightContainerDropdownShow = css`
  ${ThokimanSkeletonGrayStyles}

  transform: rotate(-45deg);
  top: -1vh;
  right: 8vw;
  grid-area: bottomgrid-rightleg;
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: ${maxWidthTablet}px) {
    right: 5vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    transform: rotate(0deg);
    right: 28vw;
  }
  @media only screen and (max-width: 770px) {
    top: 2vh;
    right: 32vw;
  }
  @media only screen and (max-width: 550px) {
    top: 0vh;
    right: 32vw;
  }
  @media only screen and (max-width: 450px) {
    top: 1vh;
    right: 25vw;
  }
  @media only screen and (max-width: 400px) {
    right: 30vw;
  }
  @media only screen and (max-width: 375px) {
    top: 1vh;
    right: 25vw;
  }
  @media only screen and (max-width: 350px) {
  }
  @media only screen and (max-width: 300px) {
    top: -4vh;
    right: 26vw;
  }
`;

const getThokimanLegRightContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanLegRightContainerDropdownHide;
  }
  return ThokimanLegRightContainerDropdownShow;
};

export const ThokimanLegRightContainer = styled.div`
  ${getThokimanLegRightContainer}
`;
ThokimanLegRightContainer.displayName = 'ThokimanLegRightContainer';
//-------------------------------------------------------------------------------------------------------------
// right leg styles
//-------------------------------------------------------------------------------------------------------------
const getThokimanLegGrayRightContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanPartGrayDropdownHideStyles;
  }
  return ThokimanPartGrayDropdownShowStyles;
};

export const ThokimanLegGrayRightContent = styled(ThokimanLegGray)`
  ${getThokimanLegGrayRightContent}
`;
ThokimanLegGrayRightContent.displayName = 'ThokimanLegGrayRightContent';

//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------
// left hand animation
//-------------------------------------------------------------------------------------------------------------
const ThokimanHandLeftContainerDropdownHide = css`
  ${ThokimanSkeletonGrayStyles}

  grid-area: middlegrid-lefthand;
  top: 0vh;
  left: 1.8vw;
  transform: scaleX(-1);
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: 9vw;
  }
`;
const ThokimanHandLeftContainerDropdownShow = css`
  ${ThokimanSkeletonGrayStyles}

  grid-area: middlegrid-lefthand;
  top: -7vh;
  left: 5vw;
  transform: rotate(-90deg) scaleY(-1);
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: ${maxWidthTablet}px) {
    top: -5vh;
    left: 0vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    transform: rotate(20deg) scaleX(-1);
    top: 1.5vh;
    left: 13vw;
  }
  @media only screen and (max-width: 770px) {
    top: 1vh;
    left: 21vw;
  }

  @media only screen and (max-width: 550px) {
    left: 23vw;
  }
  @media only screen and (max-width: 450px) {
    left: 11vw;
  }

  @media only screen and (max-width: 450px) and (max-height: 823px) {
    top: 2vh;
    left: 10vw;
  }
  @media only screen and (max-width: 450px) and (max-height: 736px) {
    top: 1vh;
  }
  @media only screen and (max-width: 400px) {
    left: 13vw;
  }
  @media only screen and (max-width: 375px) {
    top: 3vh;
    left: 10vw;
  }
  @media only screen and (max-width: 350px) {
    top: 0.5vh;
    left: 13vw;
  }
  @media only screen and (max-width: 300px) {
    top: -0.5vh;
    left: 9vw;
  }
`;

const getThokimanHandLeftContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanHandLeftContainerDropdownHide;
  }
  return ThokimanHandLeftContainerDropdownShow;
};

export const ThokimanHandLeftContainer = styled.div`
  ${getThokimanHandLeftContainer}
`;
ThokimanHandLeftContainer.displayName = 'ThokimanHandLeftContainer';
//-------------------------------------------------------------------------------------------------------------
//left hand styles
//-------------------------------------------------------------------------------------------------------------
const getThokimanHandGrayLeftContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanPartGrayDropdownHideStyles;
  }
  return ThokimanPartGrayDropdownShowStyles;
};

export const ThokimanHandGrayLeftContent = styled(ThokimanHandGray)`
  ${getThokimanHandGrayLeftContent}
`;
ThokimanHandGrayLeftContent.displayName = 'ThokimanHandGrayLeftContent';
//-------------------------------------------------------------------------------------------------------------
// left leg animation
//-------------------------------------------------------------------------------------------------------------
const ThokimanLegLeftContainerDropdownHide = css`
  ${ThokimanSkeletonGrayStyles}

  grid-area: bottomgrid-leftleg;
  top: 0vh;
  left: 1.8vw;
  transform: scaleX(-1);
  transition: all 1s ease-in-out;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: 9vw;
  }
`;

const ThokimanLegLeftContainerDropdownShow = css`
  ${ThokimanSkeletonGrayStyles}

  grid-area: bottomgrid-leftleg;
  top: -1vh;
  left: 8.3vw;
  transition: all 0.5s ease-in-out;
  transform: rotate(-135deg) scaleY(-1);

  @media only screen and (max-width: ${maxWidthTablet}px) {
    left: 6vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    transform: rotate(0deg) scaleX(-1);
    left: 29vw;
  }
  @media only screen and (max-width: 770px) {
    top: 2vh;
    left: 33vw;
  }
  @media only screen and (max-width: 550px) {
    top: 0vh;
    left: 33vw;
  }
  @media only screen and (max-width: 450px) {
    top: 1vh;
    left: 25vw;
  }
  @media only screen and (max-width: 400px) {
    left: 31vw;
  }
  @media only screen and (max-width: 375px) {
    top: 1vh;
    left: 26vw;
  }
  @media only screen and (max-width: 350px) {
  }
  @media only screen and (max-width: 300px) {
    top: -4vh;
    left: 27vw;
  }
`;

const getThokimanLegLeftContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanLegLeftContainerDropdownHide;
  }
  return ThokimanLegLeftContainerDropdownShow;
};

export const ThokimanLegLeftContainer = styled.div`
  ${getThokimanLegLeftContainer}
`;
ThokimanLegLeftContainer.displayName = 'ThokimanLegLeftContainer';
//-------------------------------------------------------------------------------------------------------------
// left leg styles
//-------------------------------------------------------------------------------------------------------------
const getThokimanLegGrayLeftContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanPartGrayDropdownHideStyles;
  }
  return ThokimanPartGrayDropdownShowStyles;
};

export const ThokimanLegGrayLeftContent = styled(ThokimanLegGray)`
  ${getThokimanLegGrayLeftContent}
`;
ThokimanLegGrayLeftContent.displayName = 'ThokimanLegGrayLeftContent';

//-------------------------------------------------------------------------------------------------------------
