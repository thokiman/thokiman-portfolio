import styled, { css } from "styled-components";

export const AboutEducationExperienceContent = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 92%;
  margin: 0 25px;
  position: relative;
  top: 10px;
`;

export const AboutEducationExperienceTitle = styled.div`
  display: inline-block;
  width: 90%;
  font-size: 500%;
  text-align: left;
  line-height: 1.3em;
  letter-spacing: 0.04em;
  font-kerning: auto;
  padding: 0 2px;
  color: #e3e1e4;
  @media only screen and (max-width: 800px) {
    font-size: 17vw;
    width: 100%;
  }
`;

export const AboutEducationExperienceAttributes = styled.div`
  display: grid;
  grid-auto-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(4, 1fr);
  gap: 0px 0px;
  grid-template-areas:
    "education-experience-company education-experience-company education-experience-field education-experience-field"
    "education-experience-company education-experience-company education-experience-description education-experience-description"
    "education-experience-start-end-date education-experience-start-end-date education-experience-description education-experience-description"
    "education-experience-grade education-experience-grade education-experience-description education-experience-description";
  width: 100%;
  height: 100%;
`;

const AboutEducationExperienceStyles = css`
  line-height: 1.3em;
  letter-spacing: 0.04em;
  font-kerning: auto;
  text-align: center;
  border-bottom: #74c6d4 solid 2px;
  color: #e3e1e4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutEducationExperienceCompany = styled.div`
  ${AboutEducationExperienceStyles}
  grid-area: education-experience-company;
  font-size: 250%;
  padding: 10px 0;
  @media only screen and (max-width: 800px) {
    padding: 7px;
    font-size: 8vw;
    text-align: left;
  }
`;

export const AboutEducationExperienceField = styled.div`
  ${AboutEducationExperienceStyles}
  grid-area: education-experience-field;
  font-size: 200%;
  padding: 0 10px;
  border-left: #74c6d4 solid 2px;
  @media only screen and (max-width: 800px) {
    padding: 7px;
    font-size: 7vw;
  }
`;

export const AboutEducationExperienceStartEndDate = styled.div`
  ${AboutEducationExperienceStyles}
  grid-area: education-experience-start-end-date;
  padding: 10px 0;
  font-size: 150%;
  @media only screen and (max-width: 800px) {
    padding: 4px;
    font-size: 5vw;
  }
`;

export const AboutEducationExperienceDescription = styled.div`
  ${AboutEducationExperienceStyles}
  grid-area: education-experience-description;
  padding: 10px;
  text-align: left;
  font-size: 120%;
  border-left: #74c6d4 solid 2px;
  @media only screen and (max-width: 800px) {
    padding: 7px;
    font-size: 4.5vw;
  }
`;

export const AboutEducationExperienceGrade = styled.div`
  ${AboutEducationExperienceStyles}
  grid-area: education-experience-grade;
  padding: 10px 0;
  font-size: 150%;
  @media only screen and (max-width: 800px) {
    padding: 4px;
    font-size: 5vw;
  }
`;

AboutEducationExperienceContent.displayName = "AboutEducationExperienceContent";
AboutEducationExperienceTitle.displayName = "AboutEducationExperienceTitle";
AboutEducationExperienceAttributes.displayName =
  "AboutEducationExperienceAttributes";
AboutEducationExperienceCompany.displayName = "AboutEducationExperienceCompany";
AboutEducationExperienceField.displayName = "AboutEducationExperienceField";
AboutEducationExperienceStartEndDate.displayName =
  "AboutEducationExperienceStartEndDate;";
AboutEducationExperienceDescription.displayName =
  "AboutEducationExperienceDescription";
AboutEducationExperienceGrade.displayName = "AboutEducationExperienceGrade";
