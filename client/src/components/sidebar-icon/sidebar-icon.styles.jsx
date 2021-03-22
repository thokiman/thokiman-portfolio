import styled, { css, keyframes } from "styled-components";

//bar

const SideBarHeaderIconActive = css`
  top: 50px;
  left: 50px;
`;
const getSideBarHeaderIconActive = (props) => {
  if (props.$issidebarhidden) return SideBarHeaderIconActive;
  return null;
};

export const SideBarHeaderIcon = styled.div`
  display: none;
  @media only screen and (max-width: 800px) {
    display: block;
    position: absolute;
    z-index: 1;
    top: 35px;
    left: 49px;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    ${getSideBarHeaderIconActive}
  }
`;

const SideBarHideStyles = css`
  width: 35px;
  height: 3px;
  background-color: #128194;
  margin: 6px 0;
  transition: 0.6s;
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
      transform: rotate(0deg) translate(0px, 0px);
    }

    to {
      transform: rotate(-45deg) translate(-3px, -1px);
    }
`;

const sideBarThreeChange = keyframes`
    from {
      transform: rotate(0deg) translate(0px, 0px);
    }

    to {
      transform: rotate(45deg) translate(-2px, -1px);
    }
`;
const SideBarChangeStyles = css`
  width: 30px;
  height: 3px;
  background-color: #128194;
  border-radius: 20px 20px 20px 20px;
`;

const SideBarOneChange = css`
  ${SideBarChangeStyles}
  transform: rotate(-45deg) translate(-3px, -1px);
  animation: ${sideBarOneChange} 0.4s ease-in-out;
`;

const SideBarTwoChange = css`
  opacity: 0;
`;

const SideBarThreeChange = css`
  ${SideBarChangeStyles}

  transform: rotate(45deg) translate(-2px, -1px);
  animation: ${sideBarThreeChange} 0.4s ease-in-out;
`;

const getSideBarOne = ({ $issidebarhidden }) => {
  if ($issidebarhidden) {
    return SideBarOneChange;
  }
  return SideBarOneHide;
};
const getSideBarTwo = ({ $issidebarhidden }) => {
  if ($issidebarhidden) {
    return SideBarTwoChange;
  }
  return SideBarTwoHide;
};
const getSideBarThree = ({ $issidebarhidden }) => {
  if ($issidebarhidden) {
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
SideBarOne.displayName = "SideBarOne";
SideBarTwo.displayName = "SideBarTwo";
SideBarThree.displayName = "SideBarThree";
SideBarHeaderIcon.displayName = "SideBarHeaderIcon";
