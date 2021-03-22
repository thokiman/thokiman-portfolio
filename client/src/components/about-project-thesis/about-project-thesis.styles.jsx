import styled, { css } from "styled-components";

export const AboutThesisProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;

export const AboutThesisProjectTitle = styled.div`
  font-size: 400%;
  padding: 10px;
  color: #e3e1e4;
  letter-spacing: 0.04em;
  text-align: left;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 800px) {
    font-size: 350%;
  }
`;

export const AboutThesisProjectAttributes = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: repeat(5, 1fr);
  gap: 2px 2px;
  grid-template-areas:
    "name-thesis-project name-thesis-project name-thesis-project name-thesis-project name-thesis-project"
    "type-thesis-project type-thesis-project start-end-date-thesis-project start-end-date-thesis-project start-end-date-thesis-project"
    "type-thesis-project type-thesis-project length-thesis-project length-thesis-project length-thesis-project"
    "location-thesis-project location-thesis-project description-thesis-project description-thesis-project description-thesis-project"
    "location-thesis-project location-thesis-project description-thesis-project description-thesis-project description-thesis-project";

  border-bottom: #74c6d4 solid 1px;
  margin: 10px auto;
`;

const AboutThesisProjectStyles = css`
  width: 100%;
  margin: 10px auto;
  text-align: left;
  display: flex;
  align-items: center;
  text-align: left;
  letter-spacing: 0.04em;
  color: #e3e1e4;
`;
export const AboutNameThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: name-thesis-project;
  font-size: 220%;
  padding: 10px;
  @media only screen and (max-width: 800px) {
    font-size: 190%;
  }
`;

export const AboutTypeThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: type-thesis-project;
  font-size: 150%;
  line-height: 1.1em;
  border-bottom: #74c6d4 solid 1px;
`;

export const AboutLocationThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: location-thesis-project;
  font-size: 150%;
  line-height: 1.1em;
`;
export const AboutStartEndDateThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: start-end-date-thesis-project;
  font-size: 130%;
  border-bottom: #74c6d4 solid 1px;
  line-height: 1.1em;
  letter-spacing: 0.05em;
  padding: 10px 0;
  @media only screen and (max-width: 800px) {
    font-size: 110%;
  }
`;
export const AboutLengthThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: length-thesis-project;
  font-size: 130%;
  line-height: 1.1em;
  letter-spacing: 0.05em;
  padding: 10px 0;
  border-bottom: #74c6d4 solid 1px;
  @media only screen and (max-width: 800px) {
    font-size: 110%;
  }
`;
export const AboutDescriptionThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: description-thesis-project;
  font-size: 120%;
  line-height: 1.1em;
  letter-spacing: 0.05em;
  @media only screen and (max-width: 800px) {
    font-size: 100%;
  }
`;

AboutThesisProjectContainer.displayName = "AboutThesisProjectContainer";
AboutThesisProjectTitle.displayName = "AboutThesisProjectTitle";
AboutThesisProjectAttributes.displayName = "AboutThesisProjectAttributes";
AboutNameThesisProject.displayName = "AboutNameThesisProject";
AboutTypeThesisProject.displayName = "AboutTypeThesisProject";
AboutLocationThesisProject.displayName = "AboutLocationThesisProject";
AboutStartEndDateThesisProject.displayName = "AboutStartEndDateThesisProject";
AboutLengthThesisProject.displayName = "AboutLengthThesisProject";
AboutDescriptionThesisProject.displayName = "AboutDescriptionThesisProject";
