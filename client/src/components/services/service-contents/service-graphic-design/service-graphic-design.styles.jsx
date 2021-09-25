import styled, { css } from 'styled-components';

const backgroundColorRightServiceContainerGd = 'rgba(18, 129, 148, 0.75)';
const maxWidthSmartphone = 800;
const ServicePhotographerIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ServicePhotographerIsNotActivated;
  return null;
};

export const RightServiceContainerGd = styled.div`
  background-color: ${backgroundColorRightServiceContainerGd};
  width: 66.3vw;
  height: 68vh;
  padding: 10px 20px;
  position: relative;
  right: 4vw;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    overflow-y: hidden;
    width: 100%;
    right: 0;
    height: 175vh;
    ${getSideBarActive}

    @media only screen and (max-width: 550px) {
      height: 160vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 470px) and (max-height: 823px) {
      height: 110vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 470px) and (max-height: 812px) {
      height: 110vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 470px) and (max-height: 736px) {
      height: 125vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 470px) and (max-height: 667px) {
      height: 135vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 350px) and (max-height: 568px) {
      height: 145vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 300px) {
      height: 135vh;
      ${getSideBarActive}
    }
  }
`;

export const RightServiceContentGd = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto 0;
  padding: 20px;
`;

RightServiceContainerGd.displayName = 'RightServiceContainerGd';
RightServiceContentGd.displayName = 'RightServiceContentGd';
