import styled, { css } from "styled-components";
import HomepageProfile from "../../../../assets/profile/profile.png";


const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};
export const HomepageProfileImageContainer = styled.div`
  height: 100%;
  width: 51.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #080808;
  @media only screen and (max-width: 800px) {
    ${ getSideBarActive }
    width: 100%;
    background: #27292e;
  }
`;

export const HomepageBackgroundProfileImage = styled.div`
  width: 900px;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
    width: 74vw;
    height: 40vh;

    ::before {
      border-radius: 200px;
      background: linear-gradient(
        to right,
        hsl(89, 85%, 66%),
        rgba(18, 129, 148, 0.66),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%),
        rgba(227, 225, 228, 0.66)
      );
      background-size: 200%;
      animation: linearGradientFlow 4s infinite ease-in-out alternate-reverse
        both;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70%;
      height: 63%;
      padding: 5px;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
    @keyframes linearGradientFlow {
      0% {
        background-position: 0%;
      }

      100% {
        background-position: 300%;
      }
    }
  }
`;

export const HomepageProfileImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${ HomepageProfile });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 800px) {
    border-radius: 200px 200px 200px 200px;
    background-position: 28% 28%;
    position: relative;
    z-index: 2;
  }
`;

HomepageProfileImageContainer.displayName = "HomepageProfileImageContainer";
HomepageBackgroundProfileImage.displayName = "HomepageBackgroundProfileImage";
HomepageProfileImage.displayName = "HomepageProfileImage";
