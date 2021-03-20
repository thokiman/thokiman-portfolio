import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

export const AboutDropdownOptionsContainer = styled.div`
  background-color: rgba(18, 129, 148, 0.5);
  width: 100%;
`;

const aboutDropdownOptionSlide = keyframes`
             0% {
                 margin-top: -13px;
             }

             100% {
                 margin-top: 0px;
             }

`;
const aboutDropdownOptionsFade = keyframes`{
         0% {
                 background-color: rgba(18, 129, 148,0);
             }

             100% {
                 background-color:   rgba(18, 129, 148,0.4);
             }
}`;

export const AboutDropdownOption = styled.div`
  width: 100%;
  margin: 2px;
  display: flex;
  justify-content: center;

  animation: ${aboutDropdownOptionsFade} 2s ease-in-out,
    ${aboutDropdownOptionSlide} 0.5s ease-in-out;
`;

const aboutDropdownOptionHoverFade = keyframes`
      0% {
        background-color:  rgba(116, 198, 212,0.3);
      }

      100% {
        background-color: rgba(116, 198, 212,0.7);
      }

`;

const AboutDropdownLinkOptionStyles = css`
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  font-size: 140%;
  cursor: pointer;
`;
const AboutDropdownLinkOptionHoverStyles = css`
  background-color: rgba(116, 198, 212, 0.7);
  animation: ${aboutDropdownOptionHoverFade} 0.3s ease-in-out;
`;

const AboutDropdownLinkOptionHide = css`
  ${AboutDropdownLinkOptionStyles}
  color: #e3e1e4;
  &:hover {
    ${AboutDropdownLinkOptionHoverStyles}
    color: #128194;
  }
`;
const AboutDropdownLinkOptionActive = css`
  ${AboutDropdownLinkOptionStyles}
  color: #3f4249;
  &:hover {
    ${AboutDropdownLinkOptionHoverStyles}
  }
`;

const getAboutDropdownLinkOption = ({ $matchpath }) => {
  if ($matchpath) {
    return AboutDropdownLinkOptionActive;
  }
  return AboutDropdownLinkOptionHide;
};

export const AboutDropdownLinkOption = styled(Link)`
  ${getAboutDropdownLinkOption}
`;
AboutDropdownOptionsContainer.displayName = "AboutDropdownOptionsContainer";
AboutDropdownOption.displayName = "AboutDropdownOption";
AboutDropdownLinkOption.displayName = "AboutDropdownLinkOption";
