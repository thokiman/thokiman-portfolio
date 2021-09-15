import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as ThokimanHeadColor } from '../../../../assets/collections-icon/thokiman-icon/logo/color/thokiman_head_color.svg';
const maxWidthTablet = 1024;
const maxWidthSmartphone = 800;
const greenBlueColor = '#128194';
const lightBlueColor = '#74c6d4';
const whiteSmokeColor = '#e3e1e4';
const grayColor = '#3f4249';
const aboutDropdownContentColor = 'rgba(116, 198, 212, 0.5)';

export const AboutDropdownContainer = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: ${maxWidthTablet}px) {
    width: 100vw;
    height: 55vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: 50vh;
  }
`;
AboutDropdownContainer.displayName = 'AboutDropdownContainer';
const thokimanHeadColorShow = keyframes`
                 0% {
                     transform: translateY(-${maxWidthSmartphone}px) rotate(-540deg);
                     opacity: 0;
                 }

                 100% {
                     transform: translateY(0) rotate(0deg);
                     opacity: 1;
                 }
`;
const thokimanHeadColorShowMobile = keyframes`
                 0% {
                     transform: translateX(${maxWidthSmartphone}px) rotate(-540deg);
                     opacity: 0;
                 }

                 100% {
                     transform: translateX(0) rotate(0deg);
                     opacity: 1;
                 }
`;

const thokimanHeadColorHide = keyframes`
    0% {
      transform: translateY(${maxWidthSmartphone}px) rotate(540deg);
      opacity: 0;
    }

    100% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }

`;
const thokimanHeadColorHideMobile = keyframes`
    0% {
      transform: translateX(-${maxWidthSmartphone}px) rotate(540deg);
      opacity: 0;
    }

    100% {
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }

`;

export const AboutThokimanHeadColorContainer = styled.div`
  display: block;
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
AboutThokimanHeadColorContainer.displayName = 'AboutThokimanHeadColorContainer';
export const AboutThokimanHeadColorShow = styled(ThokimanHeadColor)`
  width: 40%;
  height: 95%;
  position: relative;
  top: -10px;
  animation: ${thokimanHeadColorShow} 0.6s ease-out both;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    animation: ${thokimanHeadColorShowMobile} 0.6s ease-out both;
  }
`;
AboutThokimanHeadColorShow.displayName = 'AboutThokimanHeadColorShow';
export const AboutThokimanHeadColorHide = styled(ThokimanHeadColor)`
  width: 40%;
  height: 95%;
  position: relative;
  top: 20px;
  animation: ${thokimanHeadColorHide} 0.6s ease-out both;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    animation: ${thokimanHeadColorHideMobile} 0.6s ease-out both;
  }
`;
AboutThokimanHeadColorHide.displayName = 'AboutThokimanHeadColorHide';
const aboutDropdownContent = keyframes`
                 0% {
                     background-color: rgba($color: ${lightBlueColor}, $alpha: .3);
                 }

                 100% {
                     background-color: rgba($color: ${greenBlueColor}, $alpha: .7);
                 }

`;

export const AboutDropdownContent = styled.div`
  background-color: ${aboutDropdownContentColor};
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: 50px;
  }
  &:hover {
    background-color: rgba($color: ${greenBlueColor}, $alpha: 0.7);
    animation: ${aboutDropdownContent} 0.3s ease-in-out;
  }
`;
AboutDropdownContent.displayName = 'AboutDropdownContent';
//dropdown link
const AboutDropdownLinkContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: 10px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: 145%;
  line-height: 1.6em;
  cursor: pointer;
  ${AboutDropdownContent}:hover & {
    color: ${whiteSmokeColor};
  }
`;
const AboutDropdownLinkContainerActive = css`
  ${AboutDropdownLinkContainerStyles}
  color: ${grayColor};
`;

const AboutDropdownLinkContainerHide = css`
  ${AboutDropdownLinkContainerStyles}

  color: #128194;
`;

const getAboutDropdownLinkContainer = ({ $matchpath }) => {
  if ($matchpath) {
    return AboutDropdownLinkContainerActive;
  }
  return AboutDropdownLinkContainerHide;
};

export const AboutDropdownLinkContainer = styled(Link)`
  ${getAboutDropdownLinkContainer}
`;
AboutDropdownLinkContainer.displayName = 'AboutDropdownLinkContainer';
export const AboutDropdownMenuIcon = styled.div`
  display: inline-block;
  position: relative;
  right: 20px;
  cursor: pointer;
`;
AboutDropdownMenuIcon.displayName = 'AboutDropdownMenuIcon';
//bar
const AboutBarHideStyles = css`
  width: 30px;
  height: 3px;
  background-color: ${greenBlueColor};
  margin: 6px 0;
  transition: 0.6s;

  ${AboutDropdownContent}:hover & {
    background-color: ${whiteSmokeColor};
  }
`;

const AboutBarOneHide = css`
  ${AboutBarHideStyles}
`;

const AboutBarTwoHide = css`
  ${AboutBarHideStyles}
`;

const AboutBarThreeHide = css`
  ${AboutBarHideStyles}
`;

//bar change
const aboutBarOneChange = keyframes`
    from {
      transform: rotate(0deg) translate(0px, 0px);
    }

    to {
      transform: rotate(-45deg) translate(-3px, -1px);
    }
`;

const aboutBarThreeChange = keyframes`
    from {
      transform: rotate(0deg) translate(0px, 0px);
    }

    to {
      transform: rotate(45deg) translate(-2px, -1px);
    }
`;
const AboutBarChangeStyles = css`
  width: 30px;
  height: 3px;
  background-color: ${greenBlueColor};
  border-radius: 20px 20px 20px 20px;
  ${AboutDropdownContent}:hover & {
    background-color: ${whiteSmokeColor};
  }
`;

const AboutBarOneChange = css`
  ${AboutBarChangeStyles}

  transform: rotate(-45deg) translate(-3px, -1px);
  animation: ${aboutBarOneChange} 0.4s ease-in-out;
`;

const AboutBarTwoChange = css`
  opacity: 0;
`;

const AboutBarThreeChange = css`
  ${AboutBarChangeStyles}

  transform: rotate(45deg) translate(-2px, -1px);
  animation: ${aboutBarThreeChange} 0.4s ease-in-out;
`;

const getAboutBarOne = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return AboutBarOneHide;
  }
  return AboutBarOneChange;
};
const getAboutBarTwo = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return AboutBarTwoHide;
  }
  return AboutBarTwoChange;
};
const getAboutBarThree = ({ $isdropdownhidden }) => {
  if ($isdropdownhidden) {
    return AboutBarThreeHide;
  }
  return AboutBarThreeChange;
};

export const AboutBarOne = styled.div`
  ${getAboutBarOne}
`;
AboutBarOne.displayName = 'AboutBarOne';
export const AboutBarTwo = styled.div`
  ${getAboutBarTwo}
`;
AboutBarTwo.displayName = 'AboutBarTwo';
export const AboutBarThree = styled.div`
  ${getAboutBarThree}
`;
AboutBarThree.displayName = 'AboutBarThree';
export const AboutBreakLine = styled.div`
  height: 2px;
`;
AboutBreakLine.displayName = 'AboutBreakLine';
