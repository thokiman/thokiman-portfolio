import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as CreamPrickInklaim } from '../../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_cream.svg';
import { ReactComponent as WhiteOutlineThokiman } from '../../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_cream.svg';

const maxWidthTablet = 1024;
const maxWidthSmartphone = 800;
const blackColor = '#000000';
const heavyLightBlueColor = '#bccfd5';
const whiteSmokeColor = '#e3e1e4';
const greenBlueColor = '#128194';

const FooterIsActivated = css`
  @media only screen and (max-width: ${maxWidthTablet}px) {
    position: relative;
    width: 100vw;
    left: 0vw;
    transition: left 0.5s ease;
    padding: 10px;
    margin: 9px 0;
    height: 18vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: -3vw;
  }
  @media only screen and (max-width: 700px) {
    left: 0vw;
  }
`;

const getFooterSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return null;
  return FooterIsActivated;
};
export const FooterContainer = styled.div`
  background-color: ${blackColor};

  width: 103vw;
  height: 14vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  top: 0;
  right: 3vw;
  bottom: 0;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    width: 64vw;
    left: 16vw;
    margin: 0.3vw;
    transition: left 0.5s ease;
  }
  @media only screen and (max-width: 550px) {
    left: 29vw;
  }
  @media only screen and (max-width: 500px) {
    left: 32vw;
  }
  @media only screen and (max-width: 400px) {
    left: 36vw;
  }
  @media only screen and (max-width: 350px) {
    left: 33vw;
  }
  @media only screen and (max-width: 300px) {
    left: 37vw;
  }
  ${getFooterSideBarActive}
`;

export const ProfileFooterContainer = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 60vw;

  @media only screen and (max-width: 340px) {
    display: none;
  }
`;

const piCreamAnimate = keyframes`
                from {
                    stroke: ${heavyLightBlueColor};
                    opacity: 0.6;
                }

                to {
                    stroke: ${whiteSmokeColor};
                    opacity: 1;
                }    

`;

const getWidthProfileFooterIcon = ({ $measureprofilefootericon }) => {
  return $measureprofilefootericon.width;
};

export const ProfileFooterIcon = styled.div`
  width: 200px;
  height: 8vh;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: ${getWidthProfileFooterIcon}vw;
    justify-content: flex-end;
  }

  .thoki-out-cream {
    animation: ${piCreamAnimate} 1s ease-in-out infinite;
  }

  .pi-cream {
    animation: ${piCreamAnimate} 1s ease-in-out infinite;
  }

  .pi-cream-one {
    animation: ${piCreamAnimate} 1s ease-in-out infinite;
  }
`;

const getWidthFooterGeneralIcon = ({ $measurefootergeneralicon }) => {
  return $measurefootergeneralicon.width;
};
const getHeightFooterGeneralIcon = ({ $measurefootergeneralicon }) => {
  return $measurefootergeneralicon.height;
};

export const FooterGeneralIcon = styled.div`
  width: ${getWidthFooterGeneralIcon}vw;
  height: ${getHeightFooterGeneralIcon}vh;
`;
const FooterIcon = css`
  width: 100%;
  height: 100%;
`;

export const FooterCreamPrickInklaim = styled(CreamPrickInklaim)`
  ${FooterIcon}
`;
export const FooterWhiteOutlineThokiman = styled(WhiteOutlineThokiman)`
  ${FooterIcon}
`;

const ProfileFooterTextSideBarActive = css`
  display: none;
`;
const getProfileFooterTextSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ProfileFooterTextSideBarActive;
  return null;
};
export const ProfileFooterText = styled.div`
  width: 100%;
  font-family: futura-medium;
  font-kerning: auto;
  letter-spacing: 0.03em;
  text-align: end;
  color: ${whiteSmokeColor};

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 3vw;
    ${getProfileFooterTextSideBarActive}
  }
`;
export const SocialFooterContainer = styled.div`
  width: 170px;
  height: 11vh;
  padding: 0 15px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 15px 15px;
  align-items: center;
  justify-items: center;
  border-left: ${whiteSmokeColor} solid 1px;
  @media only screen and (max-width: 350px) {
    grid-template-columns: repeat(3, 37px);
    grid-auto-rows: 23px;
    margin-bottom: 4vh;
    margin-top: 4vh;
  }
  @media only screen and (max-width: 300px) {
    grid-auto-rows: 28px;
  }
`;

const socialItem = keyframes`
                    0%,
                    100% {
                        transform: rotate(0deg);
                        transform-origin: 50% 0;
                        background-color: ${greenBlueColor};
                        border-radius: 5px 5px 5px;
                        opacity: 1;
                    }

                    10% {
                        transform: rotate(2deg);
                        border-radius: 5px 5px 5px;
                        opacity: 0.6;
                    }

                    20%,
                    40%,
                    60% {
                        transform: rotate(-4deg);
                        background-color: ${greenBlueColor};
                        border-radius: 5px 5px 5px;
                        opacity: 1;
                    }

                    30%,
                    50%,
                    70% {
                        transform: rotate(4deg);
                        border-radius: 5px 5px 5px;
                        opacity: 0.5;
                    }

                    80% {
                        transform: rotate(-2deg);
                        background-color: ${greenBlueColor};
                        border-radius: 5px 5px 5px;
                        opacity: 1;
                    }

                    90% {
                        transform: rotate(2deg);
                        border-radius: 5px 5px 5px;
                        opacity: 0.3;
                    }
`;

export const SocialItem = styled(Link)`
  background-repeat: no-repeat;
  height: 35px;
  width: 35px;
  object-fit: cover;

  background-image: url(${({ backgroundimage }) => backgroundimage.iconPath});
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 6vw;
    height: 4vh;
  }
  @media only screen and (max-width: 400px) {
    width: 7vw;
    height: 5vh;
  }
  @media only screen and (max-width: 400px) and (max-height: 667px) {
    width: 6vw;
    height: 4vh;
  }
  @media only screen and (max-width: 350px) {
    width: 7vw;
    height: 4vh;
  }
  &:hover {
    animation: ${socialItem} 2s ease-in-out infinite;
  }
`;

FooterContainer.displayName = 'FooterContainer';
ProfileFooterContainer.displayName = 'ProfileFooterContainer';
ProfileFooterIcon.displayName = 'ProfileFooterIcon';
FooterCreamPrickInklaim.displayName = 'FooterCreamPrickInklaim';
FooterWhiteOutlineThokiman.displayName = 'FooterWhiteOutlineThokiman';
ProfileFooterText.displayName = 'ProfileFooterText';
SocialFooterContainer.displayName = 'SocialFooterContainer';
SocialItem.displayName = 'SocialItem';
