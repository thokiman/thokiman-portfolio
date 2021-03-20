import React from "react";

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
} from "./about-project-thesis.styles";

const AboutThesisProject = ({ thesis }) => {
  return (
    <AboutThesisProjectContainer>
      <AboutThesisProjectTitle>Thesis</AboutThesisProjectTitle>
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
            <AboutThesisProjectAttributes key={id}>
              <AboutNameThesisProject>{name}</AboutNameThesisProject>
              <AboutTypeThesisProject>
                {type.charAt(0).toUpperCase()}
                {type.slice(1, 7)}
                {type.charAt(7).toUpperCase()}
                {type.slice(8)}
              </AboutTypeThesisProject>
              <AboutStartEndDateThesisProject>
                {startDate} - {endDate}
              </AboutStartEndDateThesisProject>
              <AboutLengthThesisProject>{length}</AboutLengthThesisProject>
              <AboutLocationThesisProject>
                {location}
              </AboutLocationThesisProject>
              <AboutDescriptionThesisProject>
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
