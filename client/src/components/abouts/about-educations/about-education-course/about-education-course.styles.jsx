import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const AboutEducationCourseContent = styled.div`
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

export const AboutEducationCourseTitle = styled.div`
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
    font-size: 18vw;
  }
`;

export const AboutEducationCourseAttributes = styled.div`
  display: grid;
  grid-auto-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  gap: 2px 0px;
  grid-template-areas:
    "education-experience-company education-experience-company education-experience-organization education-experience-organization"
    "education-experience-company education-experience-company education-experience-date education-experience-date"
    "education-experience-company education-experience-company education-experience-link education-experience-link";
  width: 100%;
  height: 100%;
`;

const AboutEducationCourseStyles = css`
  text-align: center;
  line-height: 1.3em;
  letter-spacing: 0.04em;
  font-kerning: auto;
  border-bottom: #74c6d4 solid 2px;
  color: #e3e1e4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutEducationCourseName = styled.div`
  ${AboutEducationCourseStyles}
  grid-area: education-experience-company;
  font-size: 200%;
  padding: 10px 0;
  width: 95%;
  @media only screen and (max-width: 800px) {
    text-align: left;
    font-size: 6vw;
  }
`;

export const AboutEducationCourseOrganization = styled.div`
  ${AboutEducationCourseStyles}
  grid-area: education-experience-organization;
  font-size: 150%;
  padding: 0 10px;
  @media only screen and (max-width: 800px) {
    padding: 4px;
    font-size: 4.5vw;
  }
`;

export const AboutEducationCourseDate = styled.div`
  ${AboutEducationCourseStyles}
  grid-area: education-experience-date;
  padding: 10px 0;
  font-size: 150%;
  @media only screen and (max-width: 800px) {
    font-size: 4.5vw;
    padding: 4px;
  }
`;

export const AboutEducationCourseLink = styled.div`
  grid-area: education-experience-link;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const aboutCourseLink = keyframes`
                    from {
                        opacity: 0.3;

                    }

                    to {
                        opacity: 1;

                    }

`;
export const AboutCourseLink = styled(Link)`
  ${AboutEducationCourseStyles}
  width: 100%;
  height: 100%;
  padding: 4px;
  text-decoration: none;
  font-size: 120%;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    font-size: 4.5vw;
  }

  &:hover {
    border-bottom: #3f4249 solid 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${aboutCourseLink} 0.5s ease-in-out;
  }
`;

AboutEducationCourseContent.displayName = "AboutEducationCourseContent";
AboutEducationCourseTitle.displayName = "AboutEducationCourseTitle";
AboutEducationCourseAttributes.displayName = "AboutEducationCourseAttributes";
AboutEducationCourseName.displayName = "AboutEducationCourseName";
AboutEducationCourseOrganization.displayName =
  "AboutEducationCourseOrganization";
AboutEducationCourseDate.displayName = "AboutEducationCourseDate";
AboutEducationCourseLink.displayName = "AboutEducationCourseLink";
AboutCourseLink.displayName = "AboutCourseLink";
