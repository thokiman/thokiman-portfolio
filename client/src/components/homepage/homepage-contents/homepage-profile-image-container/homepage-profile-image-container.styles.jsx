import styled, { css } from 'styled-components';
import HomepageProfile from '../../../../assets/profile/profile.png';

const blackColor = '#000000';

const maxWidthDesktop = 1366;
const maxWidthTablet = 1024;
const maxWidthSmartphone = 800;

const HomepageProfileImageIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return HomepageProfileImageIsNotActivated;
  return null;
};
export const HomepageProfileImageContainer = styled.div`
  height: 100%;
  width: 51.3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${blackColor};

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    ${getSideBarActive}
    width: 100%;
    height: 250vh;
    background-color: ${blackColor};
  }
`;

export const HomepageBackgroundProfileImage = styled.div`
  width: 50vw;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    display: block;

    width: 50vw;
    height: 120vh;
  }

  @media only screen and (max-width: ${maxWidthTablet}px) {
    height: 50vh;
  }

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100vw;
    height: 78vh;
  }
`;

export const HomepageProfileImage = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${HomepageProfile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    background-position: 100% 50%;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    background-position: 100% 85%;
  }
`;

HomepageProfileImageContainer.displayName = 'HomepageProfileImageContainer';
HomepageBackgroundProfileImage.displayName = 'HomepageBackgroundProfileImage';
HomepageProfileImage.displayName = 'HomepageProfileImage';
