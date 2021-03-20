import React from "react";

import {
  AchievementExperienceProjectContainer,
  AchievementExperienceProjectTitle,
  AchievementExperienceProject,
  DateAchievementExperienceProject,
  NameAchievementExperienceProject,
  ImageAchievementExperience,
  ImageAchievementExperienceContainer,
  DescriptionAchievementExperienceProject,
} from "./about-achievement-experience.styles";

const AboutAchievementProject = ({ lastExperience }) => {
  return (
    <AchievementExperienceProjectContainer>
      <AchievementExperienceProjectTitle>
        Experience of Achievement
      </AchievementExperienceProjectTitle>
      {lastExperience.map(({ id, name, description, date, imagePath }) => {
        return (
          <AchievementExperienceProject key={id}>
            <NameAchievementExperienceProject>
              {name}
            </NameAchievementExperienceProject>
            <DateAchievementExperienceProject>
              {date}
            </DateAchievementExperienceProject>
            <ImageAchievementExperienceContainer key={id}>
              {imagePath.map(({ id, field, iconPath }) => {
                return (
                  <ImageAchievementExperience
                    key={id}
                    src={iconPath}
                    alt={field}
                  />
                );
              })}
            </ImageAchievementExperienceContainer>
            <DescriptionAchievementExperienceProject>
              {description}
            </DescriptionAchievementExperienceProject>
          </AchievementExperienceProject>
        );
      })}
    </AchievementExperienceProjectContainer>
  );
};

export default AboutAchievementProject;
