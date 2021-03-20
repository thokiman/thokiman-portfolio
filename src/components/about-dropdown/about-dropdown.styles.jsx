import styled, { css } from "styled-components";
import TimelineImage from "../../assets/layout/water-2.jpg";
const AboutDropdownStyles = css`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 2vw;
  transition: height 0.5s ease-in-out, top 0.2s ease;
`;

const AboutDropdownLeftPageContainer = css`
  ${AboutDropdownStyles}
  height: 98%;
`;

const AboutDropdownLeftPageContainerTimeline = css`
  ${AboutDropdownStyles}
  height: 580px;
  width: 320px;
  background: url(${TimelineImage});
  background-size: cover;
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
AboutDropdownContainer.displayName = "AboutDropdownContainer";
