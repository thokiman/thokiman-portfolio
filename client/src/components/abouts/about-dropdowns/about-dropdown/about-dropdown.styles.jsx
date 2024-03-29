import styled, { css } from 'styled-components';

const maxWidthSmartphone = 800;

const getTimelineImage = ({ $lowWaveImage }) => {
  return $lowWaveImage.item.iconPath;
};

const AboutDropdownIsNotActivated = css`
  display: none;
`;

const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return AboutDropdownIsNotActivated;
  return null;
};

const getTopAboutDropdownContainer = ({ $measureaboutdropdowncontainer }) => {
  return $measureaboutdropdowncontainer.top;
};
const getHeightAboutDropdownContainer = ({
  $measureaboutdropdowncontainer,
}) => {
  return $measureaboutdropdowncontainer.height;
};

const AboutDropdownStyles = css`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 2vw;
  transition: height 0.5s ease-in-out, top 0.2s ease;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 80%;
    height: ${getHeightAboutDropdownContainer}vh;
    position: relative;
    top: ${getTopAboutDropdownContainer}vh;
    margin-left: 0px;
    margin-top: 20px;

    ${getSideBarActive}
  }
`;

const AboutDropdownLeftPageContainer = css`
  ${AboutDropdownStyles}

  height: 98%;
`;

const AboutDropdownLeftPageContainerTimeline = css`
  ${AboutDropdownStyles}
  height: 580px;
  width: 320px;
  background: url(${getTimelineImage});
  background-size: cover;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    background-image: none;
  }
`;

const getAboutDropdownContainer = ({ $matchpath }) => {
  if ($matchpath) {
    return AboutDropdownLeftPageContainerTimeline;
  }
  return AboutDropdownLeftPageContainer;
};

export const AboutDropdownContainer = styled.div`
  ${getAboutDropdownContainer}
`;
AboutDropdownContainer.displayName = 'AboutDropdownContainer';
