import styled, { css } from 'styled-components';

const backgroundColorRightServiceContainerEng = 'rgba(18, 129, 148, 0.75)';
const maxWidthSmartphone = 800;

const ServiceEngineerIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ServiceEngineerIsNotActivated;
  return null;
};

const getTopRightPageContainerEng = ({ $measurerightpagecontainereng }) => {
  return $measurerightpagecontainereng.top;
};
const getHeightRightPageContainerEng = ({ $measurerightpagecontainereng }) => {
  return $measurerightpagecontainereng.height;
};

export const RightServiceContainerEng = styled.div`
  background-color: ${backgroundColorRightServiceContainerEng};
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
    top: ${getTopRightPageContainerEng}vh;
    height: ${getHeightRightPageContainerEng}vh;
    ${getSideBarActive}
  }
`;

export const RightServiceContentEng = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto 0;
  padding: 20px;
`;

RightServiceContainerEng.displayName = 'RightServiceContainerEng';
RightServiceContentEng.displayName = 'RightServiceContentEng';
