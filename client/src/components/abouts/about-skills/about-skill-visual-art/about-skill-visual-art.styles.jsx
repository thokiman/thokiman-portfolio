import styled from 'styled-components';

const maxWidthSmartphone = 800;

export const AboutVisualArtSkillContainer = styled.div`
  width: 100%;
  height: 88%;
  overflow-y: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    overflow-y: hidden;
  }
`;
export const AboutVisualArtContentContainer = styled.div`
  margin: 20px auto;
`;

AboutVisualArtSkillContainer.displayName = 'AboutVisualArtSkillContainer';
AboutVisualArtContentContainer.displayName = 'AboutVisualArtContentContainer';
