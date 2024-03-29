import styled, { css } from 'styled-components';

const whiteSmokeColor = '#e3e1e4';
const lightBlueColor = '#74c6d4';
const maxWidthSmartphone = 800;

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
  color: ${whiteSmokeColor};
  letter-spacing: 0.04em;
  text-align: left;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 18vw;
  }
`;

export const AboutExperienceProjectAtttributes = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  gap: 2px 2px;
  grid-template-areas:
    'name-experience-project name-experience-project name-experience-project name-experience-project'
    'description-experience-project description-experience-project description-experience-project description-experience-project'
    'description-experience-project description-experience-project description-experience-project description-experience-project';
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
`;
const AboutExperienceProjectStyles = css`
  display: flex;
  align-items: center;
  color: ${whiteSmokeColor};
  text-align: left;
  width: 100%;
  height: fit-content;
  display: block;
`;
export const AboutNameExperienceProject = styled.div`
  ${AboutExperienceProjectStyles}
  grid-area: name-experience-project;
  width: 99%;
  font-size: 200%;
  padding: 10px;
  letter-spacing: 0.09em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
    margin: 2vw 0;
    display: block;
  }
`;

export const AboutDescriptionExperienceProject = styled.div`
  ${AboutExperienceProjectStyles}
  border-bottom: ${lightBlueColor} solid 1px;
  width: 100%;
  grid-area: description-experience-project;
  font-size: 130%;
  padding: 10px 0;
  line-height: 1.1em;
  letter-spacing: 0.05em;
  margin: 10px auto;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 4vw;
    margin: 2vw 0;
    display: block;
  }
`;
AboutExperienceProjectContainer.displayName = 'AboutExperienceProjectContainer';
AboutExperienceProjectTitle.displayName = 'AboutExperienceProjectTitle';
AboutExperienceProjectAtttributes.displayName =
  'AboutExperienceProjectAtttributes';
AboutNameExperienceProject.displayName = 'AboutNameExperienceProject';
AboutDescriptionExperienceProject.displayName =
  'AboutDescriptionExperienceProject';
