import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
const maxWidthTablet = 1024;
const maxWidthDesktop = 1366;
const backgroundColorLeftServiceContainer = 'rgba(18, 129, 148, 0.5)';
const borderColorDirectoryService = 'rgba(18, 129, 148, 0.5)';
const grayColor = '#3f4249';
const whiteSmokeColor = '#e3e1e4';
const lightBlueColor = '#74c6d4';
const maxWidthSmartphone = 800;

const ServiceHeaderIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ServiceHeaderIsNotActivated;
  return null;
};

export const LeftServiceContainer = styled.div`
  width: 25vw;
  height: 68vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundColorLeftServiceContainer};
  position: relative;
  left: 4vw;
  transition: height 0.5s ease-in-out, top 0.2s ease;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100vw;
    left: 0;
    ${getSideBarActive}
  }
`;
export const DirectoryService = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px 5px;
  grid-template-areas:
    'directory-service-text-eng directory-service-text-eng directory-service-text-fsd directory-service-text-fsd'
    'directory-service-text-gd directory-service-text-gd directory-service-text-fsd directory-service-text-fsd'
    'directory-service-text-gd directory-service-text-gd directory-service-text-pg directory-service-text-pg';
  height: 76%;
  width: 95%;
  cursor: pointer;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    width: 98vw;
    height: 20vh;
  }
  @media only screen and (max-width: ${maxWidthTablet}px) {
    width: 98vw;
    height: 15vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 98vw;
    height: 50vh;
  }
`;
const directoryServiceHover = keyframes`
    0% {
        background-position: 100% 50%;
        color: ${whiteSmokeColor};
    }

    100% {
        background-position: 0% 50%;
        color: ${lightBlueColor};
    } 
`;
const directoryServiceActive = keyframes`
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }

    40% {
        opacity: 0.6;
    }

    100% {
        opacity: 1;
    }

`;
const DirectoryServiceTextStyles = css`
  text-decoration: none;
  font-size: 1.9vw;
  height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  padding: 0 10px;
  color: ${whiteSmokeColor};
  transition: color 1s linear;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
    padding: 25px;
  }
`;

const DirectoryServiceTextEngStyles = css`
  ${DirectoryServiceTextStyles}
  grid-area: directory-service-text-eng;
  text-align: justify;
  justify-content: flex-end;
  ${
    '' /* @media only screen and (max-width: ${maxWidthDesktop}px) {
    border: red solid 1px;
    height: 10vh;
  }
  @media only screen and (max-width: ${maxWidthTablet}px) {
    border: red solid 1px;
    height: 9vh;
  } */
  }
`;
const DirectoryServiceTextEngHide = css`
  ${DirectoryServiceTextEngStyles}
  border-bottom: ${borderColorDirectoryService} solid 2px;
  border-right: ${borderColorDirectoryService} solid 2px;

  &:hover {
    animation: ${directoryServiceHover} 1s alternate-reverse infinite;
  }
`;
const DirectoryServiceTextEngActive = css`
  ${DirectoryServiceTextEngStyles}
  color: ${grayColor};
  animation: ${directoryServiceActive} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  cursor: default;
`;

const getDirectoryServiceTextEng = (props) => {
  if (props.$matchpath) return DirectoryServiceTextEngActive;
  return DirectoryServiceTextEngHide;
};
export const DirectoryServiceTextEng = styled(Link)`
  ${getDirectoryServiceTextEng}
`;

const DirectoryServiceTextFsdStyles = css`
  ${DirectoryServiceTextStyles}
  grid-area: directory-service-text-fsd;
  line-height: 1.1em;
  text-align: left;
  justify-content: flex-start;
  ${
    '' /* @media only screen and (max-width: ${maxWidthDesktop}px) {
    border: red solid 1px;
    height: 10vh;
  }
  @media only screen and (max-width: ${maxWidthTablet}px) {
    border: red solid 1px;
    height: 9vh;
  } */
  }
`;
const DirectoryServiceTextFsdHide = css`
  ${DirectoryServiceTextFsdStyles}
  border-bottom: ${borderColorDirectoryService} solid 2px;
  border-left: ${borderColorDirectoryService} solid 2px;

  &:hover {
    animation: ${directoryServiceHover} 1s alternate-reverse infinite;
  }
`;
const DirectoryServiceTextFsdActive = css`
  ${DirectoryServiceTextFsdStyles}
  color: ${grayColor};
  animation: ${directoryServiceActive} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  cursor: default;
`;
const getDirectoryServiceTextFsd = (props) => {
  if (props.$matchpath) return DirectoryServiceTextFsdActive;
  return DirectoryServiceTextFsdHide;
};
export const DirectoryServiceTextFsd = styled(Link)`
  ${getDirectoryServiceTextFsd}
`;

const DirectoryServiceTextGdStyles = css`
  ${DirectoryServiceTextStyles}
  grid-area: directory-service-text-gd;
  line-height: 1.45em;
  text-align: end;
  justify-content: flex-end;
  ${
    '' /* @media only screen and (max-width: ${maxWidthDesktop}px) {
    border: red solid 1px;
    height: 10vh;
  }
  @media only screen and (max-width: ${maxWidthTablet}px) {
    border: red solid 1px;
    height: 9vh;
  } */
  }
`;
const DirectoryServiceTextGdHide = css`
  ${DirectoryServiceTextGdStyles}
  border-top: ${borderColorDirectoryService} solid 2px;
  border-right: ${borderColorDirectoryService} solid 2px;

  &:hover {
    animation: ${directoryServiceHover} 1s alternate-reverse infinite;
  }
`;
const DirectoryServiceTextGdActive = css`
  ${DirectoryServiceTextGdStyles}
  color: ${grayColor};
  animation: ${directoryServiceActive} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  cursor: default;
`;
const getDirectoryServiceTextGd = (props) => {
  if (props.$matchpath) return DirectoryServiceTextGdActive;
  return DirectoryServiceTextGdHide;
};
export const DirectoryServiceTextGd = styled(Link)`
  ${getDirectoryServiceTextGd}
`;

const DirectoryServiceTextPgStyles = css`
  ${DirectoryServiceTextStyles}
  grid-area: directory-service-text-pg;
  line-height: 1.1em;
  text-align: left;
  justify-content: flex-start;
  ${
    '' /* @media only screen and (max-width: ${maxWidthDesktop}px) {
    border: red solid 1px;
    height: 10vh;
  }
  @media only screen and (max-width: ${maxWidthTablet}px) {
    border: red solid 1px;
    height: 9vh;
  } */
  }
`;
const DirectoryServiceTextPgHide = css`
  ${DirectoryServiceTextPgStyles}
  border-top: ${borderColorDirectoryService} solid 2px;
  border-left: ${borderColorDirectoryService} solid 2px;

  &:hover {
    animation: ${directoryServiceHover} 1s alternate-reverse infinite;
  }
`;

const DirectoryServiceTextPgActive = css`
  ${DirectoryServiceTextPgStyles}
  color: ${grayColor};
  animation: ${directoryServiceActive} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  cursor: default;
`;
const getDirectoryServiceTextPg = (props) => {
  if (props.$matchpath) return DirectoryServiceTextPgActive;
  return DirectoryServiceTextPgHide;
};
export const DirectoryServiceTextPg = styled(Link)`
  ${getDirectoryServiceTextPg}
`;

LeftServiceContainer.displayName = 'LeftServiceContainer';
DirectoryService.displayName = 'DirectoryService';
DirectoryServiceTextEng.displayName = 'DirectoryServiceTextEng';
DirectoryServiceTextFsd.displayName = 'DirectoryServiceTextFsd';
DirectoryServiceTextGd.displayName = 'DirectoryServiceTextGd';
DirectoryServiceTextPg.displayName = 'DirectoryServiceTextPg';
