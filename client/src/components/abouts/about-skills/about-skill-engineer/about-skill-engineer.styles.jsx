import styled from 'styled-components';

const maxWidthSmartphone = 800;

export const AboutEngineerSkillContainer = styled.div`
  width: 95%;
  height: 88%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0 auto;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 98%;

    overflow-y: hidden;
  }
`;
AboutEngineerSkillContainer.displayName = 'AboutEngineerSkillContainer';
