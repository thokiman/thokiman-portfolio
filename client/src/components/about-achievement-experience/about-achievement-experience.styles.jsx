import styled, { css } from "styled-components";

export const AchievementExperienceProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;

AchievementExperienceProjectContainer.displayName =
  "AchievementExperienceProjectContainer";

export const AchievementExperienceProjectTitle = styled.div`
  font-size: 350%;
  padding: 10px;
  color: #e3e1e4;
  letter-spacing: 0.04em;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 800px) {
    font-size: 14vw;
  }
`;

AchievementExperienceProjectTitle.displayName =
  "AchievementExperienceProjectTitle";

export const AchievementExperienceProject = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  gap: 10px 10px;
  grid-template-areas:
    "name-achievement-experience-project name-achievement-experience-project date-achievement-experience-project date-achievement-experience-project"
    "image-achievement-experience-container image-achievement-experience-container description-achievement-experience-project description-achievement-experience-project"
    "image-achievement-experience-container image-achievement-experience-container description-achievement-experience-project description-achievement-experience-project";
  margin-bottom: 50px;
  border-bottom: #74c6d4 solid 1px;
`;

AchievementExperienceProject.displayName = "AchievementExperienceProject";

const AchievementExpericenceTextStyles = css`
  text-decoration: none;
  color: #e3e1e4;
  letter-spacing: 0.09em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NameAchievementExperienceProject = styled.div`
  grid-area: name-achievement-experience-project;
  width: 100%;
  font-size: 250%;
  ${AchievementExpericenceTextStyles}
  margin-bottom:10px;
  @media only screen and (max-width: 800px) {
    font-size: 7vw;
  }
`;

NameAchievementExperienceProject.displayName =
  "NameAchievementExperienceProject";

export const DateAchievementExperienceProject = styled.div`
  grid-area: date-achievement-experience-project;
  width: 100%;
  border-left: #74c6d4 solid 1px;
  font-size: 190%;
  padding: 0 20px;
  @media only screen and (max-width: 800px) {
    font-size: 6vw;
  }
  ${AchievementExpericenceTextStyles}
`;

DateAchievementExperienceProject.displayName =
  "DateAchievementExperienceProject";

export const ImageAchievementExperienceContainer = styled.div`
  grid-area: image-achievement-experience-container;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
`;

ImageAchievementExperienceContainer.displayName =
  "ImageAchievementExperienceContainer";

export const ImageAchievementExperience = styled.img`
  width: 100%;

  background-size: contain;
  opacity: 0.85;
`;

ImageAchievementExperience.displayName = "ImageAchievementExperience";

export const DescriptionAchievementExperienceProject = styled.div`
  grid-area: description-achievement-experience-project;
  width: 100%;
  font-size: 120%;
  line-height: 1.4em;
  text-align: left;
  ${AchievementExpericenceTextStyles}\
  margin-bottom: 10px;
  @media only screen and (max-width: 800px) {
    font-size: 5vw;
  }
`;

DescriptionAchievementExperienceProject.displayName =
  "DescriptionAchievementExperienceProject ";
