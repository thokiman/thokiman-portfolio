import styled, { css } from 'styled-components';

const backgroundProjectContainerColor = 'rgba(18, 129, 148, 0.8)';
const maxWidthSmartphone = 800;
const AboutContentProjectIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return AboutContentProjectIsNotActivated;
  return null;
};
export const ProjectContainer = styled.div`
  background-color: ${backgroundProjectContainerColor};
  width: 64.5vw;
  margin-right: 2vw;
  padding: 40px 0;
  height: 95%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: baskerville-old-face;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    margin: 0;
    ${getSideBarActive}
  }
`;

ProjectContainer.displayName = 'ProjectContainer';
