import React from "react";
import EducationGrid from "../../about-commons/education-parts/education-grid/education-grid.component";
import {
  AboutEducationBachelorAttributes, AboutEducationBachelorContent, AboutEducationBachelorDegree,
  AboutEducationBachelorGrade,
  AboutEducationBachelorLength, AboutEducationBachelorSchool, AboutEducationBachelorStartEndDate, AboutEducationBachelorTitle
} from "./about-education-bachelor.styles";


export const AboutEducationBachelor = ({ lastBachelor }) => {
  return (
    <AboutEducationBachelorContent>
      <AboutEducationBachelorTitle>Bachelor</AboutEducationBachelorTitle>
      {lastBachelor.map(
        ({
          id,
          school,
          degree,
          startDate,
          endDate,
          length,
          grade,
          imagePath,
        }) => {
          return (
            <div key={id}>
              <AboutEducationBachelorAttributes>
                <AboutEducationBachelorSchool>
                  {school}
                </AboutEducationBachelorSchool>
                <AboutEducationBachelorDegree>
                  {degree}
                </AboutEducationBachelorDegree>
                <AboutEducationBachelorStartEndDate>
                  {startDate} - {endDate}
                </AboutEducationBachelorStartEndDate>
                <AboutEducationBachelorLength>
                  {length}
                </AboutEducationBachelorLength>
                <AboutEducationBachelorGrade>
                  {grade}
                </AboutEducationBachelorGrade>
              </AboutEducationBachelorAttributes>
              <EducationGrid imagePath={imagePath} />
            </div>
          );
        }
      )}
    </AboutEducationBachelorContent>
  );
};

export default AboutEducationBachelor;
