import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as ThokimanBodyGray } from '../../../../assets/collections-icon/thokiman-icon/page/thokiman_body_gray.svg';
import { ReactComponent as ThokimanHandGray } from '../../../../assets/collections-icon/thokiman-icon/page/thokiman_hand_gray.svg';
import { ReactComponent as ThokimanLegGray } from '../../../../assets/collections-icon/thokiman-icon/page/thokiman_leg_gray.svg';
import { ReactComponent as ThokimanSkeletonGray } from '../../../../assets/collections-icon/thokiman-icon/page/thokiman_skeleton_gray.svg';
const maxWidthTablet = 1024;
const backgroundRightPageContainerColor = 'rgba(18, 129, 148, 0.85)';
const maxWidthSmartphone = 800;
const SideBarActive = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return SideBarActive;
  return null;
};
export const RightPageContainer = styled.div`
  background-color: ${backgroundRightPageContainerColor};
  width: 64.5vw;
  margin-right: 2vw;
  padding: 40px 0;
  height: 98%;
  @media only screen and (max-width: ${maxWidthTablet}px) {
    width: 65%;
    height: 44vh;
    margin: 0;

    ${getSideBarActive}
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    height: 80vh;

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

const thokimanSkeletonShow = keyframes`
           0% {
                transform: rotate(0deg);
                transform: rotateX(0);
            }

            100% {

                transform: rotate(720deg);
                transform: rotateX(-720deg);
            }
 `;
const thokimanSkeletonGrayLeftRight = keyframes`
            from {
                opacity: 1;
            }

            to {
                opacity: 0;
            }`;
const thokimanSkeletonContent = keyframes`
    to {
        stroke-dashoffset: 0%;
    }
`;

const thokimanBodyGrayShow = keyframes`
     0% {

                transform: rotate(0deg);
                transform: rotateX(0);
            }

            100% {

                transform: rotate(-720deg);
                transform: rotateX(-720deg);

            }
`;

const thokimanLegShow = keyframes`
    0% {

                transform: rotate(0deg);
                transform: rotateX(0);
                  
            }

            100% {

                transform: rotate(720deg);
                transform: rotateX(-720deg);
            }

`;

//skeleton
const ThokimanSkeletonContentStyles = css`
  width: 105px;
  height: 100%;
`;

const ThokimanSkeletonContentHide = css`
  ${ThokimanSkeletonContentStyles}
  path.thokiman-skeleton-gray0 {
    stroke-dasharray: 200 40;
    stroke-dashoffset: 40%;
    stroke-miterlimit: 5;
    animation: ${thokimanSkeletonContent} 2s ease-in-out infinite
      alternate-reverse both;
  }
`;
//left and right skeleton
const ThokimanSkeletonContentLeftRightShow = css`
  ${ThokimanSkeletonContentStyles}
  animation: ${thokimanSkeletonShow} 0.4s ease-in-out;
`;

const getThokimanSkeletonLeftRightContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanSkeletonContentHide;
  }
  return ThokimanSkeletonContentLeftRightShow;
};

export const ThokimanSkeletonLeftRightContent = styled(ThokimanSkeletonGray)`
  ${getThokimanSkeletonLeftRightContent}
`;
ThokimanSkeletonLeftRightContent.displayName =
  'ThokimanSkeletonLeftRightContent';

//middle skeleton
const ThokimanSkeletonMiddleContentShow = css`
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
    return ThokimanSkeletonContentHide;
  }
  return ThokimanSkeletonMiddleContentShow;
};

export const ThokimanSkeletonMiddleContent = styled(ThokimanSkeletonGray)`
  ${getThokimanSkeletonMiddleContent}
`;
ThokimanSkeletonMiddleContent.displayName = 'ThokimanSkeletonMiddleContent';

//left skeleton container

const ThokimanSkeletonGrayStyles = css`
  position: relative;
  margin: auto;
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ThokimanSkeletonGrayLeftHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: topgrid-skeletonleft;
  left: 35px;
  transition: all 0.5s ease-in-out;
`;

const ThokimanSkeletonGrayLeftShow = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: topgrid-skeletonleft;
  top: 78px;
  left: 100px;
  opacity: 0;
  animation: ${thokimanSkeletonGrayLeftRight} 0.4s ease-in-out;
`;

const getThokimanSkeletonGrayLeft = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanSkeletonGrayLeftHide;
  }
  return ThokimanSkeletonGrayLeftShow;
};

export const ThokimanSkeletonGrayLeft = styled.div`
  ${getThokimanSkeletonGrayLeft}
`;
ThokimanSkeletonGrayLeft.displayName = 'ThokimanSkeletonGrayLeft';

//middle skeleton container
const ThokimanSkeletonGrayMiddleHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: topgrid-skeletonmiddle;
  transition: all 0.5s ease-in-out;
`;

const ThokimanSkeletonGrayMiddleShow = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: topgrid-skeletonmiddle;
  animation: ${thokimanSkeletonShow} 2s ease-in-out;
  transition: all 2s ease-in-out;
`;

const getThokimanSkeletonGrayMiddle = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanSkeletonGrayMiddleHide;
  }
  return ThokimanSkeletonGrayMiddleShow;
};

export const ThokimanSkeletonGrayMiddle = styled.div`
  ${getThokimanSkeletonGrayMiddle}
`;
ThokimanSkeletonGrayMiddle.displayName = 'ThokimanSkeletonGrayMiddle';

//right skeleton container
const ThokimanSkeletonGrayRightHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: topgrid-skeletonright;
  right: 35px;
  transition: all 0.5s ease-in-out;
`;

const ThokimanSkeletonGrayRightShow = css`
  ${ThokimanSkeletonGrayStyles}
  top: 78px;
  right: 100px;
  grid-area: topgrid-skeletonright;
  opacity: 0;
  animation: ${thokimanSkeletonGrayLeftRight} 0.4s ease-in-out;
`;

const getThokimanSkeletonGrayRight = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanSkeletonGrayRightHide;
  }
  return ThokimanSkeletonGrayRightShow;
};

export const ThokimanSkeletonGrayRight = styled.div`
  ${getThokimanSkeletonGrayRight}
`;
ThokimanSkeletonGrayRight.displayName = 'ThokimanSkeletonGrayRight';

//body

const ThokimanBodyGrayMiddleContentHide = css`
  width: 100%;
  height: 100%;
`;
const ThokimanBodyGrayMiddleContentShow = css`
  width: 100%;
  height: 60%;
`;

const ThokimanBodyMiddleContainerHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: maingrid-body;
  transition: all 0.5s ease-in-out;
`;

const ThokimanBodyMiddleContainerShow = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: maingrid-body;

  animation: ${thokimanBodyGrayShow} 2s ease-in-out;
  transition: all 2s ease-in-out;
`;

const getThokimanBodyGrayContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanBodyGrayMiddleContentHide;
  }
  return ThokimanBodyGrayMiddleContentShow;
};

export const ThokimanBodyGrayContent = styled(ThokimanBodyGray)`
  ${getThokimanBodyGrayContent}
`;
ThokimanBodyGrayContent.displayName = 'ThokimanBodyGrayContent';

const getThokimanBodyContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanBodyMiddleContainerHide;
  }
  return ThokimanBodyMiddleContainerShow;
};

export const ThokimanBodyContainer = styled.div`
  ${getThokimanBodyContainer}
`;
ThokimanBodyContainer.displayName = 'ThokimanBodyContainer';

//part
const ThokimanPartGrayHideStyles = css`
  width: 100%;
  height: 100%;
`;

const ThokimanPartGrayShowStyles = css`
  width: 100%;
  height: 100%;
`;

//hand

//right hand
const getThokimanHandGrayRightContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanPartGrayHideStyles;
  }
  return ThokimanPartGrayShowStyles;
};

export const ThokimanHandGrayRightContent = styled(ThokimanHandGray)`
  ${getThokimanHandGrayRightContent}
`;
ThokimanHandGrayRightContent.displayName = 'ThokimanHandGrayRightContent';

const ThokimanHandRightContainerHide = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: middlegrid-righthand;
  right: 35px;
  transition: all 0.5s ease-in-out;
`;
const ThokimanHandRightContainerShow = css`
  ${ThokimanSkeletonGrayStyles}
  grid-area: middlegrid-righthand;
  right: -15px;
  top: -80px;
  transform: rotate(-90deg);
  animation: ${thokimanSkeletonShow} 2s ease-in-out;
  transition: all 4s ease-in-out;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: -28px;
    right: 20px;
  }
`;
const getThokimanHandRightContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanHandRightContainerHide;
  }
  return ThokimanHandRightContainerShow;
};

export const ThokimanHandRightContainer = styled.div`
  ${getThokimanHandRightContainer}
`;

ThokimanHandRightContainer.displayName = 'ThokimanHandRightContainer';

//left hand
const getThokimanHandGrayLeftContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanPartGrayHideStyles;
  }
  return ThokimanPartGrayShowStyles;
};

export const ThokimanHandGrayLeftContent = styled(ThokimanHandGray)`
  ${getThokimanHandGrayLeftContent}
`;
ThokimanHandGrayLeftContent.displayName = 'ThokimanHandGrayLeftContent';

const ThokimanHandLeftContainerHide = css`
  ${ThokimanSkeletonGrayStyles}

  left: 35px;
  grid-area: middlegrid-lefthand;
  transform: scaleX(-1);
  transition: all 0.5s ease-in-out;
`;
const ThokimanHandLeftContainerShow = css`
  ${ThokimanSkeletonGrayStyles}

  grid-area: middlegrid-lefthand;
  left: -15px;
  top: -80px;
  transform: rotate(-90deg) scaleY(-1);
  transition: all 4s ease-in-out;
  animation: ${thokimanSkeletonShow} 2s ease-in-out;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: -28px;
    left: 20px;
  }
`;

const getThokimanHandLeftContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanHandLeftContainerHide;
  }
  return ThokimanHandLeftContainerShow;
};

export const ThokimanHandLeftContainer = styled.div`
  ${getThokimanHandLeftContainer}
`;
ThokimanHandLeftContainer.displayName = 'ThokimanHandLeftContainer';

//leg

//right leg
const getThokimanLegGrayRightContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanPartGrayHideStyles;
  }
  return ThokimanPartGrayShowStyles;
};

export const ThokimanLegGrayRightContent = styled(ThokimanLegGray)`
  ${getThokimanLegGrayRightContent}
`;
ThokimanLegGrayRightContent.displayName = 'ThokimanLegGrayRightContent';

const ThokimanLegRightContainerHide = css`
  ${ThokimanSkeletonGrayStyles}

  right: 35px;
  grid-area: bottomgrid-rightleg;
  transition: all 1s ease-in-out;
`;

const ThokimanLegRightContainerShow = css`
  ${ThokimanSkeletonGrayStyles}

  transform: rotate(-45deg);
  top: -30px;
  right: 5px;
  grid-area: bottomgrid-rightleg;
  transition: all 4s ease-in-out;
  animation: ${thokimanLegShow} 2s ease-in-out;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    right: 50px;
  }
`;

const getThokimanLegRightContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanLegRightContainerHide;
  }
  return ThokimanLegRightContainerShow;
};

export const ThokimanLegRightContainer = styled.div`
  ${getThokimanLegRightContainer}
`;
ThokimanLegRightContainer.displayName = 'ThokimanLegRightContainer';

//left leg

const getThokimanLegGrayLeftContent = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanPartGrayHideStyles;
  }
  return ThokimanPartGrayShowStyles;
};

export const ThokimanLegGrayLeftContent = styled(ThokimanLegGray)`
  ${getThokimanLegGrayLeftContent}
`;
ThokimanLegGrayLeftContent.displayName = 'ThokimanLegGrayLeftContent';

const ThokimanLegLeftContainerHide = css`
  ${ThokimanSkeletonGrayStyles}

  grid-area: bottomgrid-leftleg;
  left: 35px;
  transform: scaleX(-1);
  transition: all 1s ease-in-out;
`;

const ThokimanLegLeftContainerShow = css`
  ${ThokimanSkeletonGrayStyles}

  grid-area: bottomgrid-leftleg;
  left: 5px;
  top: -30px;
  transition: all 4s ease-in-out;
  transform: rotate(-135deg) scaleY(-1);
  animation: ${thokimanLegShow} 2s ease-in-out;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: 55px;
  }
`;

const getThokimanLegLeftContainer = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return ThokimanLegLeftContainerHide;
  }
  return ThokimanLegLeftContainerShow;
};

export const ThokimanLegLeftContainer = styled.div`
  ${getThokimanLegLeftContainer}
`;
ThokimanLegLeftContainer.displayName = 'ThokimanLegLeftContainer';
