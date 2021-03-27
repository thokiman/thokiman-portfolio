import styled, { css } from "styled-components";
import { Element } from "react-scroll";

export const TimelineTextContainer = styled.div`
  font-family: futura-book;
`;
export const TimelineCareerYearElement = styled(Element)`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(5, 1fr);
  gap: 10px 10px;
  grid-template-areas:
    "timeline-career-year timeline-career-year timeline-career-company timeline-career-company"
    "timeline-career-title-type timeline-career-title-type timeline-career-company timeline-career-company"
    "timeline-career-title-type timeline-career-title-type timeline-career-description timeline-career-description"
    "timeline-career-date-length timeline-career-date-length timeline-career-description timeline-career-description"
    "timeline-career-location timeline-career-location timeline-career-description timeline-career-description";
  background-color: rgba(116, 198, 212, 0.5);
`;

const TimelineCareerTextStyles = css`
  color: #bccfd5;
  font-kerning: auto;
  margin-bottom: 10px;
  text-align: left;
`;
export const TimelineCareerYear = styled.div`
  ${TimelineCareerTextStyles}
  grid-area: timeline-career-year;
  text-align: left;
  margin: 15px 0;
  font-size: 350%;
  letter-spacing: 0.5em;
  padding-left: 30px;
  text-shadow: #74c6d4 10px 23px;
  @media only screen and (max-width: 800px) {
    font-size: 250%;
  }
`;

export const TimelineCareerCompany = styled.div`
  ${TimelineCareerTextStyles}
  grid-area: timeline-career-company;
  font-size: 3.6vw;
  line-height: 1.2em;
  letter-spacing: 0.15em;
  padding: 10px 20px;
  position: relative;
  top: 91px;
  @media only screen and (max-width: 800px) {
    font-size: 150%;
    position: relative;
    right: 20px;
  }
  @media only screen and (max-width: 370px) {
    font-size: 120%;
    position: relative;
    right: 20px;
  }
  @media only screen and (max-width: 289px) {
    font-size: 100%;
    position: relative;
    right: 20px;
  }
  @media only screen and (max-width: 244px) {
    font-size: 80%;
    position: relative;
    right: 20px;
  }
`;
export const TimelineCareerTitleType = styled.div`
  ${TimelineCareerTextStyles}
  grid-area: timeline-career-title-type;
  font-family: futura-light;
  font-size: 3vw;
  text-align: right;
  line-height: 1.2em;
  letter-spacing: 0.15em;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
    font-size: 140%;
    font-weight: bold;
    padding: 4px;
    @media only screen and (max-width: 370px) {
      font-size: 110%;
      font-weight: bold;
      padding: 4px;
    }
    @media only screen and (max-width: 289px) {
      font-size: 80%;
      font-weight: bold;
      padding: 4px;
    }
  }
`;

export const TimelineCareerDateLength = styled.div`
  ${TimelineCareerTextStyles}

  grid-area: timeline-career-date-length;
  font-family: futura-light;
  font-size: 2.4vw;
  line-height: 1.5em;
  text-align: right;
  letter-spacing: 0.15em;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
    font-size: 100%;
    font-weight: bold;
    padding: 4px;
  }
`;

export const TimelineCareerLocation = styled.div`
  ${TimelineCareerTextStyles}
  grid-area: timeline-career-location;
  font-family: futura-light;
  font-size: 2.4vw;
  text-align: right;
  letter-spacing: 0.1em;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
    font-size: 100%;
    font-weight: bold;

    padding: 4px;
  }
`;
export const TimelineCareerDescription = styled.div`
  ${TimelineCareerTextStyles}
  grid-area: timeline-career-description;
  font-family: futura-light;
  font-size: 2.3vw;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.3em;
  margin-top: 60px;
  padding: 10px 20px;
  @media only screen and (max-width: 800px) {
    font-size: 100%;
    letter-spacing: 0.08em;
    font-weight: bold;
    text-align: left;
    padding: 4px;
  }
`;
TimelineTextContainer.displayName = "TimelineTextContainer";
TimelineCareerYearElement.displayName = "TimelineCareerYearElement";
TimelineCareerYear.displayName = "TimelineCareerYear";
TimelineCareerCompany.displayName = "TimelineCareerCompany";
TimelineCareerTitleType.displayName = "TimelineCareerTitleType";
TimelineCareerDateLength.displayName = "TimelineCareerDateLength";
TimelineCareerLocation.displayName = "TimelineCareerLocation";
TimelineCareerDescription.displayName = "TimelineCareerDescription";
