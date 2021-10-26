import styled, { css } from 'styled-components';

const backgroundEducationContainerColor = 'rgba(18, 129, 148, 0.8)';
const maxWidthSmartphone = 800;
const AboutContentEducationIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return AboutContentEducationIsNotActivated;
  return null;
};

const getTopEducationContainer = ({ $measureeducationcontainer }) => {
  return $measureeducationcontainer.top;
};
export const EducationContainer = styled.div`
  background-color: ${backgroundEducationContainerColor};
  width: 64.5vw;
  margin-right: 2vw;
  padding: 40px 0;
  height: 95%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: baskerville-old-face;
  position: relative;
  top: ${getTopEducationContainer}vh;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    overflow-y: hidden;
    margin-right: 0;
    ${getSideBarActive}
  }
`;

EducationContainer.displayName = 'EducationContainer';
