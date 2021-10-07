import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const maxWidthSmartphone = 800;
const greenBlueColor = '#128194';
const whiteSmokeColor = '#e3e1e4';

const SideBarContainerIsActivated = css`
  left: 0;
  transition: all 0.5s ease;
  z-index: 2;
  opacity: 1;
  transition: all 0.5s ease;
`;

const getSideBarContainer = ({ $issidebaractive }) => {
  if ($issidebaractive) return SideBarContainerIsActivated;
  return null;
};

export const SideBarHeaderContainer = styled.div`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 140px;
    position: absolute;
    top: 14vh;
    left: 140px;
    bottom: 0;
    transition: all 0.5s ease;
    display: flex;
    align-items: flex-start;
    overflow-y: hidden;
    opacity: 0;
    ${getSideBarContainer}
  }
`;

export const SideBarHeaderTextContainer = styled.div`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    position: relative;
    top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const SideBarHeaderTextActive = css`
  border-bottom: ${greenBlueColor} solid 1px;
  color: ${whiteSmokeColor};
  transition: all 0.5s linear;
`;
const SideBarHeaderTextHide = css`
  border: none;
  color: ${greenBlueColor};
  transition: all 0.5s linear;
`;
const getSideBarHeaderTextActive = ({ $matchpath }) => {
  if ($matchpath) return SideBarHeaderTextActive;
  return SideBarHeaderTextHide;
};
export const SideBarHeaderLink = styled(Link)`
  display: none;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    ${getSideBarHeaderTextActive}

    text-decoration: none;
    width: fit-content;
    height: 100%;
    display: block;
    text-align: center;
    padding: 0 4px;
    font-size: 30px;
    margin: 10px 0;
    padding: 5px 0;
  }
`;
