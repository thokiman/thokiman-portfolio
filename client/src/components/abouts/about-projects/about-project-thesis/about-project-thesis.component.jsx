import React from 'react';
import {
  AboutDescriptionThesisProject,
  AboutLengthThesisProject,
  AboutLocationThesisProject,
  AboutNameThesisProject,
  AboutStartEndDateThesisProject,
  AboutThesisProjectAttributes,
  AboutThesisProjectContainer,
  AboutThesisProjectTitle,
  AboutTypeThesisProject,
} from './about-project-thesis.styles';

export const AboutThesisProject = ({ thesis }) => {
  return (
    <AboutThesisProjectContainer className='about-thesis-project-content'>
      <AboutThesisProjectTitle className='about-thesis-project-title'>
        Thesis
      </AboutThesisProjectTitle>
      {thesis.map(
        ({
          id,
          name,
          type,
          startDate,
          endDate,
          length,
          location,
          description,
        }) => {
          return (
            <AboutThesisProjectAttributes
              className='about-thesis-project-attributes'
              key={id}
            >
              <AboutNameThesisProject className='about-thesis-project'>
                {name}
              </AboutNameThesisProject>
              <AboutTypeThesisProject className='about-thesis-project'>
                {type.charAt(0).toUpperCase()}
                {type.slice(1, 7)}
                {type.charAt(7).toUpperCase()}
                {type.slice(8)}
              </AboutTypeThesisProject>
              <AboutStartEndDateThesisProject className='about-thesis-project'>
                {startDate} - {endDate}
              </AboutStartEndDateThesisProject>
              <AboutLengthThesisProject className='about-thesis-project'>
                {length}
              </AboutLengthThesisProject>
              <AboutLocationThesisProject className='about-thesis-project'>
                {location}
              </AboutLocationThesisProject>
              <AboutDescriptionThesisProject className='about-thesis-project'>
                {description}
              </AboutDescriptionThesisProject>
            </AboutThesisProjectAttributes>
          );
        }
      )}
    </AboutThesisProjectContainer>
  );
};

export default AboutThesisProject;
