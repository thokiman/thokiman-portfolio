import React from 'react';
import {
  AchievementProject,
  AchievementProjectContainer,
  AchievementProjectTitle,
  DateAchievementProject,
  DescriptionAchievementProject,
  ImageAchievement,
  ImageAchievementContainer,
  NameAchievementProject
} from './about-project-achievement.styles';

export const AboutAchievementProject = ({ lastExperience }) => (
  <AchievementProjectContainer>
    <AchievementProjectTitle>
      Experience of Achievement
    </AchievementProjectTitle>
    {lastExperience.map(({
      id, name, description, date, imagePath,
    }) => (
      <AchievementProject key={id}>
        <NameAchievementProject>
          {name}
        </NameAchievementProject>
        <DateAchievementProject>
          {date}
        </DateAchievementProject>
        <ImageAchievementContainer key={id}>
          {imagePath.map(({ id, field, iconPath }) => (
            <ImageAchievement
              key={id}
              src={iconPath}
              alt={field}
            />
          ))}
        </ImageAchievementContainer>
        <DescriptionAchievementProject>
          {description}
        </DescriptionAchievementProject>
      </AchievementProject>
    ))}
  </AchievementProjectContainer>
);

export default AboutAchievementProject;
