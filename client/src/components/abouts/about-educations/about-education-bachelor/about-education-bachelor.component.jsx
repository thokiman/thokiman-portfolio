import React from 'react';
import EducationGrid from '../../about-commons/education-parts/education-grid/education-grid.component';
import {
  AboutEducationBachelorAttributes,
  AboutEducationBachelorContent,
  AboutEducationBachelorDegree,
  AboutEducationBachelorGrade,
  AboutEducationBachelorLength,
  AboutEducationBachelorSchool,
  AboutEducationBachelorStartEndDate,
  AboutEducationBachelorTitle,
} from './about-education-bachelor.styles';

export const AboutEducationBachelor = ({ lastBachelor }) => {
  return (
    <AboutEducationBachelorContent className='about-education-bachelor-content'>
      <AboutEducationBachelorTitle className='about-education-bachelor-title'>
        Bachelor
      </AboutEducationBachelorTitle>
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
              <AboutEducationBachelorAttributes className='about-education-bachelor-attributes'>
                <AboutEducationBachelorSchool className='about-education-bachelor'>
                  {school}
                </AboutEducationBachelorSchool>
                <AboutEducationBachelorDegree className='about-education-bachelor'>
                  {degree}
                </AboutEducationBachelorDegree>
                <AboutEducationBachelorStartEndDate className='about-education-bachelor'>
                  {startDate} - {endDate}
                </AboutEducationBachelorStartEndDate>
                <AboutEducationBachelorLength className='about-education-bachelor'>
                  {length}
                </AboutEducationBachelorLength>
                <AboutEducationBachelorGrade className='about-education-bachelor'>
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
