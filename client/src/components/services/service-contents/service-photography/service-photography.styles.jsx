import styled, { css } from 'styled-components';

const backgroundColorRightServiceContainerPg = 'rgba(18, 129, 148, 0.75)';
const maxWidthSmartphone = 800;

const ServicePhotographyIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ServicePhotographyIsNotActivated;
  return null;
};

export const RightServiceContainerPg = styled.div`
  background-color: ${backgroundColorRightServiceContainerPg};
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
    width: 100%;
    right: 0;
    height: 50vh;
    ${getSideBarActive}
  }
`;

export const RightServiceContentPg = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto 0;
  padding: 20px;
`;

RightServiceContainerPg.displayName = 'RightServiceContainerPg';
RightServiceContentPg.displayName = 'RightServiceContentPg';
