import styled, { css } from 'styled-components';

const whiteSmokeColor = '#e3e1e4';
const lightBlueColor = '#74c6d4';
const maxWidthSmartphone = 800;

export const AboutEducationBachelorContent = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 92%;
  margin: 0 25px;
  position: relative;
  top: 10px;

  @media only screen and (max-width: 500px) {
    margin: 0 auto;
  }
`;

export const AboutEducationBachelorTitle = styled.div`
  display: inline-block;
  width: 90%;
  font-size: 500%;
  text-align: left;
  line-height: 1.3em;
  letter-spacing: 0.04em;
  font-kerning: auto;
  padding: 0 2px;
  color: ${whiteSmokeColor};

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 18vw;
  }
`;

export const AboutEducationBachelorAttributes = styled.div`
  border-top: ${lightBlueColor} solid 2px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  gap: 2px 0px;
  grid-template-areas:
    'education-bachelor-bachelor education-bachelor-bachelor education-bachelor-degree education-bachelor-degree'
    'education-bachelor-bachelor education-bachelor-bachelor education-bachelor-start-end-date education-bachelor-start-end-date'
    'education-bachelor-grade education-bachelor-grade education-bachelor-length education-bachelor-length';
  width: 100%;
  height: 100%;
`;

const AboutEducationBachelorStyles = css`
  line-height: 1.3em;
  letter-spacing: 0.04em;
  font-kerning: auto;
  text-align: center;
  color: ${whiteSmokeColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${lightBlueColor} solid 2px;
`;

export const AboutEducationBachelorSchool = styled.div`
  ${AboutEducationBachelorStyles}
  grid-area: education-bachelor-bachelor;
  padding: 10px 0;
  font-size: 250%;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    padding: 4px;
    font-size: 7vw;
    text-align: left;
  }
`;

export const AboutEducationBachelorDegree = styled.div`
  ${AboutEducationBachelorStyles}
  grid-area: education-bachelor-degree;
  font-size: 200%;
  padding: 0 10px;
  border-left: ${lightBlueColor} solid 2px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
    padding: 4px;
  }
`;

export const AboutEducationBachelorStartEndDate = styled.div`
  ${AboutEducationBachelorStyles}
  grid-area: education-bachelor-start-end-date;
  font-size: 150%;
  padding: 30px 10px;
  border-left: ${lightBlueColor} solid 2px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    padding: 4px;
    font-size: 4.5vw;
  }
`;

export const AboutEducationBachelorLength = styled.div`
  ${AboutEducationBachelorStyles}
  grid-area: education-bachelor-length;
  font-size: 150%;
  border-left: ${lightBlueColor} solid 2px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    padding: 4px;
    font-size: 4.5vw;
  }
`;

export const AboutEducationBachelorGrade = styled.div`
  ${AboutEducationBachelorStyles}
  grid-area: education-bachelor-grade;
  font-size: 180%;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    padding: 4px;
    font-size: 5.5vw;
  }
`;

AboutEducationBachelorContent.displayName = 'AboutEducationBachelorContent';
AboutEducationBachelorTitle.displayName = 'AboutEducationBachelorTitle;';
AboutEducationBachelorAttributes.displayName =
  'AboutEducationBachelorAttributes';
AboutEducationBachelorSchool.displayName = 'AboutEducationBachelorSchool';
AboutEducationBachelorDegree.displayName = 'AboutEducationBachelorDegree;';
AboutEducationBachelorStartEndDate.displayName =
  'AboutEducationBachelorStartEndDate';
AboutEducationBachelorLength.displayName = 'AboutEducationBachelorLength';
AboutEducationBachelorGrade.displayName = 'AboutEducationBachelorGrade';
