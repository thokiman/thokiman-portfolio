import styled, { css } from 'styled-components';
const backgroundColorRightServiceContainerFS = 'rgba(18, 129, 148, 0.75)';
const maxWidthSmartphone = 800;
const ServiceDevIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ServiceDevIsNotActivated;
  return null;
};

export const RightServiceContainerFS = styled.div`
  background-color: ${backgroundColorRightServiceContainerFS};
  width: 66.3vw;
  height: 68vh;
  position: relative;
  right: 4vw;
  padding: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    overflow-y: hidden;
    width: 100%;
    right: 0;
    height: 309vh;
    ${getSideBarActive}
  }
  @media only screen and (max-width: 550px) {
    height: 285vh;
    ${getSideBarActive}
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    height: 180vh;
    ${getSideBarActive}
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    height: 175vh;
    ${getSideBarActive}
  }
  @media only screen and (max-width: 470px) and (max-height: 736px) {
    height: 230vh;
    ${getSideBarActive}
  }
  @media only screen and (max-width: 470px) and (max-height: 667px) {
  }
  @media only screen and (max-width: 300px) {
    height: 268vh;
    ${getSideBarActive}
  }
`;

export const RightServiceContentFS = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto 0;
  padding: 20px;
`;

RightServiceContainerFS.displayName = 'RightServiceContainerFS';
RightServiceContentFS.displayName = 'RightServiceContentFS';
