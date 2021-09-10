import styled, { css } from 'styled-components';

const backgroundSkillContainerColor = 'rgba(18, 129, 148, 0.8)';
const maxWidthSmartphone = 800;
const AboutContentSkillIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return AboutContentSkillIsNotActivated;
  return null;
};

export const SkillContainer = styled.div`
  background-color: ${backgroundSkillContainerColor};
  width: 64.5vw;
  margin-right: 2vw;
  padding: 40px 0;
  height: 98%;
  font-family: baskerville-old-face;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    margin: 0;
    ${getSideBarActive}
  }
`;

SkillContainer.displayName = 'SkillContainer';
