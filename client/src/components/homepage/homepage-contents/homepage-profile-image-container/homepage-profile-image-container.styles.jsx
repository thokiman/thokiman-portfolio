import styled, { css } from "styled-components";
import HomepageProfile from "../../../../assets/profile/profile.png";

const backgroundProfileImage = "#000000"

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
  background-color: ${ backgroundProfileImage };
  @media only screen and (max-width: 800px) {
    ${ getSideBarActive }
    width: 100%;
    background-color: ${ backgroundProfileImage };
  }
`;

export const HomepageBackgroundProfileImage = styled.div`
  width: 900px;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const HomepageProfileImage = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 20px 15px rgba(0,0,0,1) inset;
  background-image: url(${ HomepageProfile });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 800px) {

    background-position: 100% 100%;

  }
`;

HomepageProfileImageContainer.displayName = "HomepageProfileImageContainer";
HomepageBackgroundProfileImage.displayName = "HomepageBackgroundProfileImage";
HomepageProfileImage.displayName = "HomepageProfileImage";
