import styled, { css } from "styled-components";

export const AboutExperienceProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;

export const AboutExperienceProjectTitle = styled.div`
  font-size: 400%;
  padding: 10px;
  color: #e3e1e4;
  letter-spacing: 0.04em;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const AboutExperienceProjectAtttributes = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  gap: 2px 2px;
  grid-template-areas:
    "name-experience-project name-experience-project name-experience-project name-experience-project"
    "description-experience-project description-experience-project description-experience-project description-experience-project"
    "description-experience-project description-experience-project description-experience-project description-experience-project";
`;
const AboutExperienceProjectStyles = css`
  display: flex;
  align-items: center;
  color: #e3e1e4;
  text-align: left;
`;
export const AboutNameExperienceProject = styled.div`
  ${AboutExperienceProjectStyles}
  grid-area: name-experience-project;
  width: 99%;
  font-size: 200%;
  padding: 10px;
  letter-spacing: 0.09em;
`;

export const AboutDescriptionExperienceProject = styled.div`
  ${AboutExperienceProjectStyles}
  border-bottom: #74c6d4 solid 1px;
  width: 100%;
  grid-area: description-experience-project;
  font-size: 130%;
  padding: 10px 0;
  line-height: 1.1em;
  letter-spacing: 0.05em;
  margin: 10px auto;
`;
AboutExperienceProjectContainer.displayName = "AboutExperienceProjectContainer";
AboutExperienceProjectTitle.displayName = "AboutExperienceProjectTitle";
AboutExperienceProjectAtttributes.displayName =
  "AboutExperienceProjectAtttributes";
AboutNameExperienceProject.displayName = "AboutNameExperienceProject";
AboutDescriptionExperienceProject.displayName =
  "AboutDescriptionExperienceProject";
