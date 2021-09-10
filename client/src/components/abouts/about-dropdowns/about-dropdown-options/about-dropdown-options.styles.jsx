import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const backgroundAboutDropdownContainerColor = 'rgba(18, 129, 148, 0.5)';
const aboutDropdownOptionsFadeAnimationColor0 = 'rgba(18, 129, 148,0)';
const aboutDropdownOptionsFadeAnimationColor100 = 'rgba(18, 129, 148,0.4)';
const aboutDropdownOptionHoverFadeAnimationColor0 = 'rgba(116, 198, 212,0.3)';
const aboutDropdownOptionHoverFadeAnimationColor100 = 'rgba(116, 198, 212,0.7)';
const backgroundAboutDropdownLinkOptionHoverStylesColor =
  'rgba(116, 198, 212, 0.7)';
const whiteSmokeColor = '#e3e1e4';
const greenBlueColor = '#128194';
const grayColor = '#3f4249';

export const AboutDropdownOptionsContainer = styled.div`
  background-color: ${backgroundAboutDropdownContainerColor};
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
                 background-color: ${aboutDropdownOptionsFadeAnimationColor0};
             }

             100% {
                 background-color:   ${aboutDropdownOptionsFadeAnimationColor100};
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
        background-color:  ${aboutDropdownOptionHoverFadeAnimationColor0};
      }

      100% {
        background-color: ${aboutDropdownOptionHoverFadeAnimationColor100};
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
  background-color: ${backgroundAboutDropdownLinkOptionHoverStylesColor};
  animation: ${aboutDropdownOptionHoverFade} 0.3s ease-in-out;
`;

const AboutDropdownLinkOptionHide = css`
  ${AboutDropdownLinkOptionStyles}
  color:${whiteSmokeColor};
  &:hover {
    ${AboutDropdownLinkOptionHoverStyles}
    color: ${greenBlueColor};
  }
`;
const AboutDropdownLinkOptionActive = css`
  ${AboutDropdownLinkOptionStyles}
  color: ${grayColor};
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
AboutDropdownOptionsContainer.displayName = 'AboutDropdownOptionsContainer';
AboutDropdownOption.displayName = 'AboutDropdownOption';
AboutDropdownLinkOption.displayName = 'AboutDropdownLinkOption';
