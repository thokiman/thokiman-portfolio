import styled, { css } from 'styled-components';

const maxWidthSmartphone = 800;
const whiteSmokeColor = '#e3e1e4';
const lightBlueColor = '#74c6d4';

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
  color: ${whiteSmokeColor};
  letter-spacing: 0.04em;
  text-align: left;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 18vw;
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
    'name-thesis-project name-thesis-project name-thesis-project name-thesis-project name-thesis-project'
    'type-thesis-project type-thesis-project start-end-date-thesis-project start-end-date-thesis-project start-end-date-thesis-project'
    'type-thesis-project type-thesis-project len-thesis-project len-thesis-project len-thesis-project'
    'location-thesis-project location-thesis-project description-thesis-project description-thesis-project description-thesis-project'
    'location-thesis-project location-thesis-project description-thesis-project description-thesis-project description-thesis-project';

  border-bottom: ${lightBlueColor} solid 1px;
  margin: 10px auto;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
`;

const AboutThesisProjectStyles = css`
  width: 100%;
  margin: 10px auto;
  text-align: left;
  display: flex;
  align-items: center;
  text-align: left;
  letter-spacing: 0.04em;
  color: ${whiteSmokeColor};
`;
export const AboutNameThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: name-thesis-project;
  font-size: 220%;
  padding: 10px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 9vw;
  }
`;

export const AboutTypeThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: type-thesis-project;
  font-size: 140%;
  line-height: 1.1em;
  border-bottom: ${lightBlueColor} solid 1px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
  }
`;

export const AboutLocationThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: location-thesis-project;
  font-size: 140%;
  line-height: 1.1em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
  }
`;
export const AboutStartEndDateThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: start-end-date-thesis-project;
  font-size: 130%;
  border-bottom: ${lightBlueColor} solid 1px;
  line-height: 1.1em;
  letter-spacing: 0.05em;
  padding: 10px 0;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 5.5vw;
  }
`;
export const AboutLengthThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: len-thesis-project;
  font-size: 130%;
  line-height: 1.1em;
  letter-spacing: 0.05em;
  padding: 10px 0;
  border-bottom: ${lightBlueColor} solid 1px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 5.5vw;
  }
`;
export const AboutDescriptionThesisProject = styled.div`
  ${AboutThesisProjectStyles}
  grid-area: description-thesis-project;
  font-size: 120%;
  line-height: 1.1em;
  letter-spacing: 0.05em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 4.5vw;
  }
`;

AboutThesisProjectContainer.displayName = 'AboutThesisProjectContainer';
AboutThesisProjectTitle.displayName = 'AboutThesisProjectTitle';
AboutThesisProjectAttributes.displayName = 'AboutThesisProjectAttributes';
AboutNameThesisProject.displayName = 'AboutNameThesisProject';
AboutTypeThesisProject.displayName = 'AboutTypeThesisProject';
AboutLocationThesisProject.displayName = 'AboutLocationThesisProject';
AboutStartEndDateThesisProject.displayName = 'AboutStartEndDateThesisProject';
AboutLengthThesisProject.displayName = 'AboutLengthThesisProject';
AboutDescriptionThesisProject.displayName = 'AboutDescriptionThesisProject';
