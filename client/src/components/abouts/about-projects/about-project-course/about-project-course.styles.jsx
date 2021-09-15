import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const whiteSmokeColor = '#e3e1e4';
const lightBlueColor = '#74c6d4';
const maxWidthSmartphone = 800;

export const AboutCourseProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: fit-content;
  margin: 0 auto;
`;

export const AboutCourseProjectTitle = styled.div`
  font-size: 400%;
  padding: 10px;
  color: ${whiteSmokeColor};
  letter-spacing: 0.04em;
  text-align: left;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 18vw;
    display: block;
  }
`;

export const AboutCourseProjectAttributes = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  gap: 0px 20px;
  grid-template-areas:
    'name-course-project name-course-project github-course-project related-course-project related-course-project'
    'name-course-project name-course-project  github-course-project related-course-project related-course-project'
    'description-course-project description-course-project description-course-project description-course-project description-course-project';

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
`;

const aboutLinkCourseProject = keyframes`
                    from {
                        opacity: 0.2;
                        color: ${whiteSmokeColor};

                    }

                    to {
                        opacity: 1;
                        color: ${lightBlueColor};

                    }
`;

const AboutCourseProjectStyles = css`
  text-decoration: none;
  color: ${whiteSmokeColor};
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
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 4vw;
    width: 100%;
    justify-content: center;
    padding: 2vh 0;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    text-align: center;
    font-size: 6vw;
    width: 100%;
    justify-content: center;
    padding: 2vh 0;
  }

  &:hover {
    animation: ${aboutLinkCourseProject} 0.5s ease-in-out;
    color: ${lightBlueColor};
  }
`;
export const AboutGithubCourseProject = styled(Link)`
  ${AboutCourseProjectStyles}

  grid-area: github-course-project;

  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    height: min-content;
    width: min-content;
  }

  &:hover {
    animation: ${aboutLinkCourseProject} 0.5s ease-in-out;
    color: ${lightBlueColor};
  }
`;

export const AboutGithubIconCourseProject = styled(FiGithub)`
  ${AboutCourseProjectStyles}
  width: 5vw;
  height: 5vh;

  &:hover {
    animation: ${aboutLinkCourseProject} 0.5s ease-in-out;
    color: ${lightBlueColor};
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 8vw;
    height: 8vh;
  }
`;

export const AboutRelatedCourseProject = styled.div`
  ${AboutCourseProjectStyles}
  border: ${lightBlueColor} solid 1px;
  grid-area: related-course-project;
  width: 100%;
  font-size: 150%;
  padding: 15px;
  letter-spacing: 0.06em;
  text-align: left;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 5vw;
    line-height: 1.2em;
    padding: 4vw;
    margin: 1vw;
    justify-content: flex-start;
  }
`;

export const AboutDescriptionCourseProject = styled.div`
  ${AboutCourseProjectStyles}
  border-bottom: ${lightBlueColor} solid 1px;
  width: 100%;
  grid-area: description-course-project;
  font-size: 130%;
  padding: 10px 0;
  text-align: justify;
  line-height: 1.2em;
  letter-spacing: 0.05em;
  margin: 10px auto;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 4vw;
    text-align: left;
    margin: 2vw;
    justify-content: flex-start;
  }
`;

AboutCourseProjectContainer.displayName = 'AboutCourseProjectContainer';
AboutCourseProjectTitle.displayName = 'AboutCourseProjectTitle';
AboutCourseProjectAttributes.displayName = 'AboutCourseProjectAttributes';
AboutNameCourseProject.displayName = 'AboutNameCourseProject';
AboutRelatedCourseProject.displayName = 'AboutRelatedCourseProject';
AboutDescriptionCourseProject.displayName = 'AboutDescriptionCourseProject';
