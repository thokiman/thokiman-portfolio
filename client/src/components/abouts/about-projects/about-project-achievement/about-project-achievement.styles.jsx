import styled, { css } from 'styled-components';

const whiteSmokeColor = '#e3e1e4';
const lightBlueColor = '#74c6d4';
const maxWidthSmartphone = 800;
export const AchievementProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;

AchievementProjectContainer.displayName = 'AchievementProjectContainer';

export const AchievementProjectTitle = styled.div`
  font-size: 350%;
  padding: 10px;
  color: ${whiteSmokeColor};
  letter-spacing: 0.04em;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 14vw;
    display: block;
  }
`;

AchievementProjectTitle.displayName = 'AchievementProjectTitle';

export const AchievementProject = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  gap: 10px 10px;
  grid-template-areas:
    'name-achievement-experience-project name-achievement-experience-project date-achievement-experience-project date-achievement-experience-project'
    'image-achievement-experience-container image-achievement-experience-container description-achievement-experience-project description-achievement-experience-project'
    'image-achievement-experience-container image-achievement-experience-container description-achievement-experience-project description-achievement-experience-project';
  margin-bottom: 50px;
  border-bottom: ${lightBlueColor} solid 1px;
`;

AchievementProject.displayName = 'AchievementProject';

const AchievementTextStyles = css`
  text-decoration: none;
  color: ${whiteSmokeColor};
  letter-spacing: 0.09em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NameAchievementProject = styled.div`
  grid-area: name-achievement-experience-project;
  width: 100%;
  font-size: 250%;
  ${AchievementTextStyles}
  margin-bottom:10px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 7vw;
  }
`;

NameAchievementProject.displayName = 'NameAchievementProject';

export const DateAchievementProject = styled.div`
  grid-area: date-achievement-experience-project;
  width: 100%;
  border-left: #74c6d4 solid 1px;
  font-size: 190%;
  padding: 0 20px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
  }
  ${AchievementTextStyles}
`;

DateAchievementProject.displayName = 'DateAchievementProject';

export const ImageAchievementContainer = styled.div`
  grid-area: image-achievement-experience-container;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
`;

ImageAchievementContainer.displayName = 'ImageAchievementContainer';

export const ImageAchievement = styled.img`
  width: 100%;

  background-size: contain;
  opacity: 0.85;
`;

ImageAchievement.displayName = 'ImageAchievement';

export const DescriptionAchievementProject = styled.div`
  grid-area: description-achievement-experience-project;
  width: 100%;
  font-size: 120%;
  line-height: 1.4em;
  text-align: left;
  ${AchievementTextStyles}
  margin-bottom: 10px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 5vw;
  }
`;

DescriptionAchievementProject.displayName = 'DescriptionAchievementProject ';
