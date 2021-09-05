import styled, { css } from 'styled-components';

const getTimelineImage = ({ $lowWaveImage }) => {
  return $lowWaveImage.item.iconPath;
};

const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};

const AboutDropdownStyles = css`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 2vw;
  transition: height 0.5s ease-in-out, top 0.2s ease;
  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 50vh;
    margin-left: 0;
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
  @media only screen and (max-width: 800px) {
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
