import React from "react";

import {
  AboutDescriptionExperienceProject,
  AboutExperienceProjectAtttributes,
  AboutExperienceProjectContainer,
  AboutExperienceProjectTitle,
  AboutNameExperienceProject,
} from "./about-project-experience.styles";

export const AboutExperienceProject = ({ experience }) => {
  return (
    <AboutExperienceProjectContainer>
      <AboutExperienceProjectTitle>
        Experience Project
      </AboutExperienceProjectTitle>
      {experience.map(({ id, name, description }) => {
        return (
          <AboutExperienceProjectAtttributes key={id}>
            <AboutNameExperienceProject>{name}</AboutNameExperienceProject>
            <AboutDescriptionExperienceProject>
              {description}
            </AboutDescriptionExperienceProject>
          </AboutExperienceProjectAtttributes>
        );
      })}
    </AboutExperienceProjectContainer>
  );
};

export default AboutExperienceProject;
