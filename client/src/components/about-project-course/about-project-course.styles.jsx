import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

export const AboutCourseProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;

export const AboutCourseProjectTitle = styled.div`
  font-size: 400%;
  padding: 10px;
  color: #e3e1e4;
  letter-spacing: 0.04em;
  text-align: left;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 800px) {
    font-size: 18vw;
  }
`;

export const AboutCourseProjectAttributes = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  gap: 0px 20px;
  grid-template-areas:
    "name-course-project name-course-project related-course-project related-course-project"
    "name-course-project name-course-project related-course-project related-course-project"
    "description-course-project description-course-project description-course-project description-course-project";
`;

const aboutLinkCourseProject = keyframes`
                    from {
                        opacity: 0.2;
                        color: #e3e1e4;

                    }

                    to {
                        opacity: 1;
                        color: #74c6d4;

                    }
`;

const AboutCourseProjectStyles = css`
  text-decoration: none;
  color: #e3e1e4;
  display: flex;
  align-items: center;
`;

export const AboutNameCourseProject = styled(Link)`
  ${AboutCourseProjectStyles}
  width: 100%;
  grid-area: name-course-project;
  font-size: 240%;
  text-align: right;
  letter-spacing: 0.09em;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
    font-size: 6vw;
  }

  &:hover {
    animation: ${aboutLinkCourseProject} 0.5s ease-in-out;
    color: #74c6d4;
  }
`;
export const AboutRelatedCourseProject = styled.div`
  ${AboutCourseProjectStyles}
  border: #74c6d4 solid 1px;
  grid-area: related-course-project;
  width: 100%;
  font-size: 150%;
  padding: 15px;
  letter-spacing: 0.06em;
  text-align: left;
  @media only screen and (max-width: 800px) {
    font-size: 5vw;
    line-height: 1.2em;
  }
`;

export const AboutDescriptionCourseProject = styled.div`
  ${AboutCourseProjectStyles}
  border-bottom: #74c6d4 solid 1px;
  width: 100%;
  grid-area: description-course-project;
  font-size: 130%;
  padding: 10px 0;
  text-align: justify;
  line-height: 1.2em;
  letter-spacing: 0.05em;
  margin: 10px auto;
  @media only screen and (max-width: 800px) {
    font-size: 4vw;
    text-align: left;
  }
`;

AboutCourseProjectContainer.displayName = "AboutCourseProjectContainer";
AboutCourseProjectTitle.displayName = "AboutCourseProjectTitle";
AboutCourseProjectAttributes.displayName = "AboutCourseProjectAttributes";
AboutNameCourseProject.displayName = "AboutNameCourseProject";
AboutRelatedCourseProject.displayName = "AboutRelatedCourseProject";
AboutDescriptionCourseProject.displayName = "AboutDescriptionCourseProject";
