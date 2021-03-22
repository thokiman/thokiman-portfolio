import styled from "styled-components";

export const AboutTechnologySkillContainer = styled.div`
  width: 95%;
  height: 88%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0 auto;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const AboutTechnologyContentContainer = styled.div`
  margin: 20px auto;
  border-top: #74c6d4 solid 2px;
  border-bottom: #74c6d4 solid 2px;
`;

AboutTechnologySkillContainer.displayName = "AboutTechnologySkillContainer";
AboutTechnologyContentContainer.displayName = "AboutTechnologyContentContainer";
