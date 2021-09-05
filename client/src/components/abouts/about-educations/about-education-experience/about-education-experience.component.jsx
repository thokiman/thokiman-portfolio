import React from "react";
import EducationGrid from "../../about-commons/education-parts/education-grid/education-grid.component";
import {
  AboutEducationExperienceAttributes,
  AboutEducationExperienceCompany,
  AboutEducationExperienceContent,
  AboutEducationExperienceDescription,
  AboutEducationExperienceField,
  AboutEducationExperienceGrade,
  AboutEducationExperienceStartEndDate,
  AboutEducationExperienceTitle
} from "./about-education-experience.styles";


export const AboutEducationExperience = ({ lastExperience }) => {
  return (
    <AboutEducationExperienceContent>
      <AboutEducationExperienceTitle>Experience</AboutEducationExperienceTitle>
      {lastExperience.map(
        ({
          id,
          company,
          field,
          description,
          startDate,
          endDate,
          grade,
          imagePath,
        }) => {
          return (
            <div key={id}>
              <AboutEducationExperienceAttributes>
                <AboutEducationExperienceCompany>
                  {company}
                </AboutEducationExperienceCompany>
                <AboutEducationExperienceField>
                  {field}
                </AboutEducationExperienceField>
                <AboutEducationExperienceGrade>
                  {grade}
                </AboutEducationExperienceGrade>
                <AboutEducationExperienceStartEndDate>
                  {startDate} - {endDate}
                </AboutEducationExperienceStartEndDate>
                <AboutEducationExperienceDescription>
                  {description}
                </AboutEducationExperienceDescription>
              </AboutEducationExperienceAttributes>
              <EducationGrid imagePath={imagePath} />
            </div>
          );
        }
      )}
    </AboutEducationExperienceContent>
  );
};

export default AboutEducationExperience;
