import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { ReactComponent as CreamPrickInklaim } from "../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_cream.svg";
import { ReactComponent as WhiteOutlineThokiman } from "../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_cream.svg";
const FooterSideBarActive = css`
  @media only screen and (max-width: 800px) {
    position: relative;
    height: 16vh;
    width: 100vw;
    margin-bottom: 20px;
    left: 0;
    transition: left 0.5s ease;
  }
`;
const getFooterSideBarActive = (props) => {
  if (props.$issidebarhidden) return null;
  return FooterSideBarActive;
};
export const FooterContainer = styled.div`
  background-color: #3f4249;
  height: 14vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
    position: relative;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: left 0.5s ease;
    width: 66vw;
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
`;

const piCreamAnimate = keyframes`
                from {
                    stroke: #bccfd5;
                    opacity: 0.6;
                }

                to {
                    stroke: #e3e1e4;
                    opacity: 1;
                }    

`;

export const ProfileFooterIcon = styled.div`
  width: 200px;
  height: 8vh;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 150px;
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

const FooterIcon = css`
  width: 100%;
  height: 100%;
  margin: 2px;
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
const getProfileFooterTextSideBarActive = (props) => {
  if (props.$issidebarhidden) return ProfileFooterTextSideBarActive;
  return null;
};
export const ProfileFooterText = styled.div`
  width: 100%;
  font-family: futura-medium;
  font-kerning: auto;
  letter-spacing: 0.03em;
  text-align: end;
  color: #e3e1e4;

  @media only screen and (max-width: 800px) {
    font-size: 13px;
    ${getProfileFooterTextSideBarActive}
  }
`;
export const SocialFooterContainer = styled.div`
  width: 170px;
  height: 11vh;
  padding: 0 5px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 5px 5px;
  align-items: center;
  justify-items: center;
  border-left: #e3e1e4 solid 1px;
`;

const socialItem = keyframes`
                    0%,
                    100% {
                        transform: rotate(0deg);
                        transform-origin: 50% 0;
                        background-color: #128194;
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
                        background-color: #128194;
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
                        background-color: #128194;
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
  height: 42px;
  width: 42px;
  object-fit: cover;
  background-image: url(${({ backgroundimage }) => backgroundimage.iconPath});
  @media only screen and (max-width: 800px) {
    width: 35px;
    height: 35px;
  }
  &:hover {
    animation: ${socialItem} 2s ease-in-out infinite;
  }
`;

FooterContainer.displayName = "FooterContainer";
ProfileFooterContainer.displayName = "ProfileFooterContainer";
ProfileFooterIcon.displayName = "ProfileFooterIcon";
FooterCreamPrickInklaim.displayName = "FooterCreamPrickInklaim";
FooterWhiteOutlineThokiman.displayName = "FooterWhiteOutlineThokiman";
ProfileFooterText.displayName = "ProfileFooterText";
SocialFooterContainer.displayName = "SocialFooterContainer";
SocialItem.displayName = "SocialItem";
