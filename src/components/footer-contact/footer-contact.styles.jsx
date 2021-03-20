import styled, { keyframes, css } from "styled-components";

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
export const FooterContainerContact = styled.div`
  background-color: #3f4249;
  height: 16vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    position: relative;
    top: 0;
    left: 140px;
    right: 0;
    bottom: 0;
    transition: left 0.5s ease;
    width: 66vw;
  }
`;

export const ProfileFooterContainerContact = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ProfileFooterIconContact = styled.div`
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

const FooterIconContact = css`
  width: 100%;
  height: 100%;
  margin: 2px;
`;

export const FooterCreamPrickInklaim = styled(CreamPrickInklaim)`
  ${FooterIconContact}
`;
export const FooterWhiteOutlineThokiman = styled(WhiteOutlineThokiman)`
  ${FooterIconContact}
`;

export const ProfileFooterTextContact = styled.div`
  width: 100%;
  font-family: futura-medium;
  font-kerning: auto;
  letter-spacing: 0.03em;
  text-align: center;
  color: #e3e1e4;
  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

FooterContainerContact.displayName = "FooterContainerContact";
ProfileFooterContainerContact.displayName = "ProfileFooterContainerContact";
ProfileFooterIconContact.displayName = "ProfileFooterIconContact";
FooterCreamPrickInklaim.displayName = "FooterCreamPrickInklaim";
FooterWhiteOutlineThokiman.displayName = "FooterWhiteOutlineThokiman";
ProfileFooterTextContact.displayName = "ProfileFooterTextContact";
