import styled from 'styled-components';

const maxWidthSmartphone = 800;
export const AboutTechnologySkillContainer = styled.div`
  width: 95%;
  height: 88%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0 auto;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    overflow-y: hidden;
  }
`;
export const AboutTechnologyContentContainer = styled.div`
  margin: 20px auto;
  padding: 20px 0px;
`;

AboutTechnologySkillContainer.displayName = 'AboutTechnologySkillContainer';
AboutTechnologyContentContainer.displayName = 'AboutTechnologyContentContainer';
