import styled, { css } from "styled-components";

import HomepageProfile from "../../assets/profile/profile.png";

const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};
export const HomepageProfileImageContainer = styled.div`
  height: 100%;
  max-width: 51.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #080808;
  @media only screen and (max-width: 800px) {
    ${getSideBarActive}
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
  background-image: url(${HomepageProfile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

HomepageProfileImageContainer.displayName = "HomepageProfileImageContainer";
HomepageBackgroundProfileImage.displayName = "HomepageBackgroundProfileImage";
HomepageProfileImage.displayName = "HomepageProfileImage";
