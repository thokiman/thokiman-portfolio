import styled, { css, keyframes } from 'styled-components';

const greenBlueColor = '#128194';
const maxWidthSmartphone = 800;
//bar
const SideBarHeaderIconIsActived = css`
  top: 50px;
  left: 50px;
`;
const getSideBarHeaderIconActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return SideBarHeaderIconIsActived;

  return null;
};

export const SideBarHeaderIcon = styled.div`
  display: none;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    display: block;
    position: absolute;
    z-index: 2;
    top: 5vh;
    left: 10vw;
    cursor: pointer;
    width: fit-content;
    height: fit-content;

    ${getSideBarHeaderIconActive}
  }
`;

const SideBarHideStyles = css`
  width: 9vw;
  height: 0.4vh;
  background-color: ${greenBlueColor};
  margin: 6px 0;
  transition: 0.6s;
  position: relative;
  top: 10px;
  left: -15px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 6vw;
  }
  @media only screen and (max-width: 550px) {
    width: 8vw;
    top: 0px;
    left: 0px;
  }
  @media only screen and (max-width: 400px) {
    width: 9vw;
  }
  @media only screen and (max-width: 350px) {
    width: 12vw;
  }
`;

const SideBarOneHide = css`
  ${SideBarHideStyles}
`;

const SideBarTwoHide = css`
  ${SideBarHideStyles}
`;

const SideBarThreeHide = css`
  ${SideBarHideStyles}
`;

//bar change
const sideBarOneChange = keyframes`
    from {
      transform: rotate(0deg) ;
    }

    to {
      transform: rotate(-45deg) ;
    }
`;

const sideBarThreeChange = keyframes`
    from {
      transform: rotate(0deg) ;
    }

    to {
      transform: rotate(45deg) ;
    }
`;
const SideBarChangeStyles = css`
  width: 9vw;
  height: 0.4vh;
  background-color: ${greenBlueColor};
  border-radius: 20px 20px 20px 20px;
`;

const getTopSideBarOne = ({ $measuresidebarone }) => {
  return $measuresidebarone.top;
};
const getLeftSideBarOne = ({ $measuresidebarone }) => {
  return $measuresidebarone.left;
};

const SideBarOneChange = css`
  ${SideBarChangeStyles}

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;

    top: ${getTopSideBarOne}vh;
    left: ${getLeftSideBarOne}vw;
    transform: rotate(-45deg);
    animation: ${sideBarOneChange} 0.4s ease-in-out;
  }
`;

const SideBarTwoChange = css`
  opacity: 0;
`;

const getTopSideBarThree = ({ $measuresidebarthree }) => {
  return $measuresidebarthree.top;
};
const getLeftSideBarThree = ({ $measuresidebarthree }) => {
  return $measuresidebarthree.left;
};

const SideBarThreeChange = css`
  ${SideBarChangeStyles}

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;

    top: ${getTopSideBarThree}vh;
    left: ${getLeftSideBarThree}vw;
    transform: rotate(45deg);
    animation: ${sideBarThreeChange} 0.4s ease-in-out;
  }
`;

const getSideBarOne = ({ $issidebaractive }) => {
  if ($issidebaractive) {
    return SideBarOneChange;
  }
  return SideBarOneHide;
};
const getSideBarTwo = ({ $issidebaractive }) => {
  if ($issidebaractive) {
    return SideBarTwoChange;
  }
  return SideBarTwoHide;
};
const getSideBarThree = ({ $issidebaractive }) => {
  if ($issidebaractive) {
    return SideBarThreeChange;
  }
  return SideBarThreeHide;
};

export const SideBarOne = styled.div`
  ${getSideBarOne}
`;
export const SideBarTwo = styled.div`
  ${getSideBarTwo}
`;
export const SideBarThree = styled.div`
  ${getSideBarThree}
`;
SideBarOne.displayName = 'SideBarOne';
SideBarTwo.displayName = 'SideBarTwo';
SideBarThree.displayName = 'SideBarThree';
SideBarHeaderIcon.displayName = 'SideBarHeaderIcon';
