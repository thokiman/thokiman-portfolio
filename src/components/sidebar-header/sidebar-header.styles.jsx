import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const SideBarContainerHidden = css`
  left: 0;
  transition: all 0.5s ease;
`;

const getSideBarContainer = (props) => {
  if (props.$issidebarhidden) return SideBarContainerHidden;
  return null;
};

export const SideBarHeaderContainer = styled.div`
  @media only screen and (max-width: 800px) {
    width: 140px;
    position: absolute;
    top: 14vh;
    left: 140;
    bottom: 0;
    transition: all 0.5s ease;
    display: flex;
    align-items: flex-start;
    overflow-y: hidden;
    ${getSideBarContainer}
  }
`;

export const SideBarHeaderTextContainer = styled.div`
  @media only screen and (max-width: 800px) {
    width: 100%;
    position: relative;
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const SideBarHeaderTextActive = css`
  border-bottom: #128194 solid 1px;
  color: #e3e1e4;
  transition: all 0.5s linear;
`;
const SideBarHeaderTextHide = css`
  border: none;
  color: #128194;
  transition: all 0.5s linear;
`;
const getSideBarHeaderTextActive = (props) => {
  if (props.$matchpath) return SideBarHeaderTextActive;
  return SideBarHeaderTextHide;
};
export const SideBarHeaderLink = styled(Link)`
  display: none;
  @media only screen and (max-width: 800px) {
    ${getSideBarHeaderTextActive}
    text-decoration: none;
    width:fit-content;
    height: 100%;
    display: block;
    text-align: center;
    padding: 0 4px;
    font-size: 30px;
    margin: 10px 0;
    padding: 5px 0;
    
    
`;
